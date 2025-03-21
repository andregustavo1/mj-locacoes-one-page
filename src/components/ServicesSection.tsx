
import { Tent, Armchair, Shirt, Users, Check } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  delay: string 
}) => {
  return (
    <div className="glass-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal" style={{ animationDelay: delay }}>
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-mj-yellow/50 rounded-full mb-6">
          <Icon className="text-black" size={32} />
        </div>
        <h3 className="text-xl font-bold text-mj-wine mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-mj-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Estrutura completa para o seu evento</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={Tent}
            title="Tendas Piramidais"
            description="Tendas de alta qualidade, em diversos tamanhos, com montagem e desmontagem incluídas."
            delay="0.1s"
          />
          
          <ServiceCard 
            icon={Armchair}
            title="Mesas e Cadeiras"
            description="Mesas e cadeiras de plástico limpas e em excelente estado, entregues no horário combinado."
            delay="0.2s"
          />
          
          <ServiceCard 
            icon={Shirt}
            title="Toalhas"
            description="Toalhas limpas e passadas, em diversas cores para combinar com a decoração do seu evento."
            delay="0.3s"
          />
          
          <ServiceCard 
            icon={Users}
            title="Eventos Diversos"
            description="Soluções para festas, casamentos, eventos corporativos, feiras e muito mais."
            delay="0.4s"
          />
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 p-8 glass-card rounded-2xl max-w-4xl mx-auto reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-mj-wine mb-4">Por que escolher nossos serviços?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-mj-yellow/50 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-gray-700">Material limpo e de qualidade</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-mj-yellow/50 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-gray-700">Entrega e montagem pontuais</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-mj-yellow/50 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-gray-700">Atendimento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-mj-yellow/50 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-gray-700">Preços justos e competitivos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-mj-yellow/50 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-gray-700">Disponibilidade em todos os dias</span>
                </li>
              </ul>
            </div>
            
            <div className="h-full overflow-hidden rounded-xl">
              <div 
                className="w-full h-64 md:h-full bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80')] 
                bg-cover bg-center img-zoom"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
