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
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4 tracking-tight uppercase">
            Why Agencies Partner With Us
          </h2>
          <p className="font-sans text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            We function as a dedicated Amazon optimization division inside your agency — without adding internal overhead.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:gap-12 md:grid-cols-2 xl:grid-cols-3 items-start"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="flex flex-col items-start text-left group"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg md:text-xl text-primary mb-3 uppercase tracking-[0.12em] leading-tight">
                {benefit.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line text-justify">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
