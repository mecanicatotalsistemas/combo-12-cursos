import { useState, useEffect } from 'react';

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const KEY = 'combo12_countdown';
    const saved = sessionStorage.getItem(KEY);
    let secs = saved ? parseInt(saved) : 23 * 3600 + 47 * 60 + 33;

    const updateTimer = () => {
      if (secs <= 0) secs = 23 * 3600;
      secs--;
      sessionStorage.setItem(KEY, secs.toString());

      const h = String(Math.floor(secs / 3600)).padStart(2, '0');
      const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
      const s = String(secs % 60).padStart(2, '0');

      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#002D6E] via-[#004AAD] to-[#002D6E] text-white py-3 px-4 shimmer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-wider">
          ⚡ OFERTA ESPECIAL — ENCERRA EM:{' '}
          <span className="timer-display inline-flex gap-1">
            <span className="bg-black bg-opacity-40 px-2 py-1 rounded">{timeLeft.hours}</span>
            <span>:</span>
            <span className="bg-black bg-opacity-40 px-2 py-1 rounded">{timeLeft.minutes}</span>
            <span>:</span>
            <span className="bg-black bg-opacity-40 px-2 py-1 rounded">{timeLeft.seconds}</span>
          </span>
          {' '}— Não perca!
        </p>
      </div>
    </div>
  );
};

export default UrgencyBar;
