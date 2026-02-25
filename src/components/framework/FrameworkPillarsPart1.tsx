import { motion } from "framer-motion";
import { CheckCircle2, Shield, BookOpen, Navigation, Target, Lightbulb, Users } from "lucide-react";

export const FrameworkPillarE = () => {
  return (
    <section id="pillar-e" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-secondary/20">
              <span className="font-display text-5xl text-white">E</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Establish Trust</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Shoppers are naturally skeptical. Before they buy, they need to know your brand is legitimate, your quality is superior, and their purchase is safe.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-12">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-border">
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-secondary" />
                Trust Signals to Include
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Official Certifications & Lab Tests",
                  "Verified Social Proof & Awards",
                  "Transparent Ingredient/Material Sourcing",
                  "Clear Warranty & Satisfaction Guarantees",
                  "Authentic Manufacturing Processes",
                  "Expert Endorsements & Professional Approval"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] border border-border bg-white">
                <h4 className="font-heading text-xl font-bold text-primary mb-4">Where to Place Trust</h4>
                <p className="text-muted-foreground mb-4">The first 3 images in your stack must anchor trust. Use badges, zoomed-in quality details, and certifications early in the journey.</p>
                <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-xl">
                  <p className="text-sm font-semibold text-primary italic">"Example: A supplement brand placing lab-verified seals in the 2nd image saw a 14% lift in CVR."</p>
                </div>
              </div>
              <div className="p-8 rounded-[2rem] border border-border bg-white">
                <h4 className="font-heading text-xl font-bold text-primary mb-4">Metrics That Matter</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Decrease in refund/return rates</li>
                  <li>• Increase in "Add to Cart" velocity</li>
                  <li>• Higher star rating consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkPillarN = () => {
  return (
    <section id="pillar-n" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
              <span className="font-display text-5xl text-white">N</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Narrative (Story-Selling)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Facts tell, but stories sell. We transform your product features into a compelling narrative that mirrors the buyer's internal transformation.
            </p>
          </div>

          <div className="md:w-2/3 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                The Buyer's Journey (1-4)
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Recognition of Pain", desc: "Show the struggle or problem they face today." },
                  { step: "2", title: "Introduction of Solution", desc: "Present your product as the clear, simple hero." },
                  { step: "3", title: "Transformation in Action", desc: "Visual proof of the better life your product creates." },
                  { step: "4", title: "Victory / Satisfaction", desc: "The emotional payoff and long-term benefit." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">{item.step}</div>
                    <div>
                      <h4 className="font-heading font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[2rem] bg-primary text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Standard 6-Image Stack Progression</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Hero/Main Callout",
                  "Key Benefit #1",
                  "Problem/Solution Loop",
                  "Quality/Tech Specs",
                  "Lifestyle Integration",
                  "The Final CTA / Offer"
                ].map((img, i) => (
                  <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/20 text-center text-sm">
                    {img}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkPillarG = () => {
  return (
    <section id="pillar-g" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <div className="w-20 h-20 bg-brand-blue rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-blue/20">
              <span className="font-display text-5xl text-white">G</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Guide Shoppers</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A confused shopper never buys. We act as their expert guide, answering every silent question before it becomes a reason to click away.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Product Understanding", icon: Lightbulb, items: ["Sizing/Dimensions", "Compatibility", "Usage Instructions"] },
                { title: "Benefit Validation", icon: Target, items: ["Time-saving facts", "Durability proof", "Performance data"] },
                { title: "Purchase Confidence", icon: Users, items: ["Box contents", "Support access", "Brand backstory"] }
              ].map((group, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-slate-50">
                  <group.icon className="w-8 h-8 text-brand-blue mb-4" />
                  <h4 className="font-heading font-bold text-primary mb-3">{group.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {group.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[2rem] border-l-8 border-brand-blue">
              <h3 className="font-heading text-2xl font-bold mb-6">How We Uncover Questions</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-blue font-bold mb-3 uppercase tracking-widest text-sm">Passive Research</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• Competitor review mining</li>
                    <li>• Amazon Q&A history analysis</li>
                    <li>• Customer service ticket review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold mb-3 uppercase tracking-widest text-sm">Active Research</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• PickFu visual A/B testing</li>
                    <li>• Targeted customer surveys</li>
                    <li>• Direct focus group feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
