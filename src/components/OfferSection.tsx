import { Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerBenefits = [
  "Análise completa das suas necessidades têxteis",
  "Proposta personalizada com especificações técnicas",
  "Cronograma detalhado de entrega",
  "Orçamento transparente sem surpresas",
  "Apresentação de amostras dos materiais"
];

const OfferSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full mb-8 fade-in">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Oferta limitada</span>
          </div>

          {/* Main offer */}
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-16 text-white mb-12 slide-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Agende um{" "}
              <span className="text-brand-gold">Diagnóstico Gratuito</span>{" "}
              do seu projeto agora mesmo
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Nossa equipe especializada irá analisar suas necessidades e apresentar 
              a solução ideal para seu projeto têxtil.
            </p>

            {/* What's included */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-gold">
                O que está incluído no diagnóstico:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {offerBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scarcity */}
            <div className="bg-brand-gold/20 border border-brand-gold/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 text-brand-gold mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Apenas 5 diagnósticos gratuitos por semana</span>
              </div>
              <p className="text-white/80 text-sm">
                Devido à alta demanda e para garantir a qualidade do atendimento, 
                limitamos os diagnósticos gratuitos.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-brand-gold text-brand-green hover:bg-white hover:text-brand-green text-xl px-12 py-6 rounded-xl font-bold shadow-gold animate-pulse-gold"
            >
              Quero meu diagnóstico gratuito agora
            </Button>
            
            <p className="text-white/70 text-sm mt-4">
              * Sem compromisso • Atendimento personalizado • Resposta em 24h
            </p>
          </div>

          {/* Social proof */}
          <div className="grid md:grid-cols-3 gap-8 fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-brand-gray">Avaliação média dos clientes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">2h</div>
              <p className="text-brand-gray">Tempo médio de resposta</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
              <p className="text-brand-gray">Dos clientes recomendam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;