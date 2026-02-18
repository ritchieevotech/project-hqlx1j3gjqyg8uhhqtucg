import * as React from "react";
import { motion } from "framer-motion";

const optimizations = [
  {
    emoji: "✨",
    title: "A/B testing main images",
    description: "to improve click through rate",
  },
  {
    emoji: "🚀",
    title: "SEO keyword research",
    description: "to ensure your products are found by shoppers",
  },
  {
    emoji: "🎯",
    title: "Persuasive sales copy",
    description: "that speaks directly to your ideal customer",
  },
  {
    emoji: "📈",
    title: "Product image stack testing",
    description: "to boost conversion rates by up to 30%",
  },
  {
    emoji: "🎨",
    title: "Custom A+ Content",
    description: "that showcases your brand story and product features",
  },
  {
    emoji: "🛡️",
    title: "Custom storefronts",
    description: "that nurture, build trust & convert visitors into fans",
  },
];

export const DailyOptimizations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8 leading-tight">
            Here are some of the specific Amazon optimizations we do daily:
          </h2>
          
          <div className="space-y-6 font-sans text-base md:text-lg text-foreground">
            {optimizations.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-xl mt-1 leading-none">{item.emoji}</span>
                <p>
                  <span className="font-bold text-primary">{item.title}</span>{" "}
                  <span className="text-muted-foreground">{item.description}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Component */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto md:ml-auto rounded-[2.5rem] bg-gradient-to-br from-secondary/15 via-white to-accent/15 p-6 shadow-2xl border border-border/50">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40">
                <img 
                  src="https://images.pexels.com/photos/4113891/pexels-photo-4113891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Colorful packaged snacks" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40">
                <img 
                  src="https://images.pexels.com/photos/3731474/pexels-photo-3731474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Health product packaging" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40">
                <img 
                  src="https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Modern consumer goods" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Floating Pills */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-4 -right-4 md:right-0 px-5 py-3 rounded-full bg-white shadow-xl border border-secondary/20 text-sm font-sans font-medium text-primary flex items-center gap-2 z-10"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-xs">📈</span>
              <span>Increased click‑thru rate</span>
            </motion.div>

            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:left-0 px-5 py-3 rounded-full bg-white shadow-xl border border-accent/20 text-sm font-sans font-medium text-primary flex items-center gap-2 z-10"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-xs">🧪</span>
              <span>Split‑tested main images</span>
            </motion.div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-secondary/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
