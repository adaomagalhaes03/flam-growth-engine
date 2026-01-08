import { motion } from "framer-motion";
import { GoldButton } from "../GoldButton";
import { ArrowRight, ChartBar, TrendingUp } from "lucide-react";
import logoFlam from "@/assets/logo-flam.png";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-4 h-4 border border-primary/30 rotate-45"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-6 h-6 border border-primary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={logoFlam} 
              alt="FLAM Consultoria" 
              className="h-32 md:h-40 w-auto mx-auto animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm text-primary">Consultoria Contábil 100% Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Crescimento Financeiro com{" "}
            <span className="text-gradient-gold">Estratégia</span> e{" "}
            <span className="text-gradient-gold">Tecnologia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Consultoria Contábil e Gestão Financeira Online para Empresas de Transporte de Pessoas em Angola. 
            Transforme sua gestão com soluções digitais de excelência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GoldButton>
              Fale com um Consultor
              <ArrowRight size={18} />
            </GoldButton>
            <GoldButton variant="outline">
              Conheça Nossos Serviços
            </GoldButton>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "5+", label: "Anos de Experiência" },
              { value: "36", label: "Profissionais" },
              { value: "100%", label: "Online" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
