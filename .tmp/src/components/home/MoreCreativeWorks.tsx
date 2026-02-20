import * as React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771543017967-Untitled-design-13.png",
    alt: "Rick Young Outdoors Amazon Storefront design with hero, product, and story sections",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771543017967-Untitled-design-14.png",
    alt: "MSRF gourmet gifts Amazon Storefront layout featuring spices, hot sauces, and cocktail mixers",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771543017967-Untitled-design-15.png",
    alt: "Nature's Wonder vitamins and supplements Amazon Storefront with wellness-focused visuals",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771425647958-4.png",
    alt: "Bahamii high-energy product visual showing energy bites with dynamic shadows and fruit",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771429350368-Untitled-design-4.png",
    alt: "Popfully Amazon A+ content panel showcasing popcorn flavors with vibrant lifestyle imagery",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771429350369-Untitled-design-6.png",
    alt: "Owl & Ox premium baby product A+ panel featuring clean typography and soft focus visuals",
  },
];

export const MoreCreativeWorks = () => {
  return (
    <section id="showcase" className="py-24 bg-background scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-heading text-xs md:text-sm tracking-[0.24em] text-primary/60 uppercase mb-3">
            More Creative Work
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight">
            A deeper look at high-converting visuals
          </h2>
          <p className="mt-3 font-sans text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            A sample of gallery, hero, and storefront treatments we design to make your products stand out on Amazon.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-border/60 flex flex-col break-inside-avoid"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
