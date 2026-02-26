import * as React from "react";
import { motion } from "framer-motion";
import { Blocks, Gauge, Target, Workflow, ShieldCheck, Handshake } from "lucide-react";

const benefits = [
  {
    title: "Scalable production infrastructure",
    description: "As your client roster grows, we provide the structured, repeatable systems needed for high-volume listings, A+ content, and storefront builds. Scale your Amazon services without the complexity of extra headcount.",
    icon: Blocks,
  },
  {
    title: "Performance-led execution",
    description: "Our work is rooted in structured testing, search intelligence, and conversion modeling. You maintain the strategy and client relationships while we provide the technical execution and optimization engine.",
    icon: Gauge,
  },
  {
    title: "Specialized Amazon focus",
    description: "We are not generalists. Our team is dedicated to Amazon PDP performance, SEO alignment, Rufus readiness, and content architecture — allowing your agency to offer deep platform expertise without building it internally.",
    icon: Target,
  },
  {
    title: "Operational integration",
    description: "We integrate directly into your existing workflows:\n• Project management systems\n• SOP alignment\n• Structured delivery timelines\n• Version control and compliance review\nMinimal friction. Predictable output.",
    icon: Workflow,
  },
  {
    title: "Risk & compliance aware",
    description: "We proactively monitor Amazon policy changes and content restrictions. Our rigorous experiment protocols reduce client risk and minimize time-consuming revisions.",
    icon: ShieldCheck,
  },
  {
    title: "True white-label partnership",
    description: "We operate as your internal execution engine with zero client visibility. No competing services, no margin erosion—just high-performance output delivered under your brand.",
    icon: Handshake,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const WhyAgenciesPartner = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight uppercase">
            Why Agencies <span className="text-secondary">Partner</span> With Us
          </h2>
          <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We function as a dedicated Amazon optimization division inside your agency — without adding internal overhead.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-3 items-stretch"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group relative h-full"
            >
              <div className="relative h-full rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-background to-accent/10 p-[1px] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:from-secondary/40 group-hover:to-accent/20">
                <div className="h-full rounded-[2.4rem] bg-white/95 backdrop-blur-sm border border-border/50 px-8 py-10 flex flex-col gap-6 relative overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="flex flex-col items-start gap-6 relative z-10">
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-brand-blue/10 blur-[2px] transition-transform duration-500 group-hover:scale-110" />
                      <div className="relative h-14 w-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                        <benefit.icon className="h-7 w-7" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-lg md:text-xl text-primary uppercase tracking-[0.15em] leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="font-sans text-[15px] md:text-base text-foreground/80 leading-relaxed whitespace-pre-line relative z-10">
                    {benefit.description}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <benefit.icon className="h-12 w-12 text-primary/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
