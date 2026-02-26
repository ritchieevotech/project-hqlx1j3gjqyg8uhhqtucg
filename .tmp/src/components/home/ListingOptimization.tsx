import * as React from "react";
import { motion } from "framer-motion";

export const ListingOptimization = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-10 md:mb-16 leading-tight text-center"
        >
          <span>What Is Amazon Listing </span>
          <span className="squiggly-underline">Optimization?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative Card */}
          <div className="relative rounded-[2rem] bg-white/95 border border-border/70 shadow-xl px-6 md:px-12 py-10 md:py-14 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            {/* Background Blob */}
            <div className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-secondary/20 via-accent/15 to-primary/5 opacity-50 blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              {/* Lead Paragraph */}
              <p className="font-sans text-lg md:text-xl text-foreground/90 leading-relaxed mx-auto text-center mb-10 md:mb-12 font-medium">
                At its core, listing optimization is what determines whether your traffic converts — or disappears.
              </p>

              {/* Grid Content */}
              <div className="grid gap-8 md:grid-cols-2 text-left">
                <div className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    It’s the difference between a product page that simply exists and one that actively sells.
                  </p>
                  <p>
                    Most Amazon listings blend together. Standard product images. Generic descriptions. No clear positioning. So even when paid traffic arrives, shoppers hesitate — and leave.
                  </p>
                </div>

                <div className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    You already understand the upside of better creative and stronger messaging. The real gap is execution — aligning visuals, copy, and structure in a way that actually increases conversion.
                  </p>
                  <p>
                    That’s where we step in.
                  </p>
                </div>
              </div>

              {/* Highlighted Key Takeaway */}
              <div className="mt-10 md:mt-12 rounded-2xl bg-primary/5 border border-secondary/30 px-6 md:px-10 py-6 md:py-8 text-base md:text-lg text-foreground/95 leading-relaxed text-left md:text-center shadow-inner">
                <p>
                  We built the <b>Conversation Stack</b> to intentionally upgrade every layer of your listing — premium, benefit-driven creative, psychology-informed messaging, and structured split testing to validate what performs before scaling.
                </p>
              </div>
            </div>
          </div>
          
          {/* Subtle glow behind card */}
          <div className="absolute inset-0 -z-10 bg-secondary/10 blur-[80px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </div>
    </section>
  );
};
