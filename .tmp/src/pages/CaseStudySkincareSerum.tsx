import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/Footer";

const CaseStudySkincareSerum = () => {
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
                CASE STUDY 02 · BEAUTY · Skincare Serum Category
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mb-6 max-w-4xl">
                Skincare Brand Drops CPC 34% With a 3-Second Video Hook Overhaul
              </h1>

              {/* Hero Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/70 bg-black aspect-[16/9] mb-12">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772053199083-images-9.png"
                  alt="FRÉ vitamin C serum bottle on blue background with serum textures and lemon slices"
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
                <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">Results Graphic — Case Study 02</h2>
                <p className="text-xl md:text-2xl font-sans font-bold text-accent mb-6">
                  CPC $1.92 → $1.27 | CVR 16.1% → 22.4% | Revenue $68K → $103K
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    CPC dropped 34% — the first 3 seconds of video drove the entire efficiency gain. Swap in branded results card: CPC $1.92 → $1.27, CVR 16.1% → 22.4%, Revenue $68K → $103K.
                  </p>
                  <p className="text-primary italic font-sans text-lg">
                    "Sponsored Brands Video drives 30–50% lower CPC in competitive beauty niches when creative hooks in the first 3 seconds."
                  </p>
                </div>
              </motion.div>

              {/* The Situation */}
              <section className="mb-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  CASE STUDY 02 · BEAUTY · Skincare Serum Category
                </p>
                <h2 className="font-heading text-2xl md:text-4xl text-primary mb-6">THE SITUATION</h2>
                <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
                  <p>
                    A professional-grade facial serum brand was running Sponsored Brands Video campaigns but struggling with high costs. With CPCs at $1.92 and a CVR of 16.1%, their profitability was stretched. The original video creative featured a 4-second logo intro before showing the product or its benefits. In a fast-scrolling marketplace where shoppers move past ads in under 2 seconds, they were losing the audience before the pitch even started.
                  </p>
                </div>
              </section>

              {/* Before / After Hero Images Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-100 aspect-[4/3] mb-4 flex items-center justify-center">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772053654037-images-10.png"
                      alt="FRÉ vitamin C serum bottle with full ingredient list on blue background"
                      className="w-full h-full object-cover grayscale opacity-60"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: White Background Hero</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of old hero — product on white, blends into search results</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10 flex items-center justify-center">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772053654038-images-11.png"
                      alt="FRÉ vitamin C serum packaging with clean and vegan claim icons"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: Lifestyle Hero Image</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new hero — in-use lifestyle context, stands out on shelf</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-16 italic">
                Hero image: Generic white background replaced with lifestyle context — CTR increased 52%.
              </p>

              {/* Video Frame Before/After Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-border/70 bg-slate-100 aspect-[4/3] mb-4 flex items-center justify-center bg-gray-200">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772053654038-images-12.png"
                      alt="FRÉ vitamin C serum bottle pouring product on bright yellow background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] BEFORE: Video Frame 1 (4 sec delay)</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of old video opening — logo animation, no product visible</p>
                </div>
                <div className="flex flex-col">
                  <div className="rounded-[1.75rem] overflow-hidden border border-secondary/30 bg-slate-50 aspect-[4/3] mb-4 shadow-lg shadow-secondary/10 flex items-center justify-center">
                    <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772053654038-images-13.png"
                      alt="FRÉ 10% vitamin C brightening serum bottle with lemons and headline text"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-primary mb-1">[ IMAGE ] AFTER: Video Frame 1 (instant hook)</h4>
                  <p className="text-sm text-muted-foreground">Screenshot of new video opening — product benefit visible immediately</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-16 italic">
                Sponsored Brands Video: 4-second logo intro replaced with immediate benefit-forward hook.
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
                      <span>Video hook delayed by 4+ seconds — product benefit not visible until mid-video.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Hero image on white background matching 80% of competitors — zero shelf differentiation.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>A+ content had six text-heavy modules, not optimized for mobile rendering.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>No before/after imagery to substantiate clinical claims.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Brand Story section was generic, missing founder credibility or story-driven trust signals.</span>
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
                      <span>Reshot Sponsored Brands Video: benefit-forward in frame one, logo moved to final 2 seconds.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>New hero image: lifestyle context with skin outcome visible, differentiated from white-box norm.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Rebuilt A+ for mobile-first: large visuals, minimal text, outcome-led module flow.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Added clinical before/after imagery with ingredient callout module.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Rewrote Brand Story with founder narrative and dermatologist credentialing.</span>
                    </li>
                  </ul>
                </section>
              </div>

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
                        <td className="px-6 py-4 text-foreground/80 font-medium">CPC (Sponsored Brands Video)</td>
                        <td className="px-6 py-4 text-foreground/70">$1.92</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary text-green-600">$1.27</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Conversion Rate</td>
                        <td className="px-6 py-4 text-foreground/70">16.1%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">22.4%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">TACOS</td>
                        <td className="px-6 py-4 text-foreground/70">21%</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary text-green-600">14%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-foreground/80 font-medium">Monthly Revenue</td>
                        <td className="px-6 py-4 text-foreground/70">$68,000</td>
                        <td className="px-6 py-4 bg-secondary/5 font-bold text-primary">$103,000</td>
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
                  <a href="mailto:success@engin8.com">Request Strategy Call</a>
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default CaseStudySkincareSerum;
