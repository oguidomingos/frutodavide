import { AlertTriangle, Clock, Shield, Users } from "lucide-react";

const problemItems = [
  {
    icon: AlertTriangle,
    title: "Cortinas que não bloqueiam a luz adequadamente",
    description: "Hóspedes reclamando de luminosidade excessiva durante o descanso"
  },
  {
    icon: Clock,
    title: "Blackouts atrasados comprometendo a inauguração",
    description: "Fornecedores que não cumprem prazos em projetos críticos"
  },
  {
    icon: Shield,
    title: "Tecidos fora das normas de segurança",
    description: "Materiais que não atendem regulamentações hospitalares e hoteleiras"
  },
  {
    icon: Users,
    title: "Fornecedores que desaparecem após a venda",
    description: "Falta de suporte técnico quando você mais precisa"
  }
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-brand-off-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-verde mb-6">
            Você já perdeu hóspedes ou clientes por causa de um{" "}
            <span className="text-brand-vinho">detalhe que parecia simples?</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Pequenos problemas têxteis podem gerar grandes prejuízos. Reconhece alguma dessas situações?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {problemItems.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-verde mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-card">
            <p className="text-2xl font-semibold text-brand-verde mb-2">
              Esses problemas custam mais do que você imagina.
            </p>
            <p className="text-brand-gray">
              Mas existe uma solução definitiva para evitá-los.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;