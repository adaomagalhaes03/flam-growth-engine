import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { Shield, AlertTriangle, TrendingUp, AlertCircle } from "lucide-react";

const swotData = [
  {
    title: "Forças",
    icon: Shield,
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    items: [
      "Especialização no setor de transportes",
      "Plataforma 100% online",
      "5 anos de experiência consolidada",
      "Equipe altamente qualificada",
    ],
  },
  {
    title: "Fraquezas",
    icon: AlertTriangle,
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    items: [
      "Dependência de conectividade",
      "Mercado ainda em adaptação digital",
      "Necessidade de educação do cliente",
    ],
  },
  {
    title: "Oportunidades",
    icon: TrendingUp,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
    items: [
      "Crescimento do setor de transportes",
      "Digitalização acelerada pós-pandemia",
      "Demanda por compliance fiscal",
      "Expansão para outras regiões",
    ],
  },
  {
    title: "Ameaças",
    icon: AlertCircle,
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/30",
    items: [
      "Concorrência de grandes players",
      "Mudanças na legislação fiscal",
      "Instabilidade econômica",
    ],
  },
];

export const SwotSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Análise SWOT"
          highlight="SWOT"
          subtitle="Visão estratégica do nosso posicionamento no mercado"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {swotData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.color} border ${item.borderColor} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
