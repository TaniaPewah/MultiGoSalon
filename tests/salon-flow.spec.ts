import { expect, test, type Page } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const ARTIFACTS = 'tests/artifacts';

async function enter(page: Page, name: string) {
  await page.goto('/');
  await page.getByTestId('name-input').fill(name);
  await page.getByTestId('character-sloth').click();
  await page.getByTestId('join-button').click();
  await expect(page.getByTestId('me-chip')).toContainText(name);
}

async function clickPoint(page: Page, x: number, y: number, size: number, flipped: boolean) {
  const board = page.getByTestId('go-board');
  const box = await board.boundingBox();
  if (!box) throw new Error('board has no box');
  const margin = 0.7;
  const extent = size - 1 + margin * 2;
  const dx = flipped ? size - 1 - x : x;
  const dy = flipped ? size - 1 - y : y;
  await board.click({
    position: {
      x: ((dx + margin) / extent) * box.width,
      y: ((dy + margin) / extent) * box.height,
    },
  });
}

test('six player phases through salon, game, and practice', async ({ browser }) => {
  await mkdir(ARTIFACTS, { recursive: true });
  const akiContext = await browser.newContext({ recordVideo: { dir: ARTIFACTS, size: { width: 1280, height: 800 } } });
  const yukiContext = await browser.newContext({ recordVideo: { dir: ARTIFACTS, size: { width: 1280, height: 800 } } });
  const aki = await akiContext.newPage();
  const yuki = await yukiContext.newPage();

  await enter(aki, 'Aki');
  await enter(yuki, 'Yuki');
  await expect(aki.getByTestId('sprite-Yuki')).toBeVisible();
  await aki.screenshot({ path: `${ARTIFACTS}/phase-1-enter.png` });

  const before = await yuki.getByTestId('sprite-Aki').getAttribute('style');
  await aki.getByTestId('room').click({ position: { x: 40, y: 40 } });
  await expect.poll(async () => yuki.getByTestId('sprite-Aki').getAttribute('style')).not.toBe(before);
  await yuki.screenshot({ path: `${ARTIFACTS}/phase-2-move.png` });

  await aki.getByTestId('find-game').click();
  await yuki.getByTestId('find-game').click();
  await expect(aki.getByTestId('game-status')).toContainText('Your move.');
  await expect(yuki.getByTestId('game-status')).toContainText('Waiting for Aki');
  await aki.screenshot({ path: `${ARTIFACTS}/phase-3-game.png` });

  await clickPoint(aki, 0, 1, 9, false);
  await expect(yuki.getByTestId('game-status')).toContainText('Your move.');
  await clickPoint(yuki, 4, 4, 9, true);
  await expect(aki.getByTestId('game-status')).toContainText('Your move.');
  await clickPoint(aki, 1, 0, 9, false);
  await expect(yuki.getByTestId('game-status')).toContainText('Your move.');
  await clickPoint(yuki, 0, 0, 9, true);
  await expect(yuki.getByText('Suicide is not allowed.')).toBeVisible();
  await yuki.screenshot({ path: `${ARTIFACTS}/phase-4-illegal.png` });

  await yuki.getByTestId('resign-button').click();
  await yuki.getByTestId('confirm-resign').click();
  await expect(aki.getByTestId('result-panel')).toBeVisible();
  await aki.screenshot({ path: `${ARTIFACTS}/phase-5-finish.png` });

  await aki.getByTestId('back-to-salon').click();
  await aki.getByTestId('practice-button').click();
  await aki.getByTestId('problem-first-capture').click();
  await clickPoint(aki, 4, 5, 9, false);
  await expect(aki.getByTestId('practice-message')).toContainText('Correct');
  await aki.screenshot({ path: `${ARTIFACTS}/phase-6-practice.png` });

  const video = aki.video();
  await akiContext.close();
  await yukiContext.close();
  if (video) await video.saveAs(`${ARTIFACTS}/run.webm`);
});
