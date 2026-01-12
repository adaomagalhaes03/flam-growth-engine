import { useState } from "react";
import { motion } from "framer-motion";
import { GreenButton } from "../GreenButton";
import { ContactModal } from "../ContactModal";
import { ArrowRight, MessageCircle, Mail, Phone, Clock } from "lucide-react";

export const CTASection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    <section id="contacto" className="py-32 relative overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Adira aos Nossos{" "}
              <span className="underline decoration-white/30 underline-offset-8">Serviços</span>
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Com dedicação e transparência, a FLAM ajuda na otimização da gestão da sua empresa rural.
              Crie o seu perfil e confie a gestão à FLAM.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GreenButton variant="white" onClick={() => setIsContactOpen(true)}>
              <MessageCircle size={20} />
              Entrar em Contacto
            </GreenButton>
            <GreenButton variant="outline-white">
              Agendar Reunião
              <ArrowRight size={18} />
            </GreenButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-white" />
              <p className="text-white/80 font-semibold">Email</p>
              <p className="text-white">agroconsultoria@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Phone className="w-6 h-6 text-white" />
              <p className="text-white/80 font-semibold">WhatsApp</p>
              <p className="text-white">+244 947 455 009</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-white" />
              <p className="text-white/80 font-semibold">Horário</p>
              <p className="text-white">Seg - Sex: 8h às 18h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};
