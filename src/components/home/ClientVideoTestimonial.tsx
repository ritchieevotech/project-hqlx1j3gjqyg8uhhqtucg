import * as React from "react";
import { motion } from "framer-motion";

export const ClientVideoTestimonial = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-12 tracking-tight"
        >
          What Clients Are Saying
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="group relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video w-full ring-1 ring-border/50"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            controls={isPlaying}
            poster="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1600"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src="https://videos.pexels.com/video-files/3184323/3184323-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 backdrop-blur-[2px]"
              aria-label="Play client testimonial video"
            >
              <div className="relative">
                {/* Decorative pulse effect */}
                <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transform transition-transform duration-300 hover:scale-110 active:scale-95">
                  <span className="ml-1.5 inline-block h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-primary" />
                </span>
              </div>
            </button>
          )}

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
