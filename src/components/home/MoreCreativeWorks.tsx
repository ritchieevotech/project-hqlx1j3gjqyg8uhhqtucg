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
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771858292993-Sour-Power-B0DLCGB65G-A-Content-Mock-Up.png",
    alt: "Sour Power candy belts Amazon A+ content with bold stripes and product lineup",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771858292993-Their-Story-Matters-B0F6PT5ZK5-A-Content-Mock-Up.png",
    alt: "TheirStory handcrafted wood urn Amazon A+ content highlighting memorial features",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771858292993-Vega-B01LXZS18X-Basic-A-Content-Mockup.png",
    alt: "Vega plant protein powder Amazon A+ content showing benefits and lifestyle imagery",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772050285797-images-5.png",
    alt: "DIA hydration electrolyte powder Amazon A+ content highlighting benefits and hydration",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772050731799-images-7.png",
    alt: "FRÉ 10% Vitamin C brightening serum Amazon A+ content showcasing clean vegan formula and visible radiance",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772143750950-Essex-Wares-Mock-Up-Option-02.png",
    alt: "Bible tabs A+ content showing colorful tabs, application steps, and benefits",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772143750952-Celsius-Mock-up.png",
    alt: "Celsius Galaxy Vibe energy drink A+ content with cosmic background and flavor callouts",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772143750952-Everest-Basic-A-Content-Mockup-V2.png",
    alt: "Everest outdoor apparel A+ content with campsite lifestyle scenes and gear benefits",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772143750952-BBDJ-Mock-Up.png",
    alt: "BuddyBar door jammer A+ content showing security use cases, features, and testimonials",
  },
  {
    src: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772143750952-Display2Go-B01290AIBO-A-Content-Mock-Up-1.png",
    alt: "Displays2Go office directory signs A+ content with product features and use cases",
  },
];

export const MoreCreativeWorks = () => {
  return (
    <section id="showcase" className="py-8 bg-background scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
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
