import * as React from "react";
import { motion } from "framer-motion";

const showcaseImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647958-4.png", // Bahamii creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-5.png", // Redbubble creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-6.png", // Owl & Ox creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-7.png", // Displays2Go creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-8.png", // Joejis creative
];

// Combine images multiple times for a seamless loop
const marqueeImages = [...showcaseImages, ...showcaseImages, ...showcaseImages, ...showcaseImages];

export const WorkShowcase = () => {
  return (
    <section id="showcase" className="py-24 bg-white overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-6xl md:text-8xl text-primary tracking-tighter uppercase leading-none"
        >
          THE ENGINE <span className="text-secondary italic">IN ACTION</span>
        </motion.h2>
      </div>

      <div className="relative -rotate-3 scale-110 py-24">
        <div className="flex space-x-8 overflow-hidden">
          <motion.div 
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: [0, -1296] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {marqueeImages.map((image, index) => (
              <div 
                key={index} 
                className="w-[400px] h-[700px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={image}
                  alt={`Showcase item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-12 mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] overflow-hidden border border-border bg-slate-50 shadow-xl shadow-slate-200/80 p-4 md:p-6"
        >
          <div className="bg-white rounded-[1.5rem] overflow-hidden">
            <img
              src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772045010659-Screenshot-2026-02-26-at-2.43.08-AM.png"
              alt="Sour Power brand A+ story, benefits, and flavor comparison graphic showing the original since 1985"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};
