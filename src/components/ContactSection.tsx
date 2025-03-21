
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5561985038892?text=Olá! Gostaria de mais informações sobre a locação de tendas, mesas e cadeiras.', '_blank');
  };
  
  const sendEmail = () => {
    window.location.href = 'mailto:mjlocacoesbsb@gmail.com?subject=Informações sobre locação';
  };

  return (
    <section id="contato" className="py-20 bg-mj-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Estamos prontos para atender sua necessidade</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact Info */}
            <div className="p-8 glass-card rounded-2xl shadow-lg reveal" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-mj-wine mb-8">Informações de Contato</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-4 bg-mj-yellow/50 rounded-lg h-min">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mj-wine mb-1">Telefone / WhatsApp</h4>
                    <p className="text-gray-700 mb-2">(61) 98503-8892</p>
                    <button onClick={openWhatsApp} className="text-sm text-mj-wine hover:text-black transition-colors font-medium">
                      Conversar via WhatsApp →
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-mj-yellow/50 rounded-lg h-min">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mj-wine mb-1">E-mail</h4>
                    <p className="text-gray-700 mb-2">mjlocacoesbsb@gmail.com</p>
                    <button onClick={sendEmail} className="text-sm text-mj-wine hover:text-black transition-colors font-medium">
                      Enviar um e-mail →
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-mj-yellow/50 rounded-lg h-min">
                    <Clock className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mj-wine mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-700">Das 8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-mj-yellow/50 rounded-lg h-min">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mj-wine mb-1">Área de Cobertura</h4>
                    <p className="text-gray-700">Todo o Distrito Federal e entorno</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA and Image */}
            <div className="glass-card rounded-2xl overflow-hidden shadow-lg reveal" style={{ animationDelay: '0.3s' }}>
              <div className="h-64 w-full">
                <div 
                  className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80')] 
                  bg-cover bg-center"
                ></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-mj-wine mb-4">Solicite um orçamento</h3>
                <p className="text-gray-700 mb-6">
                  Entre em contato conosco para solicitar um orçamento personalizado para o seu evento. 
                  Temos as melhores soluções com preços acessíveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={openWhatsApp} className="btn-primary flex-1 flex justify-center items-center gap-2">
                    <Phone size={18} />
                    Falar via WhatsApp
                  </button>
                  <button onClick={sendEmail} className="btn-secondary flex-1 flex justify-center items-center gap-2">
                    <Mail size={18} />
                    Enviar E-mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
