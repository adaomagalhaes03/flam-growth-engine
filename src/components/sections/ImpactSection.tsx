import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { AnimatedCard } from "../AnimatedCard";
import { TrendingUp, Users2 } from "lucide-react";

export const ImpactSection = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contributo Socioeconómico"
          highlight="Socioeconómico"
          subtitle="Impacto positivo na economia e sociedade angolana"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedCard delay={0}>
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-green-gradient flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Impacto Económico</h3>
              <ul className="space-y-3 flex-grow">
                {[
                  "Redução significativa de custos operacionais para empresas rurais",
                  "Aumento da formalização no setor agrícola",
                  "Contribuição para a arrecadação fiscal adequada",
                  "Estímulo à digitalização empresarial no campo",
                  "Geração de empregos qualificados na área contábil",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-green-gradient flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Impacto Social</h3>
              <ul className="space-y-3 flex-grow">
                {[
                  "Democratização do acesso a serviços contábeis de qualidade",
                  "Capacitação digital de empreendedores rurais angolanos",
                  "Inclusão de empresas remotas no ecossistema formal",
                  "Melhoria da qualidade do agronegócio",
                  "Promoção de práticas empresariais sustentáveis",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
