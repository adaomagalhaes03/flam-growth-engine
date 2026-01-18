import { motion } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { SectionTitle } from "../SectionTitle";
import { AnimatedCounter } from "../AnimatedCounter";
import { Building2, Globe2, Leaf, Users, Lightbulb, Shield } from "lucide-react";

const aboutCards = [
  {
    icon: Building2,
    title: "Quem Somos",
    description: "A FLAM é uma fusão de FIN-ELITE, LUMI CONSULTING GROUP, Monopólio Express e Agroconsultoria. Fornecemos soluções para o desenvolvimento do agronegócio através de técnicas contabilísticas e gestão de empresas rurais."
  },
  {
    icon: Leaf,
    title: "Foco no Agronegócio",
    description: "Especializados em empresas rurais, oferecemos consultoria estratégica, financeira e de gestão de frota para o setor agrícola angolano."
  },
  {
    icon: Globe2,
    title: "100% Online",
    description: "Modernizamos e inovamos o mercado, facilitando processos, reduzindo custos e promovendo o crescimento através de ferramentas digitais."
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Profissionais capacitados com mentalidades ligadas às novas ferramentas digitais, sempre atualizados com as melhores práticas do mercado."
  },
  {
    icon: Shield,
    title: "Transparência",
    description: "Nossa conduta reflete em proporcionar trabalho com qualidade e eficiência. Clareza e ética em todas as relações."
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre a FLAM"
          highlight="FLAM"
          subtitle="Transformando a gestão do agronegócio em Angola"
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

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Missão</h3>
            <p className="text-muted-foreground">
              Oferecer e desenvolver soluções por meio de técnicas contabilísticas, consultoria estratégica, financeira e de gestão online para empresas rurais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Visão</h3>
            <p className="text-muted-foreground">
              Ser a consultoria de referência para o agronegócio, contribuindo no desenvolvimento de estratégias empresariais e em gestão online no sector rural.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Valores</h3>
            <p className="text-muted-foreground">
              Inovação e atualização contínua. Trabalho com qualidade e eficiência. Transparência, clareza e ética em todas as relações.
            </p>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: 35, suffix: "+", label: "Profissionais" },
            { value: 6, label: "Departamentos" },
            { value: 100, suffix: "%", label: "Digital" },
            { value: 21, label: "Províncias" },
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
