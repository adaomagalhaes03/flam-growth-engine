import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, highlight, centered = true }: SectionTitleProps) => {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-gradient-gold">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 w-24 bg-gold-gradient mx-auto mt-6 rounded-full"
      />
    </motion.div>
  );
};
