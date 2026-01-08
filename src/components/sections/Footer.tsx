import { motion } from "framer-motion";
import logoFlam from "@/assets/logo-flam.png";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const quickLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logoFlam} alt="FLAM Consultoria" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground mb-6 max-w-md">
              Excelência em consultoria contábil e gestão financeira para empresas de transporte de pessoas em Angola. 
              Seu crescimento é nossa missão.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">contacto@flamconsultoria.ao</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">+244 923 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 FLAM Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm text-center">
            <span className="text-gradient-gold font-semibold">Crescimento Financeiro com Estratégia e Tecnologia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
