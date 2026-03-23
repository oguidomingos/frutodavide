import { CheckCircle, Clock, Award } from "lucide-react";

const guarantees = [
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description: "Garantimos a entrega do seu projeto na data acordada ou você não paga nada.",
    details: [
      "Cronograma detalhado desde o início",
      "Acompanhamento em tempo real",
      "Contingência para imprevistos"
    ]
  },
  {
    icon: Award,
    title: "Materiais de Primeira Linha",
    description: "Trabalhamos apenas com tecidos certificados e fornecedores homologados.",
    details: [
      "Tecidos certificados internacionalmente",
      "Testes de qualidade rigorosos",
      "Garantia de conformidade técnica"
    ]
  },
  {
    icon: CheckCircle,
    title: "Atendimento Direto com Especialistas",
    description: "Você sempre fala com quem entende do assunto, sem intermediários.",
    details: [
      "Especialistas dedicados ao seu projeto",
      "Suporte técnico exclusivo",
      "Acompanhamento pós-entrega"
    ]
  }
];

const GuaranteesSection = () => {
  return (
    <section className="section-padding bg-brand-green">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Nossas{" "}
            <span className="text-brand-gold">Garantias</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Assumimos compromissos reais para que você tenha total tranquilidade
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-white slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <guarantee.icon className="w-10 h-10 text-brand-green" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-center mb-4 text-brand-gold">
                {guarantee.title}
              </h3>
              
              <p className="text-white/90 text-center leading-relaxed mb-8">
                {guarantee.description}
              </p>
              
              {/* Details */}
              <ul className="space-y-4">
                {guarantee.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-white/80 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom guarantee statement */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-8 lg:p-12">
            <div className="text-4xl lg:text-5xl text-brand-gold mb-4">🏆</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Garantia de Satisfação Total
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Se não ficar 100% satisfeito com nosso trabalho, refazemos sem custo adicional 
              até atingir a excelência esperada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;