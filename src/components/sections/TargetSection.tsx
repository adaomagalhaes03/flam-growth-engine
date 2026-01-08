import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { Building, Bus, MapPin } from "lucide-react";

const targets = [
  {
    icon: Building,
    title: "Pequenas e Médias Empresas",
    description: "Empresas em crescimento que precisam de estruturação contábil profissional e gestão financeira eficiente.",
  },
  {
    icon: Bus,
    title: "Empresas de Transporte de Pessoas",
    description: "Operadores de transporte público, táxis, serviços de aluguer e turismo que necessitam de conformidade fiscal.",
  },
  {
    icon: MapPin,
    title: "Todo Território Angolano",
    description: "Atendemos empresas de todas as províncias de Angola, com serviços 100% online e suporte remoto especializado.",
  },
];

export const TargetSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Público-Alvo"
          highlight="Público"
          subtitle="Focados em quem mais precisa de excelência em gestão"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <motion.div
              key={target.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <target.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{target.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{target.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
