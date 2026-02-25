import { motion } from "framer-motion";
import { Palette, Ban, Activity, CheckCircle2, AlertCircle, TrendingUp, Search, Layers } from "lucide-react";

export const FrameworkPillarI = () => {
  return (
    <section id="pillar-i" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
          <div className="md:w-1/3 sticky top-32" style={{ backgroundColor: "#F8FAFC"}}>
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
              <span className="font-display text-5xl text-white">I</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Integrate Brand</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A listing is not a silo. We weave your brand's unique identity into every panel to build recognition and long-term customer loyalty.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] border border-border shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Palette className="w-8 h-8 text-primary" />
                  Brand Elements
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Consistent color palettes & custom typography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Unique brand tone of voice in all copy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Signature lifestyle photography style</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Iconic packaging & logo placement</span>
                  </li>
                </ul>
              </div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771547977211-Untitled-design-13.png"
                  alt="Example of integrated branding in a storefront and listing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">Visual Brand Integration</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 md:p-12 rounded-[2rem]">
              <h3 className="font-heading text-2xl font-bold mb-6">Where to Integrate Brand</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-2">Premium A+ Design</h4>
                  <p className="text-sm text-white/70">The place for your brand's full story, values, and cross-catalog consistency.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-2">Brand Storefront</h4>
                  <p className="text-sm text-white/70">A dedicated shopping destination that mirrors your DTC experience on Amazon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkPillarN2 = () => {
  return (
    <section id="pillar-n2" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32" style={{ backgroundColor: "#ffffff"}}>
            <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-secondary/20">
              <span className="font-display text-5xl text-white">N</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Navigate Objections</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every customer has a reason NOT to buy. We identify these mental hurdles and dismantle them systematically with visual proof.
            </p>
          </div>

          <div className="md:w-2/3 space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { cat: "Product Quality", items: ["Will it break?", "Is it cheap materials?", "Does it look different?"] },
                { cat: "Value & Price", items: ["Is it worth the premium?", "Why not the $10 cheaper one?", "Is there a bundle?"] },
                { cat: "Safety & Fit", items: ["Is it safe for kids?", "Will it fit my space?", "Are there allergies?"] },
                { cat: "Lifestyle Fit", items: ["Is it too bulky?", "Does it match my style?", "Is it hard to clean?"] }
              ].map((group, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-border bg-slate-50">
                  <h4 className="font-heading font-bold text-primary mb-4 flex items-center gap-2">
                    <Ban className="w-5 h-5 text-secondary" />
                    {group.cat}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2rem] border-r-8 border-secondary">
              <h3 className="font-heading text-2xl font-bold mb-6">5-Step Objection Handling Strategy</h3>
              <div className="space-y-4">
                {[
                  "Identify common friction points in competitor reviews.",
                  "Address the most critical objection in the 2nd or 3rd image.",
                  "Use side-by-side 'Us vs. Them' comparisons for visual clarity.",
                  "Show real-world stress tests or usage scenarios.",
                  "Reinforce with authoritative badges or certifications."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-secondary font-bold">{i + 1}.</span>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-secondary/5 border border-secondary/10 rounded-2xl">
              <p className="text-primary font-medium italic">
                "Real Case: A skincare product addressed 'greasy residue' objections with a 5-second absorbency demo in the image stack, resulting in a 22% CVR jump."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkPillar8 = () => {
  return (
    <section id="pillar-8" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
          <div className="md:w-1/3 sticky top-32" style={{ backgroundColor: "##F8FAFC"}}>
            <div className="w-20 h-20 bg-brand-blue rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-blue/20">
              <span className="font-display text-5xl text-white">8</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6 uppercase">Optimize & Iterate</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The framework doesn't stop at launch. We continuously monitor performance and iterate based on real market feedback to maintain dominance.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-xl">
              <div className="bg-brand-blue p-4 text-white font-heading font-bold uppercase tracking-widest text-center">
                Key Metrics to Track
              </div>
              <div className="p-6 md:p-8 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 font-heading font-bold text-primary">Metric</th>
                      <th className="py-4 font-heading font-bold text-primary">Healthy Range</th>
                      <th className="py-4 font-heading font-bold text-primary">Action if Low</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-4 font-bold text-primary">Click-Through Rate (CTR)</td>
                      <td className="py-4">0.5% - 1.5%+</td>
                      <td className="py-4 italic">Test Main Image & Title</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 font-bold text-primary">Conversion Rate (CVR)</td>
                      <td className="py-4">10% - 30%+</td>
                      <td className="py-4 italic">Refine Stack & Narrative</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 font-bold text-primary">Organic Ranking</td>
                      <td className="py-4">Top 10-20</td>
                      <td className="py-4 italic">Optimize SEO & Velocity</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-bold text-primary">Return Rate</td>
                      <td className="py-4">&lt; 5%</td>
                      <td className="py-4 italic">Clarify Specs & Objections</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] border border-border">
                <h4 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-brand-blue" />
                  Metrics to Measure
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">• Traffic & Visibility Shifts</li>
                  <li className="flex items-center gap-2">• Customer Feedback Sentiment</li>
                  <li className="flex items-center gap-2">• Competitor Strategy Changes</li>
                  <li className="flex items-center gap-2">• A/B Testing Results (Manage Your Experiments)</li>
                </ul>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-[2rem]">
                <h4 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-blue" />
                  Optimization Cycle
                </h4>
                <div className="space-y-4 text-xs md:text-sm text-white/70">
                  <p><span className="text-brand-blue font-bold">Month 1:</span> Launch initial optimized creative.</p>
                  <p><span className="text-brand-blue font-bold">Month 2:</span> Analyze heatmap data & CVR trends.</p>
                  <p><span className="text-brand-blue font-bold">Month 3+:</span> Continuous A/B testing for marginal gains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
