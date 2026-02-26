import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, FileText, Sparkles, FlaskConical } from "lucide-react";

const steps = [
  {
    title: "Customer & Competitor Intelligence",
    subtitle: "We use a structured research model across reviews, competitors, and Amazon's algorithm signals. We uncover what your customers really want.",
    bullets: [
      "Mine reviews",
      "Analyze competitors",
      "Identify the gaps and buying triggers",
    ],
    footer: "This gives us the data to build a listing that actually sells.",
    icon: Search,
  },
  {
    title: "Creative Brief",
    subtitle: "We turn the research into a clear story. Includes image hierarchy, copy tone, and compliance mapping.",
    bullets: [
      "Positioning, messaging, and 'why it matters'",
      "Rufus/Cosmo-aligned for AI visibility",
      "A blueprint that guides every image and word",
    ],
    footer: "This is how we keep your brand consistent and persuasive.",
    icon: FileText,
  },
  {
    title: "Produce",
    subtitle: "We create the full listing.",
    bullets: [
      "Eye-catching images",
      "Clean, compliant copy",
      "Differentiation your competitors can't match",
    ],
    footer: "Everything is built to stop the scroll and drive the click.",
    icon: Sparkles,
  },
  {
    title: "Test",
    subtitle: "We run structured thumbnail tests and image-stack evaluations using Amazon-native patterns. We validate before launch.",
    bullets: [
      "Test multiple versions with real shoppers",
      "Apply feedback and pick the winner",
      "Deliver your highest-converting final listing",
    ],
    footer: "No guesswork—just proven results.",
    icon: FlaskConical,
  },
];

export const HowItWorks = () => {
  return (
    <section id="services" className="py-8 bg-slate-50 overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
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

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/90 rounded-[2rem] border border-border/70 shadow-md hover:shadow-xl transition-all duration-300 group backdrop-blur-sm overflow-hidden flex flex-col h-full hover:-translate-y-1"
              >
                {/* Gradient accent */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/10 opacity-50 group-hover:opacity-80 blur-2xl transition-opacity duration-300" />
                
                {/* Left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary group-hover:w-2 transition-all duration-300" />

                <div className="p-6 md:p-8 pl-8 md:pl-10 flex flex-col h-full gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase font-heading">Step 0{index + 1}</span>
                    </div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm border border-primary/5">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl md:text-2xl text-primary tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <div className="rounded-2xl bg-primary/5 border border-secondary/20 px-4 py-3 text-xs md:text-sm italic text-foreground/85">
                      {step.footer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
                <a 
                  href="https://calendar.app.google/iqBESxmECENgqPon9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Let’s Talk
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
