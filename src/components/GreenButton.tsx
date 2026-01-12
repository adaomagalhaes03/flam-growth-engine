import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GreenButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "white" | "outline-white";
  className?: string;
  onClick?: () => void;
}

export const GreenButton = ({ children, variant = "primary", className = "", onClick }: GreenButtonProps) => {
  const baseStyles = "relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-green-gradient text-white hover:shadow-[0_0_30px_hsl(95,45%,50%,0.4)]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-white/90 shadow-lg",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-primary"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};
