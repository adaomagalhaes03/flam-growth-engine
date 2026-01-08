import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { GoldButton } from "../GoldButton";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "75.000",
    currency: "Kz",
    period: "/mês",
    description: "Ideal para pequenas empresas em início de jornada",
    features: [
      "Escrituração contábil mensal",
      "Balancetes trimestrais",
      "Suporte por email",
      "Acesso à plataforma SISCONTRATO",
      "1 usuário",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "150.000",
    currency: "Kz",
    period: "/mês",
    description: "Para empresas em crescimento que precisam de mais controle",
    features: [
      "Tudo do plano Básico",
      "Balancetes mensais",
      "Gestão de fluxo de caixa",
      "Relatórios personalizados",
      "Suporte prioritário",
      "Até 5 usuários",
      "Consultoria mensal",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "300.000",
    currency: "Kz",
    period: "/mês",
    description: "Solução completa para grandes operações",
    features: [
      "Tudo do plano Profissional",
      "Auditoria trimestral",
      "Planeamento tributário",
      "Dashboard executivo",
      "Suporte 24/7",
      "Usuários ilimitados",
      "Consultor dedicado",
      "Treinamento da equipe",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-lighter/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Planos de Serviço"
          highlight="Serviço"
          subtitle="Escolha o plano ideal para as necessidades do seu negócio"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-dark-card border-2 border-primary glow-gold"
                  : "card-premium"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gold-gradient rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary-foreground" fill="currentColor" />
                  <span className="text-sm font-semibold text-primary-foreground">Recomendado</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display font-bold text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.currency}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <GoldButton 
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Escolher Plano
              </GoldButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
