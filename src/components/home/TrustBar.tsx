import { motion } from "framer-motion";

const brandLogos = [
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771408943113-pasted-image-1771408853393.png",
    alt: "Emeril Lagasse logo"
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771408943114-pasted-image-1771408859909.png",
    alt: "Black+Decker logo"
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771408943114-pasted-image-1771408869336.png",
    alt: "Vega logo"
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771408943114-pasted-image-1771408875728.png",
    alt: "Remington logo"
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771408943114-pasted-image-1771408906562.png",
    alt: "Copper Chef logo"
  }
];

const certificationLogos = [
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771414704995-pasted-image-1771414683868.png",
    alt: "Helium 10 trusted partner badge",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771414704995-pasted-image-1771414693503.png",
    alt: "Data Dive Tools partner badge",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771948609492-103013.534a18306e84ca89012663e6183d8934.png",
    alt: "ProductPinion partner badge",
  },
];

export const TrustBar = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight"
          >
            Join <span className="squiggly-underline">Hundreds</span> of Happy Brands
          </motion.h2>
        </div>

        {/* Brand Logos Marquee */}
        <div className="mb-24 py-12 border-y border-gray-50 overflow-hidden relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap items-center"
          >
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 md:px-16"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-14 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="pt-20 border-t border-gray-100 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-6"
          >
            <p className="font-sans font-bold text-gray-400 uppercase tracking-[0.2em] text-[20px] whitespace-nowrap">
              Certified By
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-12"
          >
            <div className="w-full max-w-xl md:max-w-2xl px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
                {certificationLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-26 md:h-30 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
