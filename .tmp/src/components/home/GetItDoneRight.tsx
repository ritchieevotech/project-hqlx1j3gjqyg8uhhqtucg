import * as React from "react";
import { motion } from "framer-motion";

export const GetItDoneRight = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8 tracking-tight">
            Built to Stand Out. Built to Scale.
          </h2>
          
          <div className="space-y-3 font-sans text-base md:text-lg text-foreground/90 max-w-2xl mx-auto">
            <p>Most Amazon listings blend into the noise.</p>
            <p>If your product looks like everyone else’s, it gets treated like everyone else’s.</p>
            <p>Visibility isn’t automatic.</p>
            <p>Differentiation isn’t accidental.</p>
            <p>It takes strategy, structure, and testing to win.</p>
          </div>

          <p className="mt-10 font-heading text-xl md:text-2xl text-primary font-semibold tracking-tight">
            Let’s build it right.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-[#FFF89A] shadow-xl px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center pb-20 md:pb-24">
            <p className="font-heading text-2xl md:text-4xl text-primary font-semibold leading-tight max-w-2xl">
              <span className="block mb-2">Join</span>
              <span className="block">
                <span className="playful-underline">500+</span> eCommerce brands optimizing for performance.
              </span>
            </p>
            
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 inline-flex items-center justify-center rounded-full bg-brand-blue px-10 md:px-16 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-wider text-white shadow-xl hover:shadow-2xl hover:translate-y-[45%] transition-all duration-200 group whitespace-nowrap"
            >
              LET'S TALK <span className="ml-3 group-hover:rotate-12 transition-transform duration-300">👋</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
