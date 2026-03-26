import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-card py-3 translate-y-0 opacity-100'
        : '-translate-y-full opacity-0 pointer-events-none'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <img
          src={`${basePath}assets/logos/logo-azul-dourado.svg`}
          alt="Fruto daVide"
          className="h-8 sm:h-10 lg:h-12 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-none transition-all duration-300"
        />

        <Button
          size="sm"
          className="btn-primary transition-all duration-300"
        >
          Fale conosco
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
