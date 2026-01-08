import { motion } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { SectionTitle } from "../SectionTitle";
import { AnimatedCounter } from "../AnimatedCounter";
import { Building2, Globe2, MapPin, Users, Award } from "lucide-react";

const aboutCards = [
  {
    icon: Building2,
    title: "Quem Somos",
    description: "A FLAM Consultoria é uma empresa especializada em consultoria contábil e gestão financeira, focada exclusivamente no setor de transporte de pessoas em Angola."
  },
  {
    icon: Award,
    title: "5 Anos de Experiência",
    description: "Consolidados como referência em conformidade fiscal, otimização tributária e precisão financeira no setor de transportes angolano."
  },
  {
    icon: Globe2,
    title: "100% Online",
    description: "Prestação de serviços integralmente à distância, utilizando ferramentas digitais modernas para garantir eficiência e acessibilidade."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Contamos com 36 profissionais altamente qualificados, distribuídos em departamentos estratégicos para atender todas as suas necessidades."
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Atuação em todo o território angolano, oferecendo serviços de qualidade independentemente da sua localização."
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre a FLAM"
          highlight="FLAM"
          subtitle="Excelência em consultoria contábil para o setor de transporte de pessoas"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aboutCards.map((card, index) => (
            <AnimatedCard key={card.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: 5, suffix: "+", label: "Anos no Mercado" },
            { value: 36, label: "Funcionários" },
            { value: 100, suffix: "%", label: "Digital" },
            { value: 500, suffix: "+", label: "Clientes Atendidos" },
          ].map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={counter.value} suffix={counter.suffix || ""} />
              <p className="text-muted-foreground mt-2">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
