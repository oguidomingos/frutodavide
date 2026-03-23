import { Award, Building, CheckCircle, Star } from "lucide-react";
import textileImage from "@/assets/textile-production.jpg";

const stats = [
  {
    icon: Building,
    number: "200+",
    label: "Projetos entregues",
    description: "Hotéis, clínicas e empresas atendidas"
  },
  {
    icon: Award,
    number: "44+",
    label: "Anos de tradição",
    description: "Experiência consolidada no mercado"
  },
  {
    icon: Star,
    number: "98%",
    label: "Clientes satisfeitos",
    description: "Taxa de recomendação comprovada"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Projetos no prazo",
    description: "Pontualidade é nossa marca"
  }
];

const sectors = [
  "Hotéis & Pousadas",
  "Hospitais & Clínicas",
  "Flats & Residenciais",
  "Spas & Resorts",
  "Corporativo",
  "Restaurantes & Buffets"
];

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-subtle hover:shadow-card transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-brand-verde rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-brand-vinho mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-brand-verde mb-2">
                {stat.label}
              </div>
              <div className="text-brand-gray text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Experience + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in">
            <div className="bg-brand-verde rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-brand-vinho">
                +44 anos transformando ambientes
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed mb-6 text-white/90">
                Desde 1980, a Fruto daVide fornece soluções têxteis sob medida para
                hotelaria, saúde e corporativo em todo o Brasil.
              </p>
              <p className="text-lg leading-relaxed text-white/80">
                Qualidade certificada, prazos cumpridos e atendimento consultivo
                — tudo para que seus clientes tenham a melhor experiência.
              </p>
            </div>
          </div>

          <div className="slide-up">
            <img
              src={textileImage}
              alt="Processo de produção de têxteis premium da Fruto daVide"
              className="w-full h-auto rounded-3xl shadow-elegant"
            />
          </div>
        </div>

        {/* Sectors Served */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-semibold text-brand-verde mb-8">
            Setores que atendemos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-brand-gray font-medium text-sm">
                  {sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;