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
            Identify the{" "}
            <span className="relative inline-block text-secondary">
              <span className="relative z-10">Gaps</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute left-0 bottom-1 md:bottom-2 h-2 md:h-3 bg-secondary/30 -z-0" 
                aria-hidden="true" 
              />
            </span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="font-heading text-xl md:text-2xl text-white/95 font-medium tracking-wide">
              Free Mini Amazon Conversion Gap Analysis
            </p>
            
            <div className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed space-y-3">
              <p>A focused review of your listing to uncover:</p>
              <ul className="space-y-1 text-sm md:text-base text-white/90">
                <li>• CTR opportunities</li>
                <li>• SEO + Rufus gaps</li>
                <li>• Conversion friction</li>
                <li>• A+ and storefront misalignment</li>
              </ul>
              <p className="text-white/90">Clear, prioritized insights on where revenue may be leaking.</p>
            </div>
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
              className="px-12 py-8 rounded-xl font-heading text-sm md:text-base tracking-widest uppercase bg-white text-brand-blue hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl h-auto whitespace-normal text-center"
            >
              <a href="#">Request the FREE Mini Gap Analysis</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
