import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Quote } from "lucide-react";

const slides = [
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771443480223-Untitled-design-10.png",
    thumbs: [
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771443480223-Untitled-design-11.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771443480223-Untitled-design-12.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771443480223-Untitled-design-7.png",
    ],
    quote: "Engin8 didn’t just give us a new visual identity — they gave us a new level of confidence. The process was fast, collaborative, and honestly a lot of fun.",
    author: "S. J.",
    role: "Diet & Sports Nutrition",
    statLabel: "+160%",
    statTagline: "Increased sales within 30 days",
    avatarColor: "bg-blue-500"
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771863819749-Untitled-design-20.png",
    thumbs: [
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771863819749-Untitled-design-17.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771863819749-Untitled-design-18.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771863819749-Untitled-design-19.png",
    ],
    quote: "We saw an immediate jump in CTR. Customers finally 'get' the value of our premium product through these images.",
    author: "M. T.",
    role: "Packaged Meals",
    statLabel: "+85%",
    statTagline: "Higher click-through rate",
    avatarColor: "bg-orange-500"
  },
  {
    image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771541338640-Bangalicious-Scarlet-Kiss-Premium-A-Content-Module-02A.png",
    thumbs: [
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771541338642-Bangalicious-Scarlet-Kiss-Premium-A-Content-Module-02B.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771541338642-Bangalicious-Scarlet-Kiss-Premium-A-Content-Module-02C.png",
      "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5f6c1670-6f8a-4941-aa9d-ae316b4e8606/hqlx1j3gjqyg8uhhqtucg/1771541338642-Bangalicious-Scarlet-Kiss-Premium-A-Content-Module-02D.png",
    ],
    quote: "Professionalism at its peak. The team understood our brand voice and translated it perfectly into visuals.",
    author: "E. R.",
    role: "Beauty & Personal Care",
    statLabel: "4.9/5",
    statTagline: "Average customer rating",
    avatarColor: "bg-emerald-500"
  }
];

export const CreativeWorks = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-8 bg-background overflow-hidden scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-tight"
        >          
          Product Images That <span className="squiggly-underline text-secondary">Drive</span> Amazon Sales
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full group"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white rounded-[2.5rem] shadow-2xl border border-border overflow-hidden p-4 md:p-8 lg:p-10 mx-1"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.6fr,1.1fr] items-stretch">
                    {/* Visual Side */}
                    <div className="flex flex-col gap-4">
                      <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-inner bg-slate-100">
                        <img
                          src={slide.image}
                          alt="Main creative work"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 hidden md:grid">
                        {slide.thumbs.map((thumb, idx) => (
                          <div key={idx} className="aspect-video rounded-2xl overflow-hidden border-2 border-slate-100">
                            <img src={thumb} alt={`Work thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="bg-slate-50/80 rounded-[2rem] p-6 md:p-10 flex flex-col justify-between border border-slate-100/50">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className={cn("w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl shadow-lg", slide.avatarColor)}>
                            {slide.author[0]}
                          </div>
                          <div className="relative">
                            <Quote className="absolute -left-2 -top-2 w-8 h-8 text-secondary/20 fill-secondary/10" />
                            <p className="text-xl md:text-2xl font-sans text-primary leading-relaxed italic relative z-10 pt-2">
                              "{slide.quote}"
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="font-heading text-xl text-primary">{slide.author}</p>
                          <p className="text-muted-foreground text-sm uppercase tracking-wider">{slide.role}</p>
                        </div>
                      </div>

                      <div className="mt-12 flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-white shadow-xl border-4 border-secondary/20 flex flex-col items-center justify-center flex-shrink-0 animate-pulse-slow">
                          <span className="font-heading text-2xl text-secondary">{slide.statLabel}</span>
                        </div>
                        <div className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                          {slide.statTagline}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 h-14 w-14 bg-white hover:bg-slate-50 text-primary border-none shadow-2xl z-30" />
          <CarouselNext className="hidden md:flex -right-6 lg:-right-12 h-14 w-14 bg-white hover:bg-slate-50 text-primary border-none shadow-2xl z-30" />
        </Carousel>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 overflow-x-auto py-4 px-4 no-scrollbar max-w-full">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "relative flex-shrink-0 w-24 md:w-32 aspect-video rounded-xl overflow-hidden transition-all duration-300 border-4 outline-none",
                  current === index 
                    ? "border-secondary scale-110 shadow-xl ring-4 ring-secondary/10" 
                    : "border-transparent opacity-40 hover:opacity-80"
                )}
              >
                <img src={slide.image} alt={`Nav thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                <div className={cn(
                  "absolute inset-0 transition-opacity",
                  current === index ? "bg-transparent" : "bg-primary/20"
                )} />
              </button>
            ))}
          </div>
          <p className="text-muted-foreground text-xs font-sans uppercase tracking-[0.2em] opacity-60">
            Use the arrows or thumbnails to browse our creative work
          </p>
        </div>
      </div>
    </section>
  );
};
