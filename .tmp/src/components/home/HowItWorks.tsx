import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Tell us about your brand",
    body: "We’ll dive deep into your products, positioning, and data.",
    boldPart: "Tell us",
  },
  {
    title: "We map the creative plan",
    body: "Our creative directors build a storefront and listing strategy tailored to you.",
    boldPart: "We map",
  },
  {
    title: "You review drafts",
    body: "We share creative briefs and first passes within 10–12 days.",
    boldPart: "You review",
  },
  {
    title: "We refine & launch",
    body: "You share feedback, we polish the work, and then deliver final assets.",
    boldPart: "We refine",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
          >
            How It Works…
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-sans text-sm md:text-base text-muted-foreground"
          >
            Book a call & we’ll build you a custom proposal.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-10 md:gap-12 md:grid-cols-4 mb-24"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-border bg-white flex items-center justify-center text-xl font-heading text-primary shadow-sm">
                  {index + 1}
                </div>
              </div>
              <p className="font-sans text-base md:text-lg text-foreground">
                <span className="font-semibold text-primary">{step.boldPart}</span>
                {step.title.slice(step.boldPart.length)}
              </p>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-3xl rounded-[2.5rem] bg-secondary/20 px-8 py-12 md:py-16 text-center shadow-sm border border-secondary/10">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary mb-8">
              Join <span className="squiggly-underline">500+ eCommerce Brands</span>
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact">Let’s Talk</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
