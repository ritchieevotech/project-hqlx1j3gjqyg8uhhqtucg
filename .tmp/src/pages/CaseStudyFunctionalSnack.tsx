import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowLeft, TrendingUp, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudyFunctionalSnack = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      
      <main className="pt-28 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back button */}
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </motion.a>

          <div className="grid gap-12 items-start">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground/80 mb-4">
                CASE STUDY 03 · SOUR POWER · Functional Snack Category
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mb-6 max-w-4xl">
                Functional Snack Brand Converts 44% More Shoppers With Objection-Focused A+ Rebuild
              </h1>

              {/* Hero Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/70 bg-black aspect-[16/9] mb-12">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772035636619-Screenshot-2026-02-26-at-12.07.05-AM.png"
                  alt="Colorful Sour Power candy product display with festive character made from candy strips"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Results Highlight Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent/10 rounded-[2.5rem] p-8 md:p-12 mb-16 border border-accent/20 text-center"
              >
                <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">Results Graphic — Case Study 03</h2>
                <p className="text-xl md:text-2xl font-sans font-bold text-accent mb-6">
                  CVR 14.8% → 21.3% | Units/Order 1.2 → 1.8 | Revenue $91K → $138K
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    $47K/month uplift from restructuring A+ to answer objections instead of repeating features.
                  </p>
                  <p className="text-primary italic font-sans text-lg border-l-2 border-secondary pl-4 mt-8">
                    "High-converting brands use A+ to answer objections. Most brands use it to repeat their bullet points. The difference was $47K/month."
                  </p>
                </div>
              </motion.div>

              {/* The Situation */}
              <section className="mb-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  CASE STUDY 03 · SOUR POWER · Functional Snack Category
                </p>
                <h2 className="font-heading text-2xl md:text-4xl text-primary mb-6">THE SITUATION</h2>
                <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
                  <p>
                    A functional protein snack brand targeting health-conscious consumers had strong repeat purchase rates but struggled to convert cold traffic. At $91K/month with a CVR of 14.8%, the brand was losing paid clicks to competitors. Exit analysis revealed shoppers left primarily due to ingredient and taste uncertainty — objections the listing never addressed.
                  </p>
                </div>
              </section>

              {/* Before / After Hero Images Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-50 aspect-[4/3] mb-4">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                       <span className="text-muted-foreground/40 font-heading text-xl">[ PRODUCT PHOTO ]</span>
                    </div>
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: Product-Only Hero</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of old hero — macro product shot, no human or context</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10">
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                       <span className="text-primary/40 font-heading text-xl">[ ATHLETE LIFESTYLE ]</span>
                    </div>
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: Athlete Lifestyle Hero</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new hero — athlete in context, identity-matched to ICP</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-16 italic">
                Hero image: Isolated product shot replaced with aspirational lifestyle image for target buyer
              </p>

              {/* What We Found & What We Changed */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <section>
                  <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 flex items-center gap-3">
                    <AlertCircle className="text-destructive w-6 h-6" />
                    WHAT WE FOUND
                  </h3>
                  <ul className="space-y-4 font-sans text-base md:text-lg text-foreground/80">
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>A+ content led with brand story and certifications — not with the shopper's primary question: 'Does this taste good?'</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Hero image featured a macro product shot with no use-context (no human, no setting, no scale).</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>No flavor comparison or variety module to help multi-SKU shoppers self-select.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Video focused on ingredients and process — no emotional payoff or lifestyle identity hook.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Missing third-party certifications in a prominent visual format (gluten-free, non-GMO, etc.).</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 flex items-center gap-3">
                    <Zap className="text-secondary w-6 h-6" />
                    WHAT WE CHANGED
                  </h3>
                  <ul className="space-y-4 font-sans text-base md:text-lg text-foreground/80">
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Restructured A+ flow: led with taste/texture social proof, followed by clean-label ingredient breakdown.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>New hero image: athlete in context consuming product — aspirational identity match for ICP.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Built flavor comparison module to reduce decision paralysis and increase multi-unit orders.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Reworked video: opened with real consumer reaction, transitioned to ingredient story.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Added certification badges prominently in hero and A+ for trust-signal reinforcement.</span>
                    </li>
                  </ul>
                </section>
              </div>

              {/* A+ Before/After Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-50 aspect-[4/3] mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground/40 font-heading text-xl">BRAND STORY FOCUS</span>
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: A+ Led with Brand Story</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of old A+ opening module — brand-first, not shopper-first</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10 flex items-center justify-center">
                    <span className="text-primary/40 font-heading text-xl">TASTE PROOF FOCUS</span>
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: A+ Led with Taste Proof</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new A+ — social proof, flavor imagery, real reviews up front</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-8 italic">
                A+ restructure: Shopper objection ('Does it taste good?') answered in the first scroll
              </p>

              {/* Flavor Comparison Card */}
              <div className="w-full mb-4">
                <div className="rounded-[1.75rem] overflow-hidden border border-secondary/20 bg-accent/5 aspect-[21/9] mb-4">
                  <img
                    src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772036900643-Screenshot-2026-02-26-at-12.01.12-AM.png"
                    alt="Sour Power flavor comparison chart versus other candies"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] Flavor Comparison Module</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new multi-flavor comparison chart — helps shoppers self-select, increases multi-unit orders</p>
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    New flavor comparison module reduced exit rate and increased units per order from 1.2 → 1.8
                  </p>
                </div>
              </div>

              {/* Results Table */}
              <section className="mb-16 mt-16">
                <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 flex items-center gap-3">
                  <TrendingUp className="text-accent w-6 h-6" />
                  RESULTS (60 DAYS)
                </h3>
                <div className="overflow-x-auto rounded-[1.5rem] border border-border shadow-sm">
                  <table className="w-full text-left font-sans">
                    <thead className="bg-muted/50 border-b border-border">
                      <tr>
                        <th className="px-6 py-4 font-heading text-lg text-primary">Metric</th>
                        <th className="px-6 py-4 font-heading text-lg text-primary">Before</th>
                        <th className="px-6 py-4 font-heading text-lg text-primary">After (60 Days)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Conversion Rate</td>
                        <td className="px-6 py-4 text-foreground/70">14.8%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary text-green-600">21.3%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Units Per Order</td>
                        <td className="px-6 py-4 text-foreground/70">1.2</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">1.8</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">TACOS</td>
                        <td className="px-6 py-4 text-foreground/70">22%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary text-green-600">15%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Monthly Revenue</td>
                        <td className="px-6 py-4 text-foreground/70">$91,000</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">$138,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-center text-white mb-8">
                <h3 className="font-heading text-2xl md:text-4xl mb-4">Want these results for your brand?</h3>
                <p className="font-sans text-lg text-white/80 mb-8 max-w-xl mx-auto">
                  Engin8 is the white-label creative engine quietly powering marketplace wins behind the scenes.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-12 py-6 text-xl">
                  <a href="mailto:jeff@engin8.com">Request Strategy Call</a>
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-primary py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
            <div className="md:col-span-2 flex items-center">
              <div className="flex flex-col gap-3" style={{ marginTop: "-40px" }}>
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771407501460-2.png"
                  alt="Engin8 logo"
                  className="w-40 md:w-52 h-auto"
                />
                <p className="font-sans text-sm md:text-base text-primary/80 max-w-sm">
                  The engine quietly powering your Amazon and marketplace wins behind the scenes.
                </p>
              </div>
            </div>
            <div></div>
            <div className="flex flex-col gap-6 md:items-start">
              <div>
                <h3 className="font-heading text-base md:text-lg font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 font-sans text-sm md:text-base text-primary/90">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:jeff@engin8.com" className="hover:underline">jeff@engin8.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <a href="https://www.linkedin.com/company/95691138/" className="hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-primary/40" />
          <div className="flex justify-center">
            <p className="mt-4 font-sans text-xs md:text-sm text-primary/80 text-center">
              © {new Date().getFullYear()} Engin8. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyFunctionalSnack;
