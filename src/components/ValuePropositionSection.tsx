import { Palette, Cog, Shield, HeadphonesIcon } from "lucide-react";

const valueProps = [
  {
    icon: Palette,
    title: "Estética Premium",
    description: "Tecidos selecionados que elevam o padrão visual dos seus ambientes, criando experiências memoráveis para seus clientes.",
    features: ["Design personalizado", "Cores exclusivas", "Acabamentos de luxo"]
  },
  {
    icon: Cog,
    title: "Funcionalidade Técnica",
    description: "Soluções que funcionam perfeitamente, com blackouts eficientes, tecidos antialérgicos e sistemas de fácil manutenção.",
    features: ["Blackout 100%", "Materiais antialérgicos", "Fácil manutenção"]
  },
  {
    icon: Shield,
    title: "Segurança de Fornecimento",
    description: "Entrega garantida no prazo acordado, com backup de estoque e planejamento logístico para grandes projetos.",
    features: ["Prazos garantidos", "Estoque estratégico", "Logística especializada"]
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Consultivo",
    description: "Especialistas dedicados que acompanham seu projeto do conceito à instalação, oferecendo soluções sob medida.",
    features: ["Consultoria especializada", "Acompanhamento integral", "Suporte pós-venda"]
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-green mb-6">
            Por que escolher a{" "}
            <span className="text-brand-gold">Fruto daVide?</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Quatro pilares que garantem o sucesso do seu projeto têxtil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-elegant transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <prop.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-green mb-4">
                {prop.title}
              </h3>
              
              <p className="text-brand-gray leading-relaxed mb-6">
                {prop.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {prop.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
                    <span className="text-brand-green font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-brand-green rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para elevar o padrão dos seus ambientes?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma conversa gratuita e descubra como podemos transformar seu projeto.
            </p>
            <button className="btn-primary bg-brand-gold hover:bg-white hover:text-brand-green">
              Agendar consultoria gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;