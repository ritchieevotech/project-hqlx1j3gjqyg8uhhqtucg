import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ResultsHero() {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-wider">100+ Brands per year</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-wider">200+ Split tests per year</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 text-primary">
            Amazon Experiments Data
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Insights are drawn from our proprietary testing initiatives conducted through early 2026. By systematically iterating on creative assets and content frameworks, we continuously build incremental gains in both CTR and CVR.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold rounded-full px-10 py-7 text-xl shadow-lg shadow-brand-blue/20">
              <a href="https://calendar.app.google/iqBESxmECENgqPon9" target="_blank" rel="noopener noreferrer">
                BOOK A CALL
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-150" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-white/70 mb-4 font-heading font-bold uppercase tracking-widest text-sm">
                <Trophy size={16} />
                A+ Content Refresh
              </div>
              <div className="font-display text-7xl md:text-8xl leading-none mb-2">1,320%</div>
              <p className="font-sans text-sm text-white/80 leading-snug">
                Max order increase from a top-performing 2026 test
              </p>
              <div className="mt-6 flex items-center gap-1 text-secondary font-bold">
                <ArrowUpRight size={20} />
                <span>TOP TIER PERFORMANCE</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-accent to-accent/80 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-accent/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-150" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-white/70 mb-4 font-heading font-bold uppercase tracking-widest text-sm">
                <Trophy size={16} />
                Complete Brand Refresh
              </div>
              <div className="font-display text-7xl md:text-8xl leading-none mb-2">2,980%</div>
              <p className="font-sans text-sm text-white/80 leading-snug">
                Max sales increase achieved by a 2026 full-funnel brand refresh
              </p>
              <div className="mt-6 flex items-center gap-1 text-white font-bold">
                <ArrowUpRight size={20} />
                <span>RECORD GROWTH</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
