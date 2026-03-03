import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  Target, 
  Search, 
  BarChart4,
  Mail,
  Loader2,
  Check
} from "lucide-react";
import { sendEmail } from "@/integrations/core";

export const FrameworkImplementation = () => {
  const phases = [
    { title: "Phase 1: Assessment", bullets: ["Deep-dive audit of current creative", "Competitor gap analysis", "Buyer persona mapping"] },
    { title: "Phase 2: Creative Development", bullets: ["High-impact visual strategy", "Psychology-based copywriting", "AI-optimized image architecture"] },
    { title: "Phase 3: Testing & Launch", bullets: ["PickFu external A/B testing", "Amazon MYE (Manage Your Experiments) setup", "Full listing rollout"] },
    { title: "Phase 4: Optimization", bullets: ["Data analysis & performance tracking", "Continuous iteration loops", "Scaling to multi-product catalogs"] }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">Implementing the Framework</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A step-by-step roadmap to transforming your Amazon presence.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute top-8 left-0 w-full h-px bg-border hidden md:block -z-10 group-last:hidden" />
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">
                {idx + 1}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-4">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FrameworkResults = () => {
  return (
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">Expected Results</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Conservative", color: "border-slate-300", results: ["10-20% CVR Improvement", "15-25% Revenue Growth", "Visible Branding Lift"] },
            { title: "Most Common", color: "border-brand-blue bg-brand-blue/5", results: ["30-60% CVR Improvement", "40-80% Revenue Growth", "Significant Category Rank Jump"] },
            { title: "Optimistic", color: "border-secondary bg-secondary/5", results: ["100%+ CVR Improvement", "2x-3x Revenue Growth", "Category Dominance"] }
          ].map((item, idx) => (
            <Card key={idx} className={`p-8 rounded-[2rem] border-2 shadow-xl ${item.color}`}>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">{item.title}</h3>
              <ul className="space-y-4">
                {item.results.map((res, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {res}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          *Results vary based on category competition, product quality, and current optimization levels.
        </p>
      </div>
    </section>
  );
};

export const FrameworkMistakes = () => {
  const mistakes = [
    { title: "Mistake #1: Design for Desktop", fix: "Always optimize for mobile-first. 70%+ of Amazon traffic is mobile." },
    { title: "Mistake #2: Ignoring Negative Reviews", fix: "Address every common complaint directly in your image stack." },
    { title: "Mistake #3: Too Much Text", fix: "Show, don't tell. Use bold callouts and visual icons instead of paragraphs." },
    { title: "Mistake #4: Static Creative", fix: "Test and iterate. The best listing today won't be the best in 6 months." },
    { title: "Mistake #5: Focusing Only on Price", fix: "Build value and trust. High-quality creative allows for premium pricing." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">Common Mistakes to Avoid</h2>
        </div>

        <div className="space-y-4">
          {mistakes.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-border bg-slate-50 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="bg-red-50 p-3 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground font-semibold">Fix: <span className="text-brand-blue font-normal italic">{item.fix}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FrameworkServicesCta = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 blur-[150px] rounded-full -mr-64 -mt-64" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Engin8 Services: <br /><span className="text-secondary">How We Help</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Full Creative Audits",
                  "A+ Content Design",
                  "Listing Optimization",
                  "A/B Testing Management",
                  "Brand Storefronts",
                  "Category Expansion"
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{s}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-heading font-bold text-xl rounded-full px-10 py-8">
                <a href="https://calendar.app.google/iqBESxmECENgqPon9" target="_blank" rel="noopener noreferrer">
                  Book Your Free Listing Audit
                </a>
              </Button>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
              <h3 className="font-heading text-2xl font-bold mb-6">Your Next Steps</h3>
              <div className="space-y-6">
                {[
                  { title: "Free Audit", desc: "We review your current listing and identify gap opportunities." },
                  { title: "Strategy Call", desc: "A deep dive into your brand goals and category competitive landscape." },
                  { title: "Action Plan", desc: "A detailed roadmap for implementing the E.N.G.I.N.8 framework." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-bold mb-1">{step.title}</h4>
                      <p className="text-sm text-white/70">{step.desc}</p>
                    </div>
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

export const FrameworkNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await sendEmail({
        to: "success@engin8.io",
        from_name: "Engin8 Website",
        reply_to: email,
        subject: "New Framework newsletter sign-up",
        body_html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #2D3663;">New Newsletter Signup</h1>
            <p>A new visitor has signed up for the Engin8 Framework newsletter.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Email Address:</strong> ${email}</p>
              <p><strong>Source:</strong> Framework page newsletter block</p>
            </div>
            <p style="color: #666; font-size: 12px;">This is an automated notification from your website.</p>
          </div>
        `,
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-heading text-xs tracking-[0.25em] uppercase text-primary/80 font-bold mb-4 block">Newsletter</span>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 uppercase leading-tight">
                  Stay ahead of Amazon <br />
                  <span className="text-primary">creative trends</span>
                </h2>
                <p className="text-xl text-white/90 font-medium mb-8 max-w-md">
                  Get exclusive insights on listing optimization, A+ content strategies, and the E.N.G.I.N.8 framework updates delivered to your inbox.
                </p>
                
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Check className="w-5 h-5" />
                    <span className="text-sm">Weekly Strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Check className="w-5 h-5" />
                    <span className="text-sm">Case Studies</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-10 rounded-[2.5rem] border-none shadow-2xl bg-white/10 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-bold uppercase tracking-wider mb-3 opacity-80">
                      Your Email Address
                    </label>
                    <div className="relative group">
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-16 px-6 rounded-2xl focus:ring-primary focus:border-primary transition-all text-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Sign Up Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-200 font-medium text-center bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/20"
                      >
                        You're in! Check your inbox soon for updates.
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-200 font-medium text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                      >
                        Please enter a valid email address or try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
                
                <p className="mt-6 text-xs text-white/50 text-center">
                  We respect your privacy. No spam, ever. Unsubscribe anytime.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FrameworkFaq = () => {
  const faqs = [
    { q: "How long does it take to see results?", a: "Most brands see an immediate shift in CTR within 48-72 hours of updating the main image. Significant CVR and organic ranking improvements typically mature over 4-6 weeks as Amazon's algorithm re-indexes the new performance data." },
    { q: "Do I need Brand Registry?", a: "Yes, for the full framework (especially A+ Content and Storefronts). However, our image stack and title optimization strategies can be applied to any professional seller account." },
    { q: "Can I apply this framework myself?", a: "Absolutely. We share our framework because we believe in data-driven transparency. However, executing world-class design that balances brand integrity with Amazon's specific conversion requirements often requires specialist expertise." },
    { q: "What if my competition is already doing this?", a: "Amazon is a zero-sum game. If your competition is optimized, you MUST be better to survive. If they aren't, this framework is your unfair advantage to take their market share." },
    { q: "How often should I update my listings?", a: "We recommend a comprehensive review every 6 months. In fast-moving categories, we suggest monthly performance audits and iterative A/B testing." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">Framework FAQ</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-2xl mb-4 border-none shadow-sm">
              <AccordionTrigger className="text-left font-heading font-bold text-lg py-6 hover:no-underline text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
