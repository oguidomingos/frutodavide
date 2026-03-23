import { MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-verde text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-brand-vinho">
              Fruto daVide
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Há mais de 44 anos, transformamos ambientes corporativos, hoteleiros e hospitalares 
              com soluções têxteis premium sob medida.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/frutodavide"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-vinho transition-colors duration-300"
                aria-label="Instagram da Fruto daVide"
              >
                <span className="font-bold">ig</span>
              </a>
              <a
                href="mailto:frutodavide.comercial@gmail.com"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-vinho transition-colors duration-300"
                aria-label="E-mail da Fruto daVide"
              >
                <span className="font-bold">@</span>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-brand-vinho">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-vinho flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:frutodavide.comercial@gmail.com" className="text-white/90 hover:text-brand-vinho transition-colors">
                    frutodavide.comercial@gmail.com
                  </a>
                  <div className="text-white/60 text-sm">Resposta em 24h</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-vinho flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/90">São Paulo - SP</div>
                  <div className="text-white/60 text-sm">Atendemos todo Brasil</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-brand-vinho">Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-vinho flex-shrink-0" />
                <div className="text-white/90 text-sm">
                  <div>Segunda a Sexta</div>
                  <div className="text-white/60">8h às 18h</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mt-6">
                <div className="text-brand-vinho font-semibold text-sm mb-1">
                  🏆 Certificações
                </div>
                <div className="text-white/80 text-xs">
                  ISO 9001 • ABNT • INMETRO
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2026 Fruto daVide. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-brand-vinho transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-brand-vinho transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;