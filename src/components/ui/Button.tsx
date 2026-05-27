"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  size?: Size;
  glow?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-semibold shadow-gold-glow hover:shadow-gold-glow-lg",
  secondary:
    "bg-white/5 text-gold border border-gold/40 backdrop-blur-sm hover:bg-gold/10 hover:border-gold",
  outline:
    "border-2 border-gold/60 text-gold bg-transparent hover:bg-gold/10 hover:border-gold hover:shadow-gold-glow",
  ghost: "text-gold/90 hover:text-gold hover:bg-gold/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          glow && variant === "primary" && "animate-pulse-gold",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
