import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { GameState, PlayerInfo } from '@multigo/shared';

export interface StoredRating {
  rating: number;
  rank: string;
}

export interface SalonStore {
  rating(playerId: string): StoredRating | undefined;
  /** Writes a finished game and the players' new ratings. Ignores anything still in progress. */
  finish(state: GameState, updated: { black: PlayerInfo; white: PlayerInfo }): void;
  records(): GameState[];
}

interface FileShape {
  ratings: Record<string, StoredRating>;
  finished: GameState[];
}

export function openStore(file: string): SalonStore {
  const data = load(file);

  const save = () => {
    mkdirSync(path.dirname(file), { recursive: true });
    const tmp = `${file}.${process.pid}.tmp`;
    writeFileSync(tmp, JSON.stringify(data));
    renameSync(tmp, file);
  };

  return {
    rating(playerId) {
      return data.ratings[playerId];
    },
    finish(state, updated) {
      if (state.phase !== 'finished') return;
      const record: GameState = {
        ...state,
        players: { black: updated.black, white: updated.white },
      };
      const existing = data.finished.findIndex((game) => game.id === record.id);
      if (existing >= 0) data.finished[existing] = record;
      else data.finished.push(record);
      data.ratings[updated.black.id] = { rating: updated.black.rating, rank: updated.black.rank };
      data.ratings[updated.white.id] = { rating: updated.white.rating, rank: updated.white.rank };
      save();
    },
    records() {
      return data.finished.map((game) => structuredClone(game));
    },
  };
}

function load(file: string): FileShape {
  try {
    const raw = JSON.parse(readFileSync(file, 'utf8')) as Partial<FileShape>;
    return {
      ratings: raw.ratings && typeof raw.ratings === 'object' ? raw.ratings : {},
      finished: Array.isArray(raw.finished) ? raw.finished : [],
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return { ratings: {}, finished: [] };
    throw err;
  }
}
