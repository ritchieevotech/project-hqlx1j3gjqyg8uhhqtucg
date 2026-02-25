import * as React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const storefronts = [
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771547977211-Untitled-design-13.png",
    brand: "Rick Young Outdoors",
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771547977211-Untitled-design-14.png",
    brand: "MSRF",
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771547977211-Untitled-design-15.png",
    brand: "Nature's Wonder",
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771973182149-images.png",
    brand: "Popfully",
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1772049254566-images-6.png",
    brand: "Top Pops",
  },
];

export const StorefrontGallery = () => {
  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 mb-10 flex items-baseline justify-between">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-sans tracking-[0.25em] uppercase text-muted-foreground"
        >
          Selected Storefront Designs
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block text-sm text-muted-foreground font-sans italic"
        >
          Swipe or click to explore
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {storefronts.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <div className="relative w-full aspect-[2/3] md:aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-white group">
                    <img
                      src={item.image}
                      alt={`${item.brand} Storefront`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="mt-4 text-base md:text-lg font-heading font-bold text-primary text-center uppercase tracking-widest">
                    {item.brand}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center md:block">
            <CarouselPrevious className="-left-2 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-white text-primary shadow-2xl border-none hover:bg-secondary hover:text-white transition-all duration-300" />
            <CarouselNext className="-right-2 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-white text-primary shadow-2xl border-none hover:bg-secondary hover:text-white transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
