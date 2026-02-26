import { motion } from "framer-motion";
import { Brain, Search, Sparkles, MessageSquare, ShieldAlert, Heart, Zap, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FrameworkAiEra = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-brand-blue hover:bg-brand-blue text-white uppercase tracking-widest px-4 py-1">
              The AI Revolution
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Winning in the <br />
              <span className="text-secondary italic">Rufus & Cosmo</span> Era
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Amazon's new AI models don't just index keywords—they "read" your images and understand the semantic relationship between your visuals and the buyer's intent.
            </p>
            
            <div className="space-y-6">
              {[
                "AI-driven visual story structure",
                "Benefit-first image hierarchy",
                "Semantic text-image alignment",
                "Clarity designed for mobile micro-moments"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-secondary font-bold text-2xl mb-2">30–50% Higher Conversions</p>
              <p className="text-white/70 italic">The massive opportunity for brands that optimize for Amazon's next-gen AI search engines.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl md:h-[700px]">
              <img
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647958-4.png"
                alt="Example of high-converting structured creative with benefit-driven messaging"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">
                  Structured, benefit-driven creative architecture
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkProblems = () => {
  const problems = [
    { 
      title: "Generic Images", 
      icon: ShieldAlert, 
      color: "text-red-500",
      bullets: ["Stock-heavy visuals", "Lack of brand personality", "Invisible in search results"]
    },
    { 
      title: "Unclear Value", 
      icon: HelpCircle, 
      color: "text-orange-500",
      bullets: ["Vague benefit claims", "Technical jargon overload", "Confusing use-case presentation"]
    },
    { 
      title: "Unanswered Questions", 
      icon: MessageSquare, 
      color: "text-yellow-500",
      bullets: ["Missing critical specs", "No size/fit comparisons", "Weak lifestyle context"]
    },
    { 
      title: "Poor AI Optimization", 
      icon: Brain, 
      color: "text-blue-500",
      bullets: ["Unreadable mobile text", "Messy visual hierarchy", "Weak semantic signals"]
    },
    { 
      title: "Weak Connection", 
      icon: Heart, 
      color: "text-pink-500",
      bullets: ["No emotional resonance", "Cold, clinical messaging", "Doesn't speak to the target"]
    },
    { 
      title: "Missed Opportunities", 
      icon: Zap, 
      color: "text-green-500",
      bullets: ["Weak call-to-actions", "No cross-selling strategy", "Static, unevolving creative"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">
            Common Problems Amazon Sellers Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most brands are leaving money on the table because of these six conversion-killing mistakes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border bg-slate-50/30 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform ${problem.color}`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{problem.title}</h3>
              <ul className="space-y-3">
                {problem.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
