import * as React from "react";
import { motion } from "framer-motion";

const aplusImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/c78b3b42-58f8-415c-afc1-1c84b1c0f033.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6bfb001c-8707-4748-abd2-30dc8eeaa9c4.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6ce65393-b8e6-49dc-b770-8e185898535f.png",
];

// Combine images multiple times for a seamless loop
const marqueeImages = [...aplusImages, ...aplusImages, ...aplusImages, ...aplusImages];

export const APlusShowcase = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight"
        >
          Amazon A+ Content That <br className="hidden md:block" />
          <span className="squiggly-underline text-secondary"> Converts</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative py-8">
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [0, -1400] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {marqueeImages.map((image, index) => (
                <div 
                  key={index} 
                  className="w-[220px] md:w-[260px] lg:w-[300px] h-[420px] md:h-[480px] lg:h-[520px] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-100"
                >
                  <img
                    src={image}
                    alt={`Amazon A+ creative panel ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center px-6">
        <p className="text-muted-foreground text-xs md:text-sm font-sans uppercase tracking-[0.2em] opacity-60">
          Always-on A+ visuals that educate and convert browsers into buyers
        </p>
      </div>
    </section>
  );
};
