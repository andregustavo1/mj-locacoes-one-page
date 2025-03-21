
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5561985038892?text=Olá! Gostaria de mais informações sobre a locação de tendas, mesas e cadeiras.', '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="whatsapp-btn"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
