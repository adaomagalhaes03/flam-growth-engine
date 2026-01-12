import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { GreenButton } from "../GreenButton";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Plano Essencial",
    price: "40.000",
    currency: "Kz",
    period: "/sessão",
    monthlyPrice: "144.000",
    description: "Ideal para pequenas empresas rurais",
    format: "Online",
    features: [
      "Auditoria Financeira Online",
      "Relatórios básicos",
      "Suporte por email",
      "Acesso à plataforma digital",
    ],
    highlighted: false,
  },
  {
    name: "Plano Completo",
    price: "55.000",
    currency: "Kz",
    period: "/sessão",
    monthlyPrice: "198.000",
    description: "Para empresas em crescimento",
    format: "Presencial/Online",
    features: [
      "Tudo do plano Essencial",
      "Planeamento Financeiro e Orçamental",
      "Consultoria Agronómica",
      "Formação e Capacitação",
      "Suporte prioritário",
      "Consultoria mensal",
    ],
    highlighted: true,
  },
  {
    name: "Plano Premium",
    price: "Personalizado",
    currency: "",
    period: "",
    monthlyPrice: "",
    description: "Solução completa para grandes operações",
    format: "Presencial",
    features: [
      "Tudo do plano Completo",
      "Cartão VIP",
      "Auditoria trimestral",
      "Consultor dedicado",
      "Suporte 24/7",
      "Formação da equipa",
      "Acompanhamento contínuo",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative bg-muted/30">
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
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-green"
                  : "card-premium"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-gradient rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 text-white" fill="currentColor" />
                  <span className="text-sm font-semibold text-white">Recomendado</span>
                </div>
              )}

              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {plan.format}
                </span>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-display font-bold text-gradient-green">
                    {plan.price}
                  </span>
                  {plan.currency && <span className="text-muted-foreground">{plan.currency}</span>}
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
                {plan.monthlyPrice && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Pacote mensal: {plan.monthlyPrice} Kz
                  </p>
                )}
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

              <GreenButton 
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Escolher Plano
              </GreenButton>
            </motion.div>
          ))}
        </div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">Formas de pagamento:</span> Cash • Transferência bancária • TPA Multicaixa/QR • Cheques
          </p>
        </motion.div>
      </div>
    </section>
  );
};
