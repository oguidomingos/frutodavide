import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import corporateImage from "@/assets/corporate-interior.jpg";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Impact quote */}
        <div className="text-center mb-16 fade-in">
          <div className="max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-brand-gold mx-auto mb-8" />
            <blockquote className="text-3xl lg:text-4xl font-bold text-brand-green leading-tight mb-8">
              "Hóspedes não lembram da cortina.{" "}
              <span className="text-brand-gold">
                Mas lembram quando a luz os acorda às 6h da manhã.
              </span>"
            </blockquote>
            <p className="text-xl text-brand-gray">
              Cada detalhe importa na experiência dos seus clientes.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="slide-up">
            <img 
              src={corporateImage}
              alt="Ambiente corporativo elegante com soluções têxteis da Fruto daVide"
              className="w-full h-auto rounded-3xl shadow-elegant"
            />
          </div>
          
          <div className="fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-green mb-6">
              Transforme a experiência dos seus clientes hoje mesmo
            </h3>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Não deixe que problemas têxteis comprometam a reputação do seu negócio. 
              Nossa equipe está pronta para criar a solução perfeita para você.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                <span className="text-brand-green font-medium">Diagnóstico gratuito em 24h</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                <span className="text-brand-green font-medium">Proposta personalizada</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                <span className="text-brand-green font-medium">Acompanhamento dedicado</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="btn-primary text-xl px-12 py-6 w-full sm:w-auto animate-pulse-gold"
              >
                Quero meu diagnóstico gratuito
              </Button>
              
              <p className="text-sm text-brand-gray mt-4">
                Resposta garantida em 24 horas • Sem compromisso
              </p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 text-center fade-in">
          <h4 className="text-2xl font-bold text-brand-green mb-6">
            Ou entre em contato diretamente
          </h4>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-brand-gold font-semibold mb-2">Telefone</div>
              <div className="text-brand-green text-lg font-medium">(11) 3456-7890</div>
            </div>
            <div>
              <div className="text-brand-gold font-semibold mb-2">WhatsApp</div>
              <div className="text-brand-green text-lg font-medium">(11) 99999-8888</div>
            </div>
            <div>
              <div className="text-brand-gold font-semibold mb-2">E-mail</div>
              <div className="text-brand-green text-lg font-medium">contato@frutodavide.com.br</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;