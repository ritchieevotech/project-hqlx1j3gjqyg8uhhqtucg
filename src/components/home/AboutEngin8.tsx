import * as React from "react";
import { motion } from "framer-motion";

export const AboutEngin8 = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:gap-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
          >
            <div 
              className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/10 blur-2xl opacity-60" 
              aria-hidden="true" 
            />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 bg-white">
              <img
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/cd2231f0-d0cf-456c-b2f2-6dbd71dd3db6.png"
                alt="Engin8.io team profile"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-tight flex items-center gap-3">
                <span className="text-4xl md:text-5xl">👋</span> Hi, we’re Engin8.io
              </h2>
              
              <div className="space-y-4">
                <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed italic border-l-4 border-secondary/40 pl-4 py-1">
                  We saw a consistent problem: agencies charging premium retainers, brands investing heavily in ads — yet listings still underperforming. Not because the product lacked potential, but because the page wasn’t engineered to convert.
                </p>
                <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                  Engin8.io was built to close that gap.
                </p>
                <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
                  We operate as a white-label Amazon optimization and creative infrastructure partner — supporting agencies that need scalable back-office execution, and brands that want performance without internal expansion.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary uppercase mb-2 font-bold">
                    Main Image & Image Stack Optimization
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    CTR-driven hero image concepts and structured gallery sequencing designed to improve click-through and on-page conversion.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary uppercase mb-2 font-bold">
                    SEO + Rufus-Ready Listing Copy
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    Keyword research, intent mapping, and psychology-driven messaging aligned for both Amazon search and AI-assisted discovery.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary uppercase mb-2 font-bold">
                    Premium A+ Content Architecture
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    Conversion-focused layouts engineered to strengthen differentiation and increase revenue per visitor.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary uppercase mb-2 font-bold">
                    Custom Storefront Infrastructure
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    Mobile-first storefronts built under the ENGIN8 framework to guide, nurture, and convert traffic.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary uppercase mb-2 font-bold">
                    Structured Split Testing
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    Validated experimentation through Amazon Experiments to confirm performance lift before scaling ad spend.
                  </p>
                </div>
              </div>

              <p className="mt-10 font-sans text-sm md:text-base text-foreground/90 leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10">
                If you’re an agency looking for a true white-label execution partner — or a brand ready to turn traffic into revenue — Engin8.io becomes your Amazon performance engine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
