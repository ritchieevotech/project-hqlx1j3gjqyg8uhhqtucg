import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const MiniAuditCta = () => {
  return (
    <section className="relative py-20 md:py-24 bg-brand-blue overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/15 px-8 py-12 md:px-16 md:py-16 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight leading-none flex flex-wrap items-center justify-center gap-x-4">
              <span>Identify the</span>
              <span className="relative inline-flex items-center">
                <span className="relative z-10 rounded-full bg-secondary px-6 py-2 text-brand-blue font-heading shadow-[0_0_30px_rgba(251,168,52,0.3)] scale-90 md:scale-100">
                  Gaps
                </span>
                <span className="absolute inset-0 bg-secondary blur-2xl opacity-20" />
              </span>
            </h2>

            <div className="space-y-8 w-full">
              <p className="font-heading text-lg md:text-xl text-secondary font-semibold tracking-wider uppercase">
                Free Mini Amazon Conversion Gap Analysis
              </p>
              
              <div className="space-y-6">
                <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                  A focused review of your listing to uncover:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    "CTR opportunities",
                    "SEO + Rufus gaps",
                    "Conversion friction",
                    "A+ and storefront misalignment",
                  ].map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm md:text-base text-white/90 transition-all duration-300 hover:bg-white/10"
                    >
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(251,168,52,0.8)]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="font-sans text-sm md:text-base text-white/60 italic max-w-xl mx-auto">
                  Clear, prioritized insights on where revenue may be leaking.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl filter drop-shadow-lg"
              >
                👇
              </motion.div>
              

                <a 
                  href="https://forms.engin8.io/Engin8/form/SignUpforYourFreeAmazonAccountAuditToday/formperma/6372zGl__oyc-Chb5bba6ijq4Mcw2oI960VZR-dGWdg?zf_lang=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group h-auto px-10 py-6 rounded-full bg-white text-brand-blue hover:bg-secondary hover:text-white font-heading tracking-[0.2em] text-xs md:text-sm font-bold uppercase shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center text-center"
                >
                  Request the FREE Mini Gap Analysis
                </a>

              
              {/* Optional glow effect behind button on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-secondary/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
