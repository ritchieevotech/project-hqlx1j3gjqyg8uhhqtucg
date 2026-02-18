import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-7xl md:text-9xl text-primary leading-[0.85] tracking-tight uppercase"
          >
            THE ENGINE THAT POWERS<br />
            <span className="squiggly-underline">AGENCY SUCCESS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 font-sans text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
          >
            Your white-label operations powerhouse.<br />
            <span className="font-semibold text-primary">(No overhead, just scale.)</span>
          </motion.p>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-12 gap-12 items-center mt-20">
          <div className="md:col-span-7 relative">
            {/* Organic Blob Background */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse" />
            <div className="absolute -z-20 top-[10%] left-[5%] w-[80%] h-[80%] bg-secondary rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/ad7914d1-06fa-415a-9afa-89620be5ea07.png" 
                alt="Engin8 Team working together"
                className="w-full h-auto object-cover"
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
                Want to scale your agency without the hiring headache?
              </h2>
              <p className="mt-4 font-sans text-lg text-foreground/80 leading-relaxed">
                We handle the heavy lifting of operations, fulfillment, and technical execution so you can focus on winning more business. High-quality output, predictable costs, and infinite scalability.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-heading font-bold text-xl rounded-full px-10 py-8 shadow-lg shadow-brand-blue/20">
                  GET A QUOTE
                </Button>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary/40 flex items-center justify-center text-[10px] font-bold text-primary overflow-hidden">
                        <Users size={14} />
                      </div>
                    ))}
                  </div>
                  <span className="font-heading font-bold text-primary text-sm tracking-tight">300+ Expert Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
