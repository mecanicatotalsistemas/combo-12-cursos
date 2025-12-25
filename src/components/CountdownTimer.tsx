import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 1);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border-4 border-yellow-400">
      <div className="text-center">
        <Clock className="w-16 h-16 text-yellow-300 mx-auto mb-4 animate-bounce" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ⏳ Oferta Válida Por Tempo Limitado!
        </h3>
        <div className="flex justify-center gap-4 md:gap-8">
          <div className="bg-black bg-opacity-50 rounded-xl p-4 md:p-6 min-w-[100px]">
            <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider">Horas</div>
          </div>
          <div className="bg-black bg-opacity-50 rounded-xl p-4 md:p-6 min-w-[100px]">
            <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider">Minutos</div>
          </div>
          <div className="bg-black bg-opacity-50 rounded-xl p-4 md:p-6 min-w-[100px]">
            <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider">Segundos</div>
          </div>
        </div>
        <p className="text-xl text-yellow-100 mt-6 font-semibold">
          Não perca esta oportunidade única de investir na sua carreira!
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
