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

const testimonial = {
  text: "A Fruto daVide transformou completamente nossos quartos. A qualidade dos tecidos e o atendimento personalizado fizeram toda a diferença. Nossos hóspedes elogiam constantemente o conforto e a elegância dos ambientes.",
  author: "Marina Silva",
  position: "Gerente de Operações",
  company: "Hotel Excellence Premium"
};

const clients = [
  "Hotel Copacabana Palace",
  "Hospital Sírio-Libanês", 
  "Grupo Accor",
  "Rede D'Or",
  "JW Marriott",
  "Hospital Albert Einstein"
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
              <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-brand-gold mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-brand-green mb-2">
                {stat.label}
              </div>
              <div className="text-brand-gray text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in">
            <div className="bg-brand-green rounded-3xl p-8 lg:p-12 text-white relative">
              {/* Quote icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 mt-4">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-xl">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-white/80">{testimonial.position}</div>
                  <div className="text-brand-gold text-sm">{testimonial.company}</div>
                </div>
              </div>
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

        {/* Client Logos */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-semibold text-brand-green mb-8">
            Empresas que confiam na Fruto daVide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-brand-gray font-medium text-sm">
                  {client}
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