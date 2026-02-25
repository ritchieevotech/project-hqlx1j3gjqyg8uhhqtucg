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
    <section id="services" className="py-16 bg-slate-50 overflow-hidden scroll-mt-28">
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
                className="bg-white rounded-2xl shadow-lg border border-border/60 p-6 md:p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-primary/10 bg-secondary/5 text-primary flex items-center justify-center font-heading font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="p-2.5 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-xl md:text-2xl text-primary leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                <ul className="mt-2 space-y-2.5">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <p className="text-xs md:text-sm text-foreground/80 italic border-l-2 border-secondary/40 pl-3">
                    {step.footer}
                  </p>
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
