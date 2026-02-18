import { motion } from "framer-motion";

const brandLogos = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/d0d8989e-3be8-4587-83ce-cf028ffa2017.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/d0d8989e-3be8-4587-83ce-cf028ffa2017.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/d0d8989e-3be8-4587-83ce-cf028ffa2017.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/d0d8989e-3be8-4587-83ce-cf028ffa2017.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/d0d8989e-3be8-4587-83ce-cf028ffa2017.png",
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
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap items-center"
          >
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 md:px-16"
              >
                <img 
                  src={logo} 
                  alt="Brand Partner" 
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
            <p className="font-sans font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">
              Industry Certified Partners
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-12"
          >
            <div className="w-full max-w-xl md:max-w-lg px-4">
              <img 
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/546b26f5-defb-4c12-9ccf-ca68b7d80b14.png" 
                alt="PickFu, Helium 10, Data Dive, Intellivy Certified" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
