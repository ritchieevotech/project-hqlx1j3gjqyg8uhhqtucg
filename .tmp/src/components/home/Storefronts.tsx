import * as React from "react";
import { motion } from "framer-motion";

export const Storefronts = () => {
  return (
    <section className="py-8 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight"
        >
          Amazon Storefronts That <span className="squiggly-underline text-secondary">Engage</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[1.2fr,1fr] items-center">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="font-heading text-3xl md:text-4xl text-primary mb-4 leading-tight">
              We build Storefronts using the ENGIN8 Framework — a structured approach designed for visibility, clarity, and conversion.
            </h3>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-xl">
              Elevate your storefront with:
            </p>
          </div>

          <div className="space-y-4 mt-2">
            {[
              { title: "E — Experience Architecture", desc: "Design a guided journey, not a product catalog. Clear sections, intentional flow, and mobile-first layout improve engagement and conversion." },
              { title: "N — Narrative Positioning", desc: "Use benefit-driven headlines and brand-specific imagery that clearly communicate who the product is for and what problem it solves." },
              { title: "G — Growth Signals", desc: "Integrate videos, keyword-aligned content, and structured messaging that strengthens search visibility and improves Rufus discoverability." },
              { title: "I — Intent-Based Content (AEO)", desc: "Answer real customer questions directly. Clear, scannable sections improve answer engine performance and AI surfacing." },
              { title: "N — Native Social Proof", desc: "Feature authentic reviews, UGC, and measurable outcomes to reinforce trust and buying confidence." },
              { title: "8 — Conversion Levers", desc: "Optimize every module for clarity, speed, and action — ensuring your storefront turns traffic into revenue." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-secondary text-2xl mt-0.5">⚡</span>
                <div>
                  <h4 className="font-heading text-xl text-primary font-bold">{item.title}</h4>
                  <p className="font-sans text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-xl italic border-l-4 border-secondary/30 pl-4 mt-2">
            A strategically structured, ENGIN8-powered storefront increases discoverability, strengthens AI visibility, and drives predictable growth.
          </p>
        </motion.div>

        {/* Right Column: Phone Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="mx-auto w-[280px] sm:w-[320px] md:w-[360px] h-auto rounded-[2.5rem] overflow-hidden drop-shadow-2xl border-[8px] border-primary/10 bg-white ring-4 ring-primary/5">
            <div className="relative pt-[215%]">
              <iframe
                src="https://drive.google.com/file/d/1wTDvOppFqDP7CoGMY_-XyovzTWR5rhK8/preview"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Amazon Storefront walkthrough video"
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
