import { Header } from "@/components/layout/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Target, TrendingUp, Cog, CheckCircle2, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SiteFooter } from "@/components/layout/Footer";

const About = () => {
  const team = [
    {
      name: "Robert Ferreira",
      role: "Founder",
      specialty: "Growth-focused founder building scalable eCommerce systems that drive measurable marketplace performance.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772504598086-7Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-left"
    },
    {
      name: "Lee Loree",
      role: "Founder",
      specialty: "Operator-minded founder turning strategy into clean, repeatable execution for brands and agencies.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772504684642-5Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-center"
    },
    {
      name: "Henrik Anderson",
      role: "Director of Product",
      specialty: "Amazon operator focused on ranking, conversion, and compliance through disciplined catalog execution.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772504785667-9Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-right"
    },
    {
      name: "Blake Gale",
      role: "Chief Relationship Officer",
      specialty: "Performance marketing operator aligning creative, messaging, and acquisition to improve CAC, CVR, and LTV.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772504889087-6Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-left"
    },
    {
      name: "Trevar Gale",
      role: "Account Executive",
      specialty: "Building, optimizing, and scaling brands with executive strategy and full-funnel account expertise.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772507188915-Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-center"
    },
    {
      name: "Lauren Gentile",
      role: "Chief Operations Officer",
      specialty: "Operations operator ensuring fast, organized delivery with rigorous QA and on-time handoff.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772510112195-4Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-center"
    },
    {
      name: "Kristy Pinand",
      role: "Creative Director",
      specialty: "Creative operator building conversion-first Amazon visuals that look premium and sell with clarity.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772508736894-8Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-right"
    },
    {
      name: "Jeff Scolnick",
      role: "Chief Go-To-Market Officer",
      specialty: "Go-to-market operator refining positioning, packaging, and sales systems that convert interest into revenue.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771963230591-Gemini-Generated-Image-v5r2a4v5r2a4v5r2.png",
      position: "object-center"
    },
    {
      name: "Ata Haee",
      role: "VP Finance & Revenue Operations",
      specialty: "Own everything operational as it relates to revenue and finance including strategy and analysis.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772503965096-2Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-center"
    },
    {
      name: "Justin Carbaugh",
      role: "CFO",
      specialty: "Overseeing financial strategy, capital allocation, and operational performance across the company’s eCommerce software and services portfolio.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772504208735-3Gemini-Generated-Image-vgfvkhvgfvkhvgfv.png",
      position: "object-center"
    }
  ];

  const values = [
    {
      title: "Make decisions with clarity.",
      icon: <Compass className="w-6 h-6 text-secondary" />
    },
    {
      title: "Execute with precision.",
      icon: <Target className="w-6 h-6 text-accent" />
    },
    {
      title: "Move with intention.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Build systems that scale.",
      icon: <Cog className="w-6 h-6 text-secondary" />
    }
  ];

  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Brands Scaled", value: "200+" },
    { label: "Revenue Generated", value: "$500M+" }
  ];

  const [isOverviewVideoPlaying, setIsOverviewVideoPlaying] = useState(false);
  const [isAnniversaryVideoPlaying, setIsAnniversaryVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Header />
      
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative mb-24 overflow-hidden bg-primary text-white">
          <div className="mx-auto px-6 py-16 md:py-32 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.25em] text-white/70 mb-6">
                ABOUT ENGIN8.IO
              </p>
              
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Infinity className="h-8 w-8 text-white" />
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight mb-6">
                The Engine Behind Ecommerce Growth
              </h1>

              <div className="font-sans text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto space-y-4">
                <p>
                  Engin8 supports brands and agencies across Amazon, Walmart, TikTok, and beyond with a model built for real marketplace performance.
                </p>
                <p className="italic opacity-90">
                  The eight represents continuous motion: capabilities reinforcing each other over time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8 tracking-tight">
                  Our Role for Agencies & Brands
                </h2>
                <div className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    We saw a consistent problem in the marketplace: agencies charging premium retainers and brands investing heavily in ads, yet listings were still underperforming. Not because the product lacked potential, but because the page wasn’t engineered to convert.
                  </p>
                  <p>
                    Engin8.io provides the scalable back-office execution that agencies need and the performance-first creative infrastructure that brands want—without the need for internal expansion.
                  </p>
                  <p>
                    Our focus is narrow but deep: A+ content architecture, structured split testing, and mobile-first storefronts that actually move the needle on your P&L.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-border/50"
              >
                <h3 className="font-heading text-xl md:text-2xl text-primary mb-6 font-bold uppercase tracking-wide">
                  What We Care About
                </h3>
                <ul className="space-y-4">
                  {[
                    "Measurable performance lifts",
                    "White-label operational excellence",
                    "Psychology-driven design",
                    "Mobile-first optimization",
                    "Rapid execution & scalability"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-base text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.25em] text-secondary mb-4">
                OUR HISTORY
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8 tracking-tight">
                Built on Proven Infrastructure
              </h2>
              <div className="space-y-6 font-sans text-lg md:text-xl text-foreground/80 leading-relaxed">
                <p>
                  Engin8 was built by founders with 15+ years operating at the highest level of ecommerce—not as consultants, but as builders. Lee Loree and Robert Ferreira co-founded Seller Investigators and grew it into a global operation with a 300+ person team abroad before the business was acquired by Carbon6.
                </p>
                <p>
                  That same team, the same facility, and the same proven operating systems are the engine behind Engin8 today. When you work with us, you’re backed by infrastructure that’s already been tested, scaled, and validated at an enterprise level.
                </p>
              </div>
              
              {/* Subtle decorative element */}
              <div className="mt-12 flex justify-center">
                <div className="h-1.5 w-24 bg-secondary/30 rounded-full" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50/70 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4 tracking-tight">What We Believe</h2>
              <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Four principles that guide how we think, build, and operate for our partners.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-8 rounded-[1.75rem] border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-primary font-bold leading-tight">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations Floor Section */}
        <section className="py-20 px-6 bg-slate-50/60 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center md:text-left"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-6 tracking-tight">
                Inside the Engin8 Operations Floor
              </h2>
              <div className="max-w-3xl font-sans text-base md:text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Our performance isn't magic—it's engineering. We operate with a dedicated analyst floor where every brand is managed by specialized pods focused on rigorous split testing and daily optimizations.
                </p>
                <p>
                  From high-intensity strategy huddles to deep-dive data architecture, our operations are built to maintain the continuous motion that the "8" in our name represents.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-6 md:gap-8 items-stretch">
              {/* Left Column: Large Hero Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771971600637-Screenshot-2026-02-25-at-5.56.48-AM.png"
                  alt="Engin8 operations floor with analysts working across pods"
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Right Column: Staggered Stack */}
              <div className="flex flex-col gap-6 md:gap-0 justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative z-10 md:translate-x-3 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771971600637-Screenshot-2026-02-25-at-5.56.32-AM.png"
                    alt="Engin8 analyst focused on marketplace data at their station"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative z-20 md:-mt-10 md:-translate-x-4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771971600637-Screenshot-2026-02-25-at-5.32.12-AM.png"
                    alt="Engin8 strategy team reviewing test results together"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Overview Section */}
        <section className="py-16 px-6 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center md:text-left"
              >
                <p className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.25em] text-secondary mb-4">
                  VIDEO OVERVIEW
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-8 tracking-tight leading-[1.1]">
                  Inside Engin8 in <span className="text-secondary">3 Minutes</span>
                </h2>
                <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  A quick walkthrough of how our team, testing infrastructure, and creative process work together to drive marketplace performance.
                </p>
                
                {/* Decorative element */}
                <div className="mt-10 flex justify-center md:justify-start">
                  <div className="h-1.5 w-24 bg-secondary/30 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative w-full max-w-[320px] group">
                  {/* Decorative background blob */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white bg-black ring-1 ring-border/50">
                    <AspectRatio ratio={9 / 16}>
                      {!isOverviewVideoPlaying ? (
                        <button 
                          type="button"
                          onClick={() => setIsOverviewVideoPlaying(true)}
                          className="relative block w-full h-full group cursor-pointer"
                        >
                          <img 
                            src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772469846765-Screenshot-2026-03-03-at-12.39.13-AM.png" 
                            alt="Engin8 operations floor with team members at their workstations" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                              <span className="ml-1 inline-block border-l-[14px] border-l-primary border-y-[10px] border-y-transparent md:border-l-[18px] md:border-y-[12px]" />
                            </div>
                          </div>
                        </button>
                      ) : (
                        <iframe
                          src="https://www.youtube.com/embed/od4ezeASkQc"
                          className="w-full h-full border-none"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          title="Inside Engin8 in 3 Minutes"
                        />
                      )}
                    </AspectRatio>
                  </div>

                  {/* Floating badge decoration */}
                  <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-white rotate-12 hidden md:flex">
                    <span className="font-heading text-primary font-bold text-[10px] tracking-widest text-center leading-tight uppercase">WATCH<br/>NOW</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Anniversary Video Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-secondary/15 via-accent/10 to-secondary/15 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.25em] text-secondary mb-4">
                  10 YEARS IN MOTION
                </p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight leading-[1.1]">
                  A Decade of Building <span className="text-secondary">Marketplace Wins</span>
                </h2>
                <div className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                  <p>
                    From our earliest operations to our current global infrastructure, the last 10 years have been defined by a single goal: engineering growth for brands that refuse to settle.
                  </p>
                  <p>
                    This highlight reel captures a decade of team energy, operational breakthroughs, and the continuous motion that keeps our partners ahead of the curve.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "10 Years", value: "Legacy" },
                    { label: "300+", value: "Team Members" },
                    { label: "$500M+", value: "Impact" }
                  ].map((stat, i) => (
                    <div 
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs md:text-sm font-sans text-primary shadow-sm border border-secondary/10"
                    >
                      <span className="font-bold text-secondary">{stat.label}</span>
                      <span className="opacity-70">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative w-full max-w-[640px] group">
                  {/* Decorative background blob */}
                  <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/25 via-accent/20 to-primary/20 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-black ring-1 ring-border/40">
                    <AspectRatio ratio={16 / 9}>
                      {!isAnniversaryVideoPlaying ? (
                        <button 
                          type="button"
                          onClick={() => setIsAnniversaryVideoPlaying(true)}
                          className="relative block w-full h-full group cursor-pointer"
                        >
                          <img 
                            src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772469523989-Screenshot-2026-03-03-at-12.34.54-AM.png" 
                            alt="Engin8 team celebrating together at a year-end event" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                              <span className="ml-1 inline-block border-l-[14px] border-l-primary border-y-[10px] border-y-transparent md:border-l-[18px] md:border-y-[12px]" />
                            </div>
                          </div>
                        </button>
                      ) : (
                        <iframe
                          src="https://www.youtube.com/embed/Fl1c5cxgBJ4?si=qBCb9LrAEvtCqeya"
                          className="w-full h-full border-none"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          title="A Decade of Building Marketplace Wins"
                        />
                      )}
                    </AspectRatio>
                  </div>

                  {/* Anniversary floating badge */}
                  <div className="absolute -top-6 -right-6 h-24 w-24 bg-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-white -rotate-12 hidden md:flex">
                    <div className="flex flex-col items-center">
                      <span className="font-heading text-primary font-black text-xl leading-none">10</span>
                      <span className="font-heading text-primary font-bold text-[8px] tracking-widest text-center leading-tight uppercase">YEARS<br/>TOGETHER</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-primary text-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl mb-4 tracking-tight">Meet the Team</h2>
              <p className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                A small, senior team focused on what actually moves your marketplace P&L.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white/5 rounded-[1.75rem] border border-white/10 overflow-hidden hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      className={`w-full h-full object-cover ${member.position} group-hover:scale-[1.03] transition-all duration-500`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                    <p className="font-sans text-sm text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="font-sans text-xs text-white/60 leading-relaxed italic border-t border-white/10 pt-3">
                      {member.specialty}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[2.5rem] p-12 text-center text-white"
            >
              <h2 className="font-heading text-3xl md:text-5xl mb-6 tracking-tight">Want Engin8 in your corner?</h2>
              <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto">
                Stop leaving profit on the table. Let's engineer your listings for maximum conversion.
              </p>
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-bold rounded-full px-12 py-7 text-xl shadow-lg shadow-black/10">
                <a 
                  href="https://calendar.app.google/iqBESxmECENgqPon9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK A CALL
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
