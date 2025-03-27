
import { useState } from 'react';
import { X } from 'lucide-react';

// Array of gallery images
const galleryImages = [
  {
    id: 1,
    url: '/images/1.png',
    alt: 'Tenda montada para festa',
    category: 'tendas'
  },
  {
    id: 2,
    url: '/images/2.png',
    alt: 'Evento com mesas e cadeiras',
    category: 'mesas'
  },
  {
    id: 3,
    url: '/images/11.png',
    alt: 'Casamento sob tenda',
    category: 'tendas'
  },
  {
    id: 4,
    url: '/images/3.png',
    alt: 'Mesas decoradas',
    category: 'mesas'
  },
  {
    id: 5,
    url: '/images/4.png',
    alt: 'Evento corporativo',
    category: 'eventos'
  },
  {
    id: 6,
    url: '/images/5.png',
    alt: 'Festa de aniversário',
    category: 'eventos'
  },
  {
    id: 7,
    url: '/images/6.png',
    alt: 'Cadeiras para cerimônia',
    category: 'cadeiras'
  },
  {
    id: 8,
    url: '/images/7.png',
    alt: 'Tenda para evento',
    category: 'tendas'
  },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="section-title">Galeria de Projetos</h2>
          <p className="section-subtitle">Confira alguns dos eventos que já realizamos</p>
        </div>
        
        {/* Filter buttons
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'all' 
                ? 'bg-mj-wine text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setActiveFilter('tendas')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'tendas' 
                ? 'bg-mj-wine text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Tendas
          </button>
          <button 
            onClick={() => setActiveFilter('mesas')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'mesas' 
                ? 'bg-mj-wine text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mesas
          </button>
          <button 
            onClick={() => setActiveFilter('cadeiras')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'cadeiras' 
                ? 'bg-mj-wine text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Cadeiras
          </button>
          <button 
            onClick={() => setActiveFilter('eventos')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'eventos' 
                ? 'bg-mj-wine text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Eventos
          </button>
        </div> */}
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-xl aspect-square shadow-md reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div 
                className="w-full h-full bg-cover bg-center cursor-pointer img-zoom"
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => openLightbox(image.url)}
                aria-label={image.alt}
              ></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-white bg-mj-wine/50 hover:bg-mj-wine rounded-full"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <div className="max-w-screen-lg max-h-screen-lg p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImage} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
