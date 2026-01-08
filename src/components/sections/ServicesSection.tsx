import { motion } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { SectionTitle } from "../SectionTitle";
import { 
  Calculator, 
  PieChart, 
  FileText, 
  ClipboardCheck, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Consultoria Contábil Online",
    description: "Análise de custos, compliance e auditoria especializada para empresas de transporte de pessoas.",
    features: ["Escrituração contábil", "Balancetes mensais", "Demonstrações financeiras"]
  },
  {
    icon: PieChart,
    title: "Gestão Financeira",
    description: "Controle financeiro inteligente com acompanhamento em tempo real e relatórios personalizados.",
    features: ["Fluxo de caixa", "Análise de rentabilidade", "Projeções financeiras"]
  },
  {
    icon: FileText,
    title: "Planeamento Tributário",
    description: "Otimização da carga tributária e análise de rentabilidade de rotas para maximizar resultados.",
    features: ["Economia fiscal", "Compliance tributário", "Benefícios fiscais"]
  },
  {
    icon: ClipboardCheck,
    title: "Auditoria Automatizada",
    description: "Processos de auditoria digital com redução de erros e identificação proativa de problemas.",
    features: ["Auditoria interna", "Controles internos", "Gestão de riscos"]
  },
  {
    icon: BarChart3,
    title: "Relatórios Digitais",
    description: "Emissão rápida e precisa de relatórios financeiros com acesso em tempo real via plataforma.",
    features: ["Dashboards interativos", "Relatórios automatizados", "KPIs personalizados"]
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-lighter/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nossos Serviços"
          highlight="Serviços"
          subtitle="Soluções completas em consultoria contábil e gestão financeira"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6 shadow-lg"
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
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
