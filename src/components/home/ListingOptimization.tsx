import * as React from "react";
import { motion } from "framer-motion";

export const ListingOptimization = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-8 leading-tight"
        >
          What Is Amazon Listing Optimization?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-sans text-sm md:text-base text-muted-foreground mb-6"
        >
          In a nutshell...
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 font-sans text-base md:text-lg text-foreground leading-relaxed"
        >
          <p className="font-semibold">Listing Optimization:</p>
          <p>
            It's the fluffy phrase Amazon experts like to throw around 50 times
            in a conversation without ever getting specific.
          </p>

          <p className="font-semibold pt-4">But you know what it really is?</p>
          <p>
            It's the reason your Amazon ads are bleeding money while your
            product pages just sit there not converting.
          </p>

          <p>
            You've seen those listings. Generic product shots, bland copy,
            nothing thumb-stopping. Your competitors are doing it, and frankly,
            you might be too.
          </p>

          <p>
            You know you need to fix it. You just don't have the time, the design
            team, or the energy to run a thousand A/B tests.
          </p>

          <p className="font-semibold pt-4">We're that team.</p>
          
          <p>
            The Engin8 approach transforms basic listings into high-converting
            assets with drool-worthy visuals, conversion-focused copy, and
            data-backed testing.
          </p>
          
          <p className="font-bold text-primary italic">
            Let's turn your ad spend into revenue, not regret.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
