import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowLeft, TrendingUp, CheckCircle2, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudyCollagen = () => {
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
                CASE STUDY 01 · SUPPLEMENTS · Collagen Category
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mb-6 max-w-4xl">
                Collagen Brand Lifts CVR 38% and Adds $42K/Month — Without Touching Ad Spend
              </h1>

              {/* Hero Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/70 bg-black aspect-[16/9] mb-12">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/63c021d0-5ea5-4b39-a813-4d78ef6ae92d.png"
                  alt="Premium collagen supplement branding lifestyle image"
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
                <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">Results Graphic — Case Study 01</h2>
                <p className="text-xl md:text-2xl font-sans font-bold text-accent mb-6">
                  $82K → $124K | CVR 19.4% → 26.8% | TACOS 18% → 13%
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Revenue lift: <strong>$82K → $124K/month</strong> in 60 days with zero ad budget increase.
                  </p>
                  <p className="text-primary italic font-sans text-lg">
                    "No new keywords. No bid wars. Just better creative. That's what most brands miss."
                  </p>
                </div>
              </motion.div>

              {/* The Situation */}
              <section className="mb-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  CASE STUDY 01 · SUPPLEMENTS · Collagen Category
                </p>
                <h2 className="font-heading text-2xl md:text-4xl text-primary mb-6">THE SITUATION</h2>
                <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
                  <p>
                    A premium collagen supplement brand was scaling on Amazon but hit a performance ceiling. While their revenue was respectable at $82K/month, their efficiency was lagging. With a TACOS of 18% and a CVR of 19.4%, they were leaving significant profit on the table. They had a great product, but the listing was under-performing in a hyper-competitive category.
                  </p>
                </div>
              </section>

              {/* Before / After Hero Images Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-50 aspect-[4/3] mb-4">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/4a70df8c-54fa-4cb8-9dc4-8864656c4339.png"
                      alt="Before: Cluttered Amazon hero image"
                      className="w-full h-full object-cover grayscale opacity-60"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: Cluttered Hero Image</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of original hero — 6 benefit badges, busy layout</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/4a70df8c-54fa-4cb8-9dc4-8864656c4339.png"
                      alt="After: Simplified Amazon hero image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: Simplified Hero Image</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new hero — single bold benefit, clean hierarchy</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-16 italic">
                Before → After: Hero image simplification removed 4 excess badges and increased mobile readability
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
                      <span>Hero image packed with 6 benefit badges — visually cluttered and unreadable on mobile.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>No lifestyle imagery in A+ content — purely feature-based, not outcome-focused.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>No competitive comparison chart, allowing shoppers to freely comparison-shop competitors.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>No video in top gallery slots, leaving premium real estate unused.</span>
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
                      <span>Simplified hero image: stripped to one bold benefit hierarchy with clean visual layout.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Rebuilt A+ with lifestyle and outcome-focused modules (before/after, use-case scenarios).</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Inserted a competitor comparison chart anchoring brand superiority on key attributes.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Launched a 15-second Sponsored Brands Video with a strong hook in the first 3 seconds.</span>
                    </li>
                  </ul>
                </section>
              </div>

              {/* A+ Before/After Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-50 aspect-[4/3] mb-4">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/674f830f-6950-4e26-96fa-11d4543ceb91.png"
                      alt="Before: Feature-only A+ content"
                      className="w-full h-full object-cover grayscale opacity-60"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: Feature-Only A+ Content</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of old A+ — text-heavy, repetitive bullets</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/674f830f-6950-4e26-96fa-11d4543ceb91.png"
                      alt="After: Outcome-focused A+ content"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: Outcome-Focused A+ Modules</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new A+ — lifestyle imagery, objection handling</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-16 italic">
                A+ rebuild: Feature repetition replaced with lifestyle visuals and objection-handling copy
              </p>

              {/* Results Table */}
              <section className="mb-16">
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
                        <td className="px-6 py-4 text-foreground/80 font-medium">Monthly Revenue</td>
                        <td className="px-6 py-4 text-foreground/70">$82,000</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">$124,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Conversion Rate</td>
                        <td className="px-6 py-4 text-foreground/70">19.4%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">26.8%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">TACOS</td>
                        <td className="px-6 py-4 text-foreground/70">18%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary text-green-600">13%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Total Ad Budget Change</td>
                        <td className="px-6 py-4 text-foreground/70">—</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">No increase</td>
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

export default CaseStudyCollagen;
