import * as React from "react";
import { motion } from "framer-motion";

const showcaseImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647958-4.png", // Bahamii creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-5.png", // Redbubble creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-6.png", // Owl & Ox creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-7.png", // Displays2Go creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647960-8.png", // Joejis creative
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772141649111-Display2Go-B01290AIBO-A-Content-Mock-Up-1.png", // New Displays2Go
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772141649113-Celsius-Mock-up.png", // New Celsius
];

// Combine images multiple times for a seamless loop
const marqueeImages = [...showcaseImages, ...showcaseImages, ...showcaseImages, ...showcaseImages];

export const WorkShowcase = () => {
  return (
    <section id="showcase" className="pb-16 bg-white overflow-hidden scroll-mt-28 -mt-6 md:-mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
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

      <div className="relative -rotate-3 scale-110 pt-14 pb-24">
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

    </section>
  );
};
