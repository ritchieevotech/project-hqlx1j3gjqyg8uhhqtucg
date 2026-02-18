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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 font-sans text-base md:text-lg text-foreground leading-relaxed"
        >
          <p>
            At its core, listing optimization is what determines whether your traffic converts — or disappears.
          </p>
          <p>
            It’s the difference between a product page that simply exists and one that actively sells.
          </p>
          <p>
            Most Amazon listings blend together. Standard product images. Generic descriptions. No clear positioning. So even when paid traffic arrives, shoppers hesitate — and leave.
          </p>
          <p>
            You already understand the upside of better creative and stronger messaging. The real gap is execution — aligning visuals, copy, and structure in a way that actually increases conversion.
          </p>
          <p>
That’s where we step in.
          </p>
<p>
          We built the <b>Conversation Stack</b>  to intentionally upgrade every layer of your listing — premium, benefit-driven creative, psychology-informed messaging, and structured split testing to validate what performs before scaling.
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
