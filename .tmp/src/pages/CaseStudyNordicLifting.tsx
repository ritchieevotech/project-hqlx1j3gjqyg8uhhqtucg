import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudyNordicLifting = () => {
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

          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            {/* Left Column: Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground/80 mb-4">
                Case Study: Nordic Lifting
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mb-6">
                How Nordic Lifting revived Amazon ad performance through AI
              </h1>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-border" />
                <span className="font-display text-2xl md:text-3xl text-muted-foreground/40 tracking-widest uppercase">
                  Nordic Lifting
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Hero Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/70 bg-black aspect-[16/9] mb-12">
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771850935157-Screenshot-2026-02-23-at-8.47.39-PM.png"
                  alt="Nordic Lifting Amazon Performance Case Study"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Sections */}
              <div className="space-y-12 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                <section>
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4 tracking-tight">
                    Before Engin8
                  </h2>
                  <p className="mb-4">
                    Nordic Lifting was an established powerhouse in the fitness and gym equipment category, but even giants face plateaus. Despite their strong brand history, their Amazon advertising performance had begun to stall.
                  </p>
                  <p>
                    Rising CPCs across the board meant their legacy campaigns were burning through budget with diminishing returns. Their creative assets, while professional, had become "background noise" in an increasingly crowded marketplace where competitors were using more dynamic, AI-optimized visual storytelling.
                  </p>
                </section>

                <section className="bg-muted/30 rounded-[2rem] p-8 md:p-10 border border-border/50">
                  <h3 className="font-heading text-xl md:text-2xl text-primary mb-6">Key Challenges</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-secondary" /></div>
                      <span><strong>Dated Creative:</strong> Existing imagery failed to stand out against newer, more aggressive competitors.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-secondary" /></div>
                      <span><strong>Plateaued ROAS:</strong> Advertising spend was increasing while sales remained flat, leading to squeezed margins.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-secondary" /></div>
                      <span><strong>Scattered Messaging:</strong> The brand story wasn't consistent across different product tiers and listing types.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-secondary" /></div>
                      <span><strong>Inefficient Testing:</strong> Creative updates were slow and based on intuition rather than data-driven iteration.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4 tracking-tight">
                    The Process
                  </h2>
                  <p className="mb-4">
                    Engin8 stepped in as the "quiet engine" to overhaul the visual strategy. We didn't just guess what would work; we used our AI-driven analysis tools to map out exactly where the friction was in their customer journey.
                  </p>
                  <p className="mb-4">
                    We completely rebuilt their visual story from the ground up. This included a radical redesign of their Main Images to maximize CTR (Click-Through Rate) and a total refresh of their Product Gallery to address the specific objections our data uncovered.
                  </p>
                  <p>
                    Every new asset was subjected to rapid creative testing, allowing us to lock in winners and discard underperformers within days rather than months.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4 tracking-tight">
                    Results
                  </h2>
                  <p className="mb-6">
                    The transformation was immediate. By aligning their visual creative with the actual search intent of their customers, we unlocked a new level of performance that Nordic Lifting hadn't seen in years.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border border-border rounded-2xl shadow-sm text-center">
                      <div className="text-3xl md:text-4xl font-heading text-secondary mb-1">Significant</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">ROAS Lift</div>
                    </div>
                    <div className="p-6 bg-white border border-border rounded-2xl shadow-sm text-center">
                      <div className="text-3xl md:text-4xl font-heading text-secondary mb-1">Higher</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Click-Through</div>
                    </div>
                    <div className="p-6 bg-white border border-border rounded-2xl shadow-sm text-center">
                      <div className="text-3xl md:text-4xl font-heading text-secondary mb-1">Stronger</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Conversions</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight">
                    Our Proven Creative Optimization Process
                  </h2>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Pull all the data", desc: "We look at search terms, competitor visuals, and current performance gaps." },
                      { step: "2", title: "Rebuild the visual story", desc: "Design assets that stop the scroll and build immediate trust." },
                      { step: "3", title: "Test and iterate", desc: "Use real traffic to see what actually converts, not just what looks good." },
                      { step: "4", title: "Lock in the winner", desc: "Deploy the high-performing assets across the entire catalog." }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6 items-start">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading text-xl shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                          <p className="text-sm md:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.article>

            {/* Right Column: Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-8 lg:sticky lg:top-32"
            >
              {/* CTA Card */}
              <div className="rounded-[2rem] bg-secondary text-secondary-foreground p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <h3 className="font-heading text-2xl md:text-3xl leading-tight">
                  Sell more with optimized listings
                </h3>
                <p className="text-secondary-foreground/90 text-sm md:text-base">
                  Engin8 is the white-label creative engine quietly powering marketplace wins behind the scenes.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full py-6 text-lg font-heading font-bold shadow-lg">
                  <a href="mailto:jeff@engin8.com">Request a strategy call</a>
                </Button>
              </div>

              {/* Details Card */}
              <div className="rounded-[2rem] bg-card border border-border p-8 shadow-sm">
                <h4 className="font-heading text-xl text-primary mb-6">Quick Stats</h4>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Category</span>
                    <p className="font-semibold text-primary">Fitness & Sports | Gym Equipment</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Stage</span>
                    <p className="font-semibold text-primary">Established brand leveling up performance</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Results</span>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Enhanced main image
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Refreshed product gallery
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        A+ content overhaul
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Brand story clarified
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.aside>
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

export default CaseStudyNordicLifting;
