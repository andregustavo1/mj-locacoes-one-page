
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5561985038892?text=Olá! Gostaria de mais informações sobre a locação de tendas, mesas e cadeiras.', '_blank');
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-mj-wine/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80')] 
          bg-cover bg-center z-0"
        ></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-white font-medium">Estrutura de qualidade para seu evento</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Aluguel de <span className="text-mj-yellow">Tendas</span>, Mesas e Cadeiras
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-10">
            Soluções completas para todos os tipos de eventos, com qualidade garantida e preço justo. Entrega e montagem em todo DF e entorno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openWhatsApp} className="btn-primary flex items-center justify-center gap-2">
              Fale via WhatsApp
              <ArrowRight size={20} />
            </button>
            <button onClick={() => scrollToSection('servicos')} className="btn-secondary flex items-center justify-center gap-2">
              Nossos Serviços
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="w-8 h-14 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
