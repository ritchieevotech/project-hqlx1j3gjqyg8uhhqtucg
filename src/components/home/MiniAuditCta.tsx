import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const MiniAuditCta = () => {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Take Us For a{" "}
            <span className="relative inline-block text-secondary">
              <span className="relative z-10">Test Drive</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute left-0 bottom-1 md:bottom-2 h-2 md:h-3 bg-secondary/30 -z-0" 
                aria-hidden="true" 
              />
            </span>
          </h2>

          <div className="space-y-4 mb-10">
            <p className="font-heading text-xl md:text-2xl text-white/95 font-medium tracking-wide uppercase">
              Try The Mini Audit
            </p>
            <p className="font-sans text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Get our expert eyes on your product page for a detailed list of recommendations. 
              See exactly how we engineer listings for maximum conversion.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-5xl"
            >
              👇
            </motion.div>
            
            <Button
              asChild
              variant="secondary"
              className="px-12 py-8 rounded-xl font-heading text-lg tracking-widest uppercase bg-white text-brand-blue hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <a href="#">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
