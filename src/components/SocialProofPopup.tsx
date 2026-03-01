import { useState, useEffect } from 'react';

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState({ name: '', city: '', state: '', minutes: 0 });

  const buyers = [
    {name:"Luciano", city:"Macaé", state:"RJ"}, {name:"Sarah", city:"Ipatinga", state:"MG"},
    {name:"Helton", city:"Rio de Janeiro", state:"RJ"}, {name:"João", city:"São Luís", state:"MA"},
    {name:"Vinicius", city:"Oriximiná", state:"PA"}, {name:"Diego", city:"Conceição do Mato Dentro", state:"MG"},
    {name:"Marcelo", city:"Jacareí", state:"SP"}, {name:"Valentim", city:"Lagoa Santa", state:"MG"},
    {name:"Fabio", city:"Parauapebas", state:"PA"}, {name:"Raphael", city:"Matozinhos", state:"MG"},
    {name:"Everton", city:"Cotia", state:"SP"}, {name:"Rafael", city:"Brumadinho", state:"MG"},
    {name:"Reginaldo", city:"Campos dos Goytacazes", state:"RJ"}, {name:"Leandro", city:"Jaguariaíva", state:"PR"},
    {name:"Juliano", city:"Campos Belos", state:"GO"}, {name:"Claudinei", city:"Cotia", state:"SP"},
    {name:"Iago", city:"Hortolândia", state:"SP"}, {name:"Gabriel", city:"Indaiatuba", state:"SP"},
    {name:"Wilkerson", city:"Rio das Ostras", state:"RJ"}, {name:"Thiago", city:"Campinas", state:"SP"}
  ];

  useEffect(() => {
    const showNotification = () => {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      const minutes = Math.floor(Math.random() * 29) + 1;

      setCurrentBuyer({ ...buyer, minutes });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(showNotification, 10000 + Math.random() * 5000);
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const initial = currentBuyer.name.charAt(0);

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-[#060F24] border border-[#004AAD] border-l-4 rounded-xl px-4 py-3 shadow-2xl animate-slide-in max-w-sm flex items-center gap-3">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #004AAD, #0066FF)',
          boxShadow: '0 0 15px rgba(0,102,255,0.5)'
        }}
      >
        {initial}
      </div>
      <div className="flex-1">
        <p className="text-sm text-white font-semibold">
          🔥 <strong>{currentBuyer.name}</strong> de {currentBuyer.city} - {currentBuyer.state}
        </p>
        <p className="text-xs text-[#7A8FAD]">Já se tornou nosso aluno</p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-[#7A8FAD] hover:text-white text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
};

export default SocialProofPopup;
