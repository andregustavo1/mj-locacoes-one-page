
import { Calendar, MapPin, Clock, Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="section-title">Sobre a MJ Locações</h2>
          <p className="section-subtitle">Compromisso, qualidade e pontualidade há mais de 5 anos</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg h-full reveal">
            <div 
              className="w-full h-full bg-[url('images/99.png')] 
              bg-cover bg-center transition-transform duration-700 hover:scale-110"
            ></div>
          </div>
          
          {/* Right side - Text and features */}
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-mj-wine mb-6">Excelência em Locação para Eventos</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Na MJ Locações estamos comprometidos em servir com excelência, oferecendo soluções que trazem 
              tranquilidade e sucesso para você. Estamos com você em cada passo!
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mj-yellow/50 rounded-lg">
                  <Calendar className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mj-wine mb-1">Disponibilidade</h4>
                  <p className="text-gray-600 text-sm">Funcionamos todos os dias, inclusive feriados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mj-yellow/50 rounded-lg">
                  <MapPin className="" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mj-wine mb-1">Cobertura</h4>
                  <p className="text-gray-600 text-sm">Atendemos todo o DF e entorno</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mj-yellow/50 rounded-lg">
                  <Clock className="" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mj-wine mb-1">Horário</h4>
                  <p className="text-gray-600 text-sm">Atendimento das 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mj-yellow/50 rounded-lg">
                  <Check className="" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mj-wine mb-1">Qualidade</h4>
                  <p className="text-gray-600 text-sm">Material limpo e em perfeito estado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
