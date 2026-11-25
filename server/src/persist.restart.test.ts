import { mkdtempSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import path from 'node:path';
import express from 'express';
import { Server } from 'socket.io';
import { io as ioc, type Socket as ClientSocket } from 'socket.io-client';
import { afterEach, describe, expect, it } from 'vitest';
import type { ClientToServerEvents, GameState, ServerToClientEvents } from '@multigo/shared';
import { openStore } from './persist.js';
import { registerSockets } from './sockets.js';

type Client = ClientSocket<ServerToClientEvents, ClientToServerEvents>;

function onceEvent<E extends keyof ServerToClientEvents>(
  socket: Client,
  event: E,
): Promise<Parameters<ServerToClientEvents[E]>[0]> {
  return new Promise((resolve) => {
    socket.once(event, (...args: unknown[]) => resolve(args[0] as Parameters<ServerToClientEvents[E]>[0]));
  });
}

describe('ratings and finished games survive a restart', () => {
  const clients: Client[] = [];
  const closers: Array<() => Promise<void>> = [];
  const dir = mkdtempSync(path.join(tmpdir(), 'multigo-store-'));
  let file = path.join(dir, 'salon.json');

  afterEach(async () => {
    for (const c of clients) c.close();
    clients.length = 0;
    for (const close of closers) await close();
    closers.length = 0;
  });

  function boot() {
    const app = express();
    const httpServer = createServer(app);
    const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer);
    const store = openStore(file);
    app.get('/records', (_req, res) => {
      res.json(store.records());
    });
    registerSockets(io, { reconnectGraceMs: 60_000, store });
    const ready = new Promise<number>((resolve) => {
      httpServer.listen(0, '127.0.0.1', () => {
        const addr = httpServer.address();
        if (!addr || typeof addr === 'string') throw new Error('no port');
        resolve(addr.port);
      });
    });
    closers.push(
      () =>
        new Promise((resolve) => {
          io.close();
          httpServer.close(() => resolve());
        }),
    );
    return ready;
  }

  function connect(port: number): Client {
    const c = ioc(`http://127.0.0.1:${port}`, {
      transports: ['websocket'],
      forceNew: true,
      reconnection: false,
    }) as Client;
    clients.push(c);
    return c;
  }

  async function join(c: Client, name: string, playerId: string) {
    await new Promise<void>((resolve) => {
      if (c.connected) resolve();
      else c.once('connect', () => resolve());
    });
    const ready = onceEvent(c, 'session:ready');
    c.emit('session:join', { name, character: 'sloth', playerId });
    return ready;
  }

  it('keeps the post-game rating and the finished record after a new server starts', async () => {
    const aId = '11111111-1111-4111-8111-111111111111';
    const bId = '22222222-2222-4222-8222-222222222222';
    const port = await boot();
    const a = connect(port);
    const b = connect(port);
    await join(a, 'Aki', aId);
    await join(b, 'Yuki', bId);

    const started = onceEvent(a, 'game:start');
    a.emit('salon:sit', { tableId: 't1', seat: 0 });
    b.emit('salon:sit', { tableId: 't1', seat: 1 });
    const game = await started;

    const finished = onceEvent(b, 'game:state');
    a.emit('game:resign', { gameId: game.id });
    const end = await finished;
    expect(end.phase).toBe('finished');

    const restarted = await boot();
    const again = connect(restarted);
    const session = await join(again, 'Aki', aId);
    expect(session.resume).toBe('salon');
    expect(session.player.rating).not.toBe(1500);

    const records = (await fetch(`http://127.0.0.1:${restarted}/records`).then((r) => r.json())) as GameState[];
    expect(records).toEqual([expect.objectContaining({ id: game.id, phase: 'finished' })]);
  });

  it('does not resume a game that was still in progress when the server stopped', async () => {
    file = path.join(dir, 'in-progress.json');
    const aId = '33333333-3333-4333-8333-333333333333';
    const bId = '44444444-4444-4444-8444-444444444444';
    const port = await boot();
    const a = connect(port);
    const b = connect(port);
    const first = await join(a, 'Aki', aId);
    await join(b, 'Yuki', bId);

    const started = onceEvent(a, 'game:start');
    a.emit('salon:sit', { tableId: 't1', seat: 0 });
    b.emit('salon:sit', { tableId: 't1', seat: 1 });
    const game = await started;
    expect(game.phase).toBe('playing');

    const restarted = await boot();
    const again = connect(restarted);
    const session = await join(again, 'Aki', aId);
    expect(session.resume).toBe('salon');
    expect(session.serverId).not.toBe(first.serverId);
    expect(session.player.rating).toBe(1500);

    const records = (await fetch(`http://127.0.0.1:${restarted}/records`).then((r) => r.json())) as GameState[];
    expect(records.find((saved) => saved.id === game.id)).toBeUndefined();
  });
});
