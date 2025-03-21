
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-mj-wine font-playfair">MJ</span>
            <span className="text-xl font-medium">Locações</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-mj-wine hover:text-mj-yellow transition-colors">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-mj-wine hover:text-mj-yellow transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="text-mj-wine hover:text-mj-yellow transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('galeria')} className="text-mj-wine hover:text-mj-yellow transition-colors">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-mj-wine hover:text-mj-yellow transition-colors">Contato</button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white/95 backdrop-blur-lg shadow-lg py-4 px-6 absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('inicio')} className="text-mj-wine hover:text-mj-yellow transition-colors py-2">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-mj-wine hover:text-mj-yellow transition-colors py-2">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="text-mj-wine hover:text-mj-yellow transition-colors py-2">Serviços</button>
            <button onClick={() => scrollToSection('galeria')} className="text-mj-wine hover:text-mj-yellow transition-colors py-2">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-mj-wine hover:text-mj-yellow transition-colors py-2">Contato</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
