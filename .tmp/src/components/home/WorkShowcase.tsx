import * as React from "react";
import { motion } from "framer-motion";

const showcaseImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/c78b3b42-58f8-415c-afc1-1c84b1c0f033.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6bfb001c-8707-4748-abd2-30dc8eeaa9c4.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6ce65393-b8e6-49dc-b770-8e185898535f.png",
];

// Combine images multiple times for a seamless loop
const marqueeImages = [...showcaseImages, ...showcaseImages, ...showcaseImages, ...showcaseImages];

export const WorkShowcase = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
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

      <div className="relative -rotate-3 scale-110 py-12">
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
                className="w-[400px] h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
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
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground font-sans uppercase tracking-widest text-sm opacity-60">
          Scroll-stopping visual assets for category leaders
        </p>
      </div>
    </section>
  );
};
