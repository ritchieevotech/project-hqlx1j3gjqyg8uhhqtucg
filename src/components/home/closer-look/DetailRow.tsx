import * as React from "react";
import { motion } from "framer-motion";

interface DetailRowProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  theWhat: React.ReactNode;
  theHow: React.ReactNode;
  bonus: React.ReactNode;
  bonusLabel?: string;
  isReversed?: boolean;
  delay?: number;
  isFirst?: boolean;
}

export const DetailRow = ({
  title,
  imageSrc,
  imageAlt,
  theWhat,
  theHow,
  bonus,
  bonusLabel = "Include",
  isReversed = false,
  delay = 0.1,
  isFirst = false,
}: DetailRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`${isFirst ? "" : "mt-20"} grid gap-12 lg:gap-20 md:grid-cols-2 items-center`}
    >
      <div
        className={`rounded-[3rem] flex items-center justify-center py-4 px-4 relative overflow-hidden group ${
          isReversed ? "md:order-2" : ""
        }`} 
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-69 h-95 md:w-64 md:h-80 rounded-[400px] overflow-hidden shadow-2xl border-4 border-white/30 transform group-hover:scale-105 transition-transform duration-500">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className={`flex flex-col justify-center space-y-8 ${isReversed ? "md:order-1" : ""}`}>
        <div className="space-y-4">
          <h3 className="font-heading text-3xl md:text-5xl text-primary tracking-tight">
            {title}
          </h3>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        <div className="space-y-6">
          <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
            <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The What</span>
            {theWhat}
          </p>
          
          <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
            <span className="font-bold text-primary uppercase tracking-wider text-sm block mb-1">The How</span>
            {theHow}
          </p>
          
          <div className="p-4 bg-muted/30 rounded-2xl border-l-4 border-secondary">
            <p className="font-sans text-sm md:text-base text-foreground/80 italic">
              {bonusLabel && (
                <span className="font-bold text-primary not-italic uppercase tracking-wider text-xs mr-2">
                  {bonusLabel}
                </span>
              )}
              {bonus}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
