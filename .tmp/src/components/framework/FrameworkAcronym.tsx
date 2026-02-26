import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, BookOpen, Navigation, Palette, Ban, Activity } from "lucide-react";

export const FrameworkPrinciples = () => {
  const principles = [
    { title: "AI + Human Optimization", desc: "We design for Amazon's machine vision while speaking to human emotions.", icon: Shield },
    { title: "Evidence-Based Design", desc: "Every visual choice is backed by performance data and buyer psychology.", icon: BookOpen },
    { title: "Integrated System", desc: "Your listing isn't a collection of images; it's a unified sales machine.", icon: Navigation },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary hover:bg-secondary text-white uppercase tracking-widest px-4 py-1">
            Our Core Principles
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">
            The Engin8 Philosophy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl text-center border-b-8 border-secondary/20"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center mb-12">
              <h3 className="font-display text-5xl md:text-7xl uppercase mb-4 tracking-tight">
                The <span className="text-secondary">E.N.G.I.N.8</span> Acronym
              </h3>
              <p className="text-white/70 text-lg md:text-xl">Our step-by-step roadmap to category dominance.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
              {[
                { letter: "E", label: "Establish Trust", color: "border-secondary text-secondary" },
                { letter: "N", label: "Narrative (Story)", color: "border-white/20 text-white" },
                { letter: "G", label: "Guide Shoppers", color: "border-white/20 text-white" },
                { letter: "I", label: "Integrate Brand", color: "border-white/20 text-white" },
                { letter: "N", label: "Navigate Objections", color: "border-white/20 text-white" },
                { letter: "8", label: "Optimize & Iterate", color: "border-brand-blue text-brand-blue" },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 flex items-center justify-center mb-4 transition-all hover:scale-110 ${step.color}`}>
                    <span className="font-display text-4xl md:text-5xl uppercase leading-none">{step.letter}</span>
                  </div>
                  <span className="text-xs md:text-sm font-heading font-bold uppercase text-center tracking-tighter opacity-80">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
