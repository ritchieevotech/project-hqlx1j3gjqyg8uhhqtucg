import * as React from "react";
import { motion } from "framer-motion";

const aplusImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771429350368-Untitled-design-4.png", // Popfully A+ panel
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771429350369-Untitled-design-5.png", // Joejis A+ panel
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771429350369-Untitled-design-6.png", // Owl & Ox A+ panel
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771972234446-Bamboo-Creatives-A-Premium-Mockup-v3.jpg", // Bamboo cutting boards A+
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771972234446-Display2Go-B01290AIBO-A-Content-Mock-Up.png", // Office signage A+
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772048385977-images-5.png", // DIA hydration A+ panel (updated)
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772142651383-images-15.png", // Blank Labels A+ page
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772142651384-images-16.png", // CTP A+ page
];

// Combine images multiple times for a seamless loop
const marqueeImages = [...aplusImages, ...aplusImages, ...aplusImages, ...aplusImages];

export const APlusShowcase = () => {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight"
        >
          Amazon A+ Content That <span className="squiggly-underline text-secondary">Converts</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-0">
        <div className="relative py-8">
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex items-center gap-6 md:gap-8 whitespace-nowrap"
              animate={{ x: [0, -1400] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {marqueeImages.map((image, index) => {
                const isTall = index % 2 === 1;
                return (
                  <div 
                    key={index} 
                    className={`${
                      isTall 
                        ? "w-[210px] md:w-[230px] lg:w-[250px]" 
                        : "w-[190px] md:w-[205px] lg:w-[220px]"
                    } flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-border bg-slate-100 h-fit`}
                  >
                    <img
                      src={image}
                      alt={`Amazon A+ creative panel ${index + 1}`}
                      className={`${
                        isTall 
                          ? "max-h-[440px] md:max-h-[500px]" 
                          : "max-h-[320px] md:max-h-[360px]"
                      } w-full h-auto block object-contain transition-transform duration-500 hover:scale-105`}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center px-6">
        <p className="text-muted-foreground text-xs md:text-sm font-sans uppercase tracking-[0.2em] opacity-60">
          Always-on A+ visuals that educate and convert browsers into buyers
        </p>
      </div>
    </section>
  );
};
