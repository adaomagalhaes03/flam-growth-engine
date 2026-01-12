import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFlam from "@/assets/logo-flam.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3">
            <img src={logoFlam} alt="FLAM Consultoria" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors underline-green"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-green-gradient text-white rounded-lg font-semibold hover:shadow-[0_0_20px_hsl(95,45%,50%,0.4)] transition-all"
            >
              Fale Connosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden glass border-t border-primary/10"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-3 bg-green-gradient text-white rounded-lg font-semibold text-center"
          >
            Fale Connosco
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
