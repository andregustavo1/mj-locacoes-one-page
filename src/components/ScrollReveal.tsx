
import { useEffect, useRef } from 'react';

const ScrollReveal = () => {
  const revealRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    revealRef.current = new IntersectionObserver(observerCallback, observerOptions);
    
    revealElements.forEach(element => {
      revealRef.current?.observe(element);
    });
    
    return () => {
      if (revealRef.current) {
        revealRef.current.disconnect();
      }
    };
  }, []);

  return null;
};

export default ScrollReveal;
