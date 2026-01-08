import { motion } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { SectionTitle } from "../SectionTitle";
import { Cpu, Shield, Zap, FileBarChart } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e elimine erros humanos com processos digitais inteligentes."
  },
  {
    icon: Shield,
    title: "Controle Financeiro Inteligente",
    description: "Monitore todas as operações financeiras em tempo real com dashboards personalizados."
  },
  {
    icon: Zap,
    title: "Redução de Erros e Multas",
    description: "Sistema proativo que identifica e previne erros fiscais antes que se tornem multas."
  },
  {
    icon: FileBarChart,
    title: "Relatórios Instantâneos",
    description: "Gere relatórios completos em segundos, prontos para tomada de decisão estratégica."
  },
];

export const SystemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Sistema SISCONTRATO"
          highlight="SISCONTRATO"
          subtitle="Sistema de Consultoria, Auditoria e Contabilidade"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.15}>
                <div className="text-center p-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-sm">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Right - Main Feature */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium p-8 glow-gold"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center">
                <Cpu className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">SISCONTRATO</h3>
                <p className="text-primary">Tecnologia de Ponta</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              O SISCONTRATO é nossa plataforma proprietária que integra todos os processos contábeis e 
              financeiros em um único ambiente digital. Com ele, sua empresa tem acesso a:
            </p>

            <ul className="space-y-3">
              {[
                "Integração total com sistemas fiscais angolanos",
                "Dashboard em tempo real com indicadores financeiros",
                "Alertas automáticos de vencimentos e obrigações",
                "Backup em nuvem com segurança bancária",
                "Acesso multiplataforma (web e mobile)"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
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
