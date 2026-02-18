import * as React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const showcaseImages = [
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/c78b3b42-58f8-415c-afc1-1c84b1c0f033.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6bfb001c-8707-4748-abd2-30dc8eeaa9c4.png",
  "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/6ce65393-b8e6-49dc-b770-8e185898535f.png",
];

const slides = [
  {
    image: showcaseImages[0],
    title: "Dynamic Product Presentation",
    subtitle: "High-impact visuals that grab attention instantly."
  },
  {
    image: showcaseImages[1],
    title: "Lifestyle Context",
    subtitle: "Showing your product in real-world scenarios."
  },
  {
    image: showcaseImages[2],
    title: "Infographic Clarity",
    subtitle: "Communicating key features at a single glance."
  },
];

export const WorkShowcase = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl text-primary tracking-tight leading-tight"
        >
          Amazon Product Images That <span className="squiggly-underline text-secondary">Sell</span>
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full relative group"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border border-border bg-muted"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl md:text-3xl font-bold font-heading mb-1 md:mb-2">{slide.title}</h3>
                      <p className="text-sm md:text-lg text-white/90 max-w-2xl">{slide.subtitle}</p>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center">
            <CarouselPrevious className="left-2 md:left-6 bg-white/90 hover:bg-white text-primary shadow-xl h-10 w-10 md:h-12 md:w-12 border-none transition-all z-20" />
            <CarouselNext className="right-2 md:right-6 bg-white/90 hover:bg-white text-primary shadow-xl h-10 w-10 md:h-12 md:w-12 border-none transition-all z-20" />
          </div>
        </Carousel>

        {/* Thumbnails row */}
        <div className="flex justify-center gap-3 mt-10 overflow-x-auto pb-4 px-2 scrollbar-hide no-scrollbar">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "relative flex-shrink-0 h-16 w-28 md:h-20 md:w-32 rounded-xl overflow-hidden transition-all duration-300 border-2 outline-none",
                current === index 
                  ? "border-secondary scale-105 shadow-xl ring-2 ring-secondary/20" 
                  : "border-transparent opacity-50 hover:opacity-100"
              )}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 font-sans italic opacity-70">
          Use the arrows or thumbnails to browse our creative work
        </p>
      </div>
    </section>
  );
};

