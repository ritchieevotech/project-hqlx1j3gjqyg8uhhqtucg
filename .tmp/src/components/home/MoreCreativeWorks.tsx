import * as React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop",
    alt: "Premium skincare bottle with elegant packaging design",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    alt: "Minimalist modern watch product photography",
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    alt: "High-end headphones lifestyle showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    alt: "Vibrant yellow sneakers studio shot",
  },
  {
    src: "https://images.unsplash.com/photo-1526170315836-3f8a40dd1e9a?q=80&w=800&auto=format&fit=crop",
    alt: "Retro camera with detailed texture focus",
  },
  {
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    alt: "Red athletic shoe dynamic angle",
  },
  {
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop",
    alt: "Product packaging display for beauty brand",
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    alt: "Gaming controller with professional lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    alt: "Nike running shoe hero image layout",
  },
];

export const MoreCreativeWorks = () => {
  return (
    <section className="py-24 bg-background">
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
