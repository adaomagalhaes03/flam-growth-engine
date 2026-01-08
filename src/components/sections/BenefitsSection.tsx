import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { Check, Sparkles } from "lucide-react";

const advantages = [
  "Redução de até 40% nos custos operacionais",
  "Eliminação de multas fiscais",
  "Acesso 24/7 à plataforma de gestão",
  "Relatórios automatizados em tempo real",
  "Suporte técnico especializado",
  "Integração com sistemas bancários",
];

const benefits = [
  "Mais tempo para focar no seu negócio",
  "Decisões baseadas em dados precisos",
  "Tranquilidade com compliance fiscal",
  "Crescimento sustentável",
  "Visibilidade financeira total",
  "Economia de recursos",
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vantagens e Benefícios"
          highlight="Benefícios"
          subtitle="Descubra como a FLAM pode transformar a gestão do seu negócio"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Vantagens</h3>
            </div>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium p-8 border-gradient-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold">Benefícios</h3>
            </div>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
