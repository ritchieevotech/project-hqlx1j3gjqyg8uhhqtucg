import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Image as ImageIcon, FileText, Star, MousePointer2, TrendingUp } from "lucide-react";

export const FrameworkHero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-secondary text-secondary font-heading uppercase tracking-widest px-4 py-1">
              Creative Strategy
            </Badge>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary leading-none tracking-tight uppercase mb-8">
              The Engin8 <br />
              <span className="squiggly-underline text-secondary">Framework</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10">
              How brands increase Amazon sales & e-commerce revenue through strategic creative optimization.
            </p>
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold text-xl rounded-full px-10 py-8 shadow-lg shadow-brand-blue/20">
              <a href="https://calendar.app.google/iqBESxmECENgqPon9" target="_blank" rel="noopener noreferrer">
                Book A Call
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8 uppercase">
              How Brands Increase Amazon Sales & E‑Commerce Revenue
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              In the hyper-competitive Amazon marketplace, average creative is no longer enough. To win, you need a framework that combines data-driven marketing with world-class design.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-left">
              {[
                "Strategic conversion-first design",
                "Psychology-based buyer journeys",
                "AI-ready visual architecture",
                "Continuous performance optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-primary font-bold text-lg p-6 rounded-3xl bg-slate-50 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-secondary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkIntro = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">
            Understanding Amazon Creative Optimization
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-primary font-medium leading-relaxed">
              Creative optimization is the strategic process of refining every visual and textual element of your Amazon listing to maximize conversion rates and click-through rates.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It's not just about "looking pretty." It's about understanding consumer psychology, addressing hidden objections, and building a narrative that leads a shopper from curiosity to checkout in seconds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When done correctly, this framework doesn't just improve aesthetics—it fundamentally shifts the economics of your brand by lowering CAC and increasing lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-secondary flex items-center gap-6"
            >
              <div className="bg-secondary/10 p-4 rounded-full">
                <TrendingUp className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-4xl font-display text-primary uppercase">60% - 300%</h3>
                <p className="text-muted-foreground font-sans">Potential Revenue Increase</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-primary p-8 rounded-3xl shadow-xl border-l-8 border-brand-blue flex items-center gap-6"
            >
              <div className="bg-brand-blue/20 p-4 rounded-full">
                <MousePointer2 className="w-10 h-10 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-4xl font-display text-white uppercase">3X CTR & CVR</h3>
                <p className="text-white/70 font-sans">Through Strategic Optimization</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkSixComponents = () => {
  const components = [
    { title: "Title", desc: "Keyword-rich yet readable, framing the product's primary value immediately.", icon: FileText },
    { title: "Main Image", desc: "The 'click magnet' that must stand out against 20+ competitors on a white background.", icon: ImageIcon },
    { title: "Image Stack", desc: "A 6-7 image sequence designed to answer questions and overcome objections.", icon: ImageIcon },
    { title: "Premium A+", desc: "Deep-dive brand storytelling that builds authority and cross-sells your catalog.", icon: Star },
    { title: "Bullets/Description", desc: "AI-optimized copy that speaks to both humans and Amazon's indexing engine.", icon: FileText },
    { title: "Offer & Reviews", desc: "The social proof and value proposition that seals the final decision.", icon: Star },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">
            Six Components of a Winning Listing
          </h2>
          <p className="text-lg text-muted-foreground mx-auto italic">
            "Most sellers optimize 1–2 of these. The top 1% optimize all six as a unified conversion system."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border hover:border-brand-blue/30 hover:shadow-2xl transition-all group bg-slate-50/50"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
