const CTAButton = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-10900667164'});
    }
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout');
    }
    window.open('https://pay.hotmart.com/U103436259O?off=688zq0hh&checkoutMode=10&bid=1766526642161', '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className="btn-cta text-xl md:text-2xl px-12 py-6 rounded-xl uppercase"
      >
        🔥 GARANTIR MEU COMBO AGORA
      </button>
      <p className="text-sm text-gray-400 flex items-center gap-2">
        <span>🔒</span>
        <span>Compra 100% Segura • Acesso Imediato</span>
      </p>
    </div>
  );
};

export default CTAButton;
