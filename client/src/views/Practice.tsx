import { useEffect, useRef, useState } from 'react';
import { colorToSign } from '@multigo/shared';
import { Avatar } from '../components/Avatar';
import { GoBoard } from '../components/GoBoard';
import { useStore } from '../store';

export function PracticeView() {
  const { me, problems, practice, actions } = useStore();
  const listRef = useRef<HTMLOListElement>(null);
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  const currentIndex = practice ? problems.findIndex((p) => p.id === practice.problemId) : -1;
  const next = currentIndex >= 0 && currentIndex < problems.length - 1 ? problems[currentIndex + 1] : null;
  const nextUnsolved = problems.findIndex((p) => !solvedIds.includes(p.id));
  const standingIndex = nextUnsolved === -1 ? Math.max(problems.length - 1, 0) : nextUnsolved;

  useEffect(() => {
    if (practice?.status !== 'solved') return;
    setSolvedIds((ids) => (ids.includes(practice.problemId) ? ids : [...ids, practice.problemId]));
  }, [practice?.status, practice?.problemId]);

  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector('.problem--active');
    if (!list || !(active instanceof HTMLElement)) return;
    const listTop = list.getBoundingClientRect().top;
    const activeTop = active.getBoundingClientRect().top;
    list.scrollTop += activeTop - listTop - list.clientHeight / 2 + active.clientHeight / 2;
  }, [practice?.problemId]);

  return (
    <main className="practice">
      <header className="topbar topbar--compact">
        <h1 className="brand brand--small">
          multi<span>GO</span>
        </h1>
        <div className="game__meta">Practice · life and death</div>
        <button className="btn btn--ghost" onClick={actions.closePractice} data-testid="practice-back">
          Back to the salon
        </button>
      </header>

      <section className="practice__layout">
        <aside className="problem-list" data-testid="problem-list">
          <h2>Tsumego</h2>
          <p className="muted">Graded from intro to hard. Black to play. Find the move that captures, lives or kills.</p>
          {problems.length === 0 && <p className="muted">Loading problems…</p>}
          <ol className="path" ref={listRef}>
            {problems.map((p, i) => {
              const playable = i === nextUnsolved;
              const solved = solvedIds.includes(p.id);
              return (
                <li key={p.id} className="path__stop">
                  <button
                    className={['path__node', playable ? 'problem--active' : '', solved ? 'path__node--solved' : ''].join(' ')}
                    onClick={() => {
                      if (playable) actions.startProblem(p.id);
                    }}
                    data-testid={`problem-${p.id}`}
                    aria-label={p.title}
                    disabled={!playable}
                  >
                    {i === standingIndex && me ? <Avatar character={me.character} size={32} /> : i + 1}
                  </button>
                  <span className="path__label">{p.title}</span>
                </li>
              );
            })}
          </ol>
        </aside>

        <div className="practice__board">
          {practice ? (
            <>
              <div className="practice__header">
                <h2>{practice.title}</h2>
                <p>{practice.description}</p>
              </div>
              <div className="board-wrap board-wrap--practice">
                <GoBoard
                  size={practice.size}
                  board={practice.board}
                  hoverSign={practice.status === 'solving' ? colorToSign(practice.toPlay) : null}
                  lastMove={practice.lastMove}
                  onPlace={actions.practiceMove}
                />
              </div>
              <div className="practice__answer">
                <div className={`practice__message practice__message--${practice.status}`} data-testid="practice-message" aria-live="polite">
                  {practice.status === 'solved' && <strong>Correct! </strong>}
                  {practice.status === 'failed' && <strong>Not quite. </strong>}
                  {practice.message}
                </div>
                <button className="btn btn--secondary" onClick={actions.resetProblem} data-testid="practice-reset">
                  Reset
                </button>
                {next && nextUnsolved === currentIndex + 1 && (
                  <button className="btn btn--primary practice__next" onClick={() => actions.startProblem(next.id)} data-testid="practice-next">
                    Next problem →
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="practice__empty">
              <h2>Pick a problem</h2>
              <p className="muted">Choose one from the list to start. Click an intersection to play your answer; the server checks it and answers for White.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
