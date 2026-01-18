import { motion } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { SectionTitle } from "../SectionTitle";
import { 
  Calculator, 
  PieChart, 
  FileText, 
  ClipboardCheck, 
  BarChart3,
  Leaf,
  GraduationCap,
  Truck
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Consultoria em Contabilidade e Auditoria Financeira",
    description: "Avaliação contabilística e financeira das actividades rurais com análise de riscos e relatórios especializados online.",
    features: ["Escrituração contábil", "Auditoria compliance", "Relatórios especializados"]
  },
  {
    icon: PieChart,
    title: "Consultoria Estratégica e Financeira",
    description: "Elaboração de planos financeiros e orçamentos personalizados para o crescimento sustentável online.",
    features: ["Gestão de custos", "Planeamento orçamental", "Fluxo de caixa"]
  },
  {
    icon: FileText,
    title: "Consultoria de Planeamento de Gestão Rural",
    description: "Desenvolvimento de estratégias empresariais para maximizar resultados no sector rural online.",
    features: ["Estratégias de crescimento", "Análise de mercado", "Posicionamento"]
  },
  {
    icon: Truck,
    title: "Consultoria de Gestão de Frota",
    description: "Consultoria especializada em gestão de frota para empresas de transporte rural online.",
    features: ["Controlo de custos", "Manutenção preventiva", "Optimização de rotas"]
  },
  {
    icon: GraduationCap,
    title: "Formação e Capacitação de Gestão Rural",
    description: "Programas de formação em gestão rural para empreendedores e equipas online.",
    features: ["Workshops online", "Capacitação técnica", "Acompanhamento digital"]
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nossos Serviços"
          highlight="Serviços"
          subtitle="Soluções completas em consultoria para o agronegócio"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-green-gradient flex items-center justify-center mb-6 shadow-lg"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
