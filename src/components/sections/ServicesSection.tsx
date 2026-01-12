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
    title: "Consultoria Contábil e Auditoria",
    description: "Avaliação contabilística e financeira das atividades rurais com análise de riscos e relatórios especializados.",
    features: ["Escrituração contábil", "Análise de riscos", "Relatórios especializados"]
  },
  {
    icon: PieChart,
    title: "Consultoria Financeira",
    description: "Elaboração de planos financeiros e orçamentos personalizados para o crescimento sustentável.",
    features: ["Gestão de custos", "Planeamento orçamental", "Fluxo de caixa"]
  },
  {
    icon: Leaf,
    title: "Consultoria Agronómica",
    description: "Planeamento estratégico para o crescimento do agronegócio com foco em sustentabilidade.",
    features: ["Análise de produção", "Planeamento agrícola", "Sustentabilidade"]
  },
  {
    icon: FileText,
    title: "Planeamento Estratégico",
    description: "Desenvolvimento de estratégias empresariais para maximizar resultados no setor rural.",
    features: ["Estratégias de crescimento", "Análise de mercado", "Posicionamento"]
  },
  {
    icon: Truck,
    title: "Gestão de Frota",
    description: "Consultoria especializada em gestão de frota para empresas de transporte rural.",
    features: ["Controle de custos", "Manutenção preventiva", "Otimização de rotas"]
  },
  {
    icon: GraduationCap,
    title: "Formação e Capacitação",
    description: "Programas de formação em gestão rural para empreendedores e equipas.",
    features: ["Workshops", "Capacitação técnica", "Acompanhamento digital"]
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
