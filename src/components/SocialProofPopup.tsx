import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({ name: '', city: '', minutes: 0 });

  const names = ['Carlos', 'Jéssica', 'Rodrigo', 'Fernanda', 'Luiz', 'Amanda', 'Fábio', 'Patrícia', 'Bruno', 'Mariana', 'Rafael', 'Camila'];
  const cities = ['SP', 'RJ', 'MG', 'PR', 'SC', 'BA', 'RS', 'GO', 'PE', 'CE', 'DF', 'ES'];

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const minutes = Math.floor(Math.random() * 10) + 1;

      setCurrentNotification({ name, city, minutes });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-green-500 animate-slide-in max-w-sm"
      style={{
        animation: 'slideIn 0.5s ease-out'
      }}
    >
      <div className="flex items-center gap-3">
        <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
        <div>
          <p className="font-semibold text-sm">
            <span className="text-green-400">{currentNotification.name}</span> de {currentNotification.city}
          </p>
          <p className="text-xs text-gray-300">
            se inscreveu há {currentNotification.minutes} minutos!
          </p>
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialProofPopup;
