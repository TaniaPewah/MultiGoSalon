import { useEffect, useState } from 'react';
import { useStore } from './store';
import { LoginView } from './views/Login';
import { SalonView } from './views/Salon';
import { GameView } from './views/Game';
import { PracticeView } from './views/Practice';

function ReconnectBanner() {
  const { reconnectUntil } = useStore();
  const [, setTick] = useState(0);
  useEffect(() => {
    if (reconnectUntil == null) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 250);
    return () => window.clearInterval(id);
  }, [reconnectUntil]);
  if (reconnectUntil == null) return null;
  const seconds = Math.max(0, Math.ceil((reconnectUntil - Date.now()) / 1000));
  return (
    <div className="reconnect" data-testid="reconnect-banner" role="status">
      {seconds > 0
        ? `Reconnecting. The server holds this game for ${seconds}s.`
        : 'Reconnecting. The hold has ended.'}
    </div>
  );
}

export function App() {
  const { view, toasts, actions } = useStore();

  return (
    <div className="app">
      <ReconnectBanner />
      {view === 'login' && <LoginView />}
      {view === 'salon' && <SalonView />}
      {view === 'game' && <GameView />}
      {view === 'practice' && <PracticeView />}
      <div className="toasts" aria-live="polite">
        {toasts.map((t) => (
          <button key={t.id} className={`toast toast--${t.tone}`} onClick={() => actions.dismissToast(t.id)}>
            {t.text}
          </button>
        ))}
      </div>
    </div>
  );
}
