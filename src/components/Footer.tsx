
import { Facebook, Instagram, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5561985038892?text=Olá! Gostaria de mais informações sobre a locação de tendas, mesas e cadeiras.', '_blank');
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-mj-yellow font-playfair">MJ</span>
              <span className="text-2xl font-medium">Locações</span>
            </div>
            <p className="text-white/80 mb-6">
              Locação de tendas, mesas, cadeiras e toalhas para todos os tipos de eventos, com qualidade e pontualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:mjlocacoesbsb@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
              <button onClick={openWhatsApp} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Phone size={20} />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-white/80 hover:text-mj-yellow transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-white/80 hover:text-mj-yellow transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-white/80 hover:text-mj-yellow transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('galeria')} className="text-white/80 hover:text-mj-yellow transition-colors">
                  Galeria
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-white/80 hover:text-mj-yellow transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mj-yellow" />
                <span className="text-white/80">(61) 98503-8892</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mj-yellow" />
                <span className="text-white/80">mjlocacoesbsb@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <div className="pt-1">
                  <Clock size={18} className="text-mj-yellow" />
                </div>
                <div className="text-white/80">
                  <p>Das 8h às 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} MJ Locações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
