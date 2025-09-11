import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white fade-in">
            <div className="mb-6">
              <span className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                +44 anos de tradição
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Transforme seus ambientes com{" "}
              <span className="text-brand-gold">soluções têxteis</span>{" "}
              sob medida.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Mais de 40 anos atendendo hotelaria e saúde com qualidade, prazo e confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4 animate-pulse-gold"
              >
                Quero meu diagnóstico gratuito
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-green text-lg px-8 py-4"
              >
                Ver nossos projetos
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-gold mb-1">200+</div>
                <div className="text-sm text-white/80">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-gold mb-1">44+</div>
                <div className="text-sm text-white/80">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-gold mb-1">98%</div>
                <div className="text-sm text-white/80">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Quarto de hotel elegante com cortinas e enxoval premium da Fruto daVide"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay with floating badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card animate-float">
                  <div className="text-brand-green font-semibold text-sm">Qualidade Premium</div>
                  <div className="text-brand-gray text-xs">Tecidos certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;