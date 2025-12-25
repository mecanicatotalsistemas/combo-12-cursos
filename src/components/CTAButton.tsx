const CTAButton = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.open('https://pay.hotmart.com/U103436259O?off=688zq0hh&checkoutMode=10&bid=1766526642161', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
      style={{
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }}
    >
      🔥 GARANTIR MEU COMBO AGORA
    </button>
  );
};

export default CTAButton;
