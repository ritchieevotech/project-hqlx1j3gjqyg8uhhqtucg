import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Route, Megaphone, Signal, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const Storefronts = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <span className="squiggly-underline text-secondary">Conversion-Focused</span> Amazon Brand Stores
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
              { icon: Route, title: "E — Experience Architecture", desc: "Design a guided journey, not a product catalog. Clear sections, intentional flow, and mobile-first layout improve engagement and conversion." },
              { icon: Megaphone, title: "N — Narrative Positioning", desc: "Use benefit-driven headlines and brand-specific imagery that clearly communicate who the product is for and what problem it solves." },
              { icon: Signal, title: "G — Growth Signals", desc: "Integrate videos, keyword-aligned content, and structured messaging that strengthens search visibility and improves Rufus discoverability." },
              { icon: Sparkles, title: "I — Intent-Based Content (AEO)", desc: "Answer real customer questions directly. Clear, scannable sections improve answer engine performance and AI surfacing." },
              { icon: ShieldCheck, title: "N — Native Social Proof", desc: "Feature authentic reviews, UGC, and measurable outcomes to reinforce trust and buying confidence." },
              { icon: Zap, title: "8 — Conversion Levers", desc: "Optimize every module for clarity, speed, and action — ensuring your storefront turns traffic into revenue." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-secondary text-2xl mt-0.5">⚡
                
                <item.icon className="h-12 w-12 text-primary/20" />
                </span>
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
          <div className="mx-auto w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-auto rounded-[3rem] overflow-hidden drop-shadow-2xl border-[12px] border-primary bg-primary/5 ring-8 ring-primary/10">
            <div className="relative aspect-[9/16] w-full bg-black">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.button
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full group focus:outline-none focus:ring-4 focus:ring-secondary/50 z-10"
                    aria-label="Play storefront walkthrough video"
                  >
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772220774268-Screenshot-2026-02-28-at-3.32.29-AM.png"
                      alt="Engin8 spokesperson with Engin8 logo"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                        <Play className="w-10 h-10 fill-current ml-1" />
                      </div>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe
                      src="https://drive.google.com/file/d/1MxxSnH6TT7PwRt8pY7bJmmgx3pqs5ElY/preview"
                      className="absolute inset-0 w-full h-full border-0 scale-[1.02]"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Amazon Storefront walkthrough video"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
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
