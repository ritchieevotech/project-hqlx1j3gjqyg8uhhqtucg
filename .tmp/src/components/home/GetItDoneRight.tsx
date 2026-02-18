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
            Get It Done Right.
          </h2>
          
          <div className="space-y-2 font-sans text-base md:text-lg text-foreground/90 max-w-2xl mx-auto">
            <p>👯‍♀️ Too many Amazon products look exactly the same!</p>
            <p>🔍 Customers will never find you in the millions of products on Amazon.</p>
            <p>🧩 It’s vital that your product stands out and attracts customers.</p>
            <p>👋 Fortunately, we can help!</p>
          </div>

          <p className="mt-8 font-heading text-sm md:text-base text-primary font-semibold tracking-tight">
            Get in touch today, it’s never too early or late to optimize!
          </p>
          
          <div className="mt-4 text-2xl md:text-3xl tracking-tight">
            <span>👇🏽👇🏾👇🏼👇🏿👇🏻</span>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-3xl mx-auto rounded-[2.5rem] bg-[#FFF89A] shadow-xl px-8 py-10 md:px-12 md:py-12 flex flex-col items-center gap-6">
            <p className="font-heading text-2xl md:text-3xl text-primary font-semibold">
              Join <span className="relative inline-block border-b-4 border-green-400">500+ eCommerce Brands</span>
            </p>
            
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-blue px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              LET'S TALK <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">👋</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
