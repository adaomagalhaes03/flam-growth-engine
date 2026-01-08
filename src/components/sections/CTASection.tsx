import { motion } from "framer-motion";
import { GoldButton } from "../GoldButton";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Transforme a Gestão do{" "}
              <span className="text-gradient-gold">Seu Negócio</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Dê o próximo passo rumo ao crescimento sustentável. 
              Nossa equipe está pronta para ajudar sua empresa a alcançar novos patamares.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GoldButton>
              <MessageCircle size={20} />
              Entrar em Contacto
            </GoldButton>
            <GoldButton variant="outline">
              Agendar Reunião
              <ArrowRight size={18} />
            </GoldButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: "Email", value: "contacto@flamconsultoria.ao" },
              { label: "WhatsApp", value: "+244 923 456 789" },
              { label: "Horário", value: "Seg - Sex: 8h às 18h" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-primary font-semibold mb-1">{item.label}</p>
                <p className="text-foreground/80">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
