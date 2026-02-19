import * as React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Storefronts = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Use requestAnimationFrame to ensure the video element is rendered and ready
    requestAnimationFrame(() => {
      videoRef.current?.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    });
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight"
        >
          Amazon Storefronts That <br className="hidden md:block" />
          <span className="squiggly-underline text-secondary"> Engage</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[1.2fr,1fr] items-center">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="font-heading text-3xl md:text-4xl text-primary mb-4 leading-tight">
              We build Storefronts using the ENGIN8 Framework — a structured approach designed for visibility, clarity, and conversion.
            </h3>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-xl">
              Elevate your storefront with:
            </p>
          </div>

          <div className="space-y-4 mt-2">
            {[
              { title: "E — Experience Architecture", desc: "Design a guided journey, not a product catalog. Clear sections, intentional flow, and mobile-first layout improve engagement and conversion." },
              { title: "N — Narrative Positioning", desc: "Use benefit-driven headlines and brand-specific imagery that clearly communicate who the product is for and what problem it solves." },
              { title: "G — Growth Signals", desc: "Integrate videos, keyword-aligned content, and structured messaging that strengthens search visibility and improves Rufus discoverability." },
              { title: "I — Intent-Based Content (AEO)", desc: "Answer real customer questions directly. Clear, scannable sections improve answer engine performance and AI surfacing." },
              { title: "N — Native Social Proof", desc: "Feature authentic reviews, UGC, and measurable outcomes to reinforce trust and buying confidence." },
              { title: "8 — Conversion Levers", desc: "Optimize every module for clarity, speed, and action — ensuring your storefront turns traffic into revenue." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-secondary text-2xl mt-0.5">⚡</span>
                <div>
                  <h4 className="font-heading text-xl text-primary font-bold">{item.title}</h4>
                  <p className="font-sans text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-xl italic border-l-4 border-secondary/30 pl-4 mt-2">
            A strategically structured, ENGIN8-powered storefront increases discoverability, strengthens AI visibility, and drives predictable growth.
          </p>
        </motion.div>

        {/* Right Column: Phone Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer Phone Frame */}
          <div className="relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] bg-slate-900 shadow-2xl p-3 border-[8px] border-slate-800">
            {/* Inner Phone Screen */}
            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-slate-100 shadow-inner">
              {!isPlaying ? (
                <div className="relative h-full w-full cursor-pointer group" onClick={handlePlay}>
                  {/* Poster Image */}
                  <img
                    src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/ad7914d1-06fa-415a-9afa-89620be5ea07.png"
                    alt="Amazon Storefront Preview"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Storefront UI Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                  
                  <div className="absolute top-8 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">E8</span>
                      </div>
                      <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">Organic Glow</span>
                    </div>
                    <div className="text-white/80">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="h-16 w-16 rounded-full bg-secondary text-white shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      aria-label="Play storefront video"
                    >
                      <Play fill="currentColor" size={28} className="ml-1" />
                    </button>
                  </div>

                  <div className="absolute bottom-8 left-6 right-6 text-white">
                    <p className="font-heading text-lg font-bold leading-tight uppercase">Discover the Collection</p>
                    <p className="text-[10px] opacity-80 mt-1 uppercase tracking-widest font-sans">Shop All Products</p>
                  </div>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  className="h-full w-full object-cover"
                  playsInline
                  muted
                  autoPlay
                  controls
                  onEnded={() => setIsPlaying(false)}
                />
              )}
            </div>

            {/* Hardware details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-slate-700 rounded-full" />
              <div className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
