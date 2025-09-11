import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-elegant p-6 max-w-sm animate-scale-in">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-semibold text-brand-green">Precisa de ajuda?</h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-brand-gray hover:text-brand-green"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-sm text-brand-gray mb-4">
            Fale com nossos especialistas e receba seu diagnóstico gratuito.
          </p>
          
          <div className="space-y-2">
            <Button 
              size="sm" 
              className="w-full btn-primary text-sm py-2"
            >
              Diagnóstico Gratuito
            </Button>
            
            <a 
              href="https://wa.me/5511999998888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-sm py-2"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-brand-green text-white p-4 rounded-full shadow-elegant hover:bg-brand-gold transition-all duration-300 hover:scale-110 animate-pulse-gold"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;