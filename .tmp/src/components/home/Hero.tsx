import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-7xl md:text-9xl text-primary leading-[0.85] tracking-tight uppercase"
          >
            AMAZON CREATIVE <br />
            <span className="squiggly-underline">ENGINEERED FOR AI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 font-sans text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto"
          >
            If AI can’t read it, it won’t rank.
            Optimized for Rufus, COSMO, and conversion.
            <br />
            <span className="font-semibold text-primary">
              No retainers. No fluff. Just assets built for visibility, recommendations, and revenue.
            </span>
          </motion.p>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center mb-10 -mt-8 md:-mt-16">
          <div className="md:col-span-7 relative">
            {/* Organic Blob Background */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse" />
            <div className="absolute -z-20 top-[10%] left-[5%] w-[80%] h-[80%] bg-secondary rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img 
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772432318306-kristyv2.png" 
                alt="Kristy Pinand, Creative Director, smiling and pointing to the right on a clean white background"
                className="w-full h-auto object-contain object-left md:scale-75 origin-left"
              />
            </motion.div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight">
                Ready to Scale on the World’s #1 Marketplace?
              </h2>
              <p className="font-semibold md:text-2xl  text-primary">
                Unlock your brand’s full potential on Amazon with optimized listings, data-driven creative, and proven growth strategies.
              </p>
              
              
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold text-xl rounded-full px-10 py-8 shadow-lg shadow-brand-blue/20">
                  <a href="https://calendar.app.google/iqBESxmECENgqPon9" target="_blank" rel="noopener noreferrer">
                    Book A Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
