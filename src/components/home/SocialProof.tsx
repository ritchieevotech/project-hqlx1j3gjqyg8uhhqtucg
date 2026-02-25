import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, Share2, Send } from "lucide-react";

const linkedinTestimonials = [
  {
    name: "S. J.",
    role: "Beauty & Personal Care Brand",
    avatar: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/9cd917c9-d4cc-499d-a0de-72f147eaa629.png",
    text: "Their team are among the most gifted... true experts in their field. Engin8 didn't just build a tool; they built a revenue engine.",
    timestamp: "2d",
    connections: "1st"
  },
  {
    name: "M. T.",
    role: "Skincare & Cosmetics Brand",
    avatar: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-hqlx1j3gjqyg8uhhqtucg/8fc11f93-cfd9-40d1-9ce3-e559946e3c9f.png",
    text: "Working with Engin8 was a masterclass in efficiency. They transformed our messy workflow into a streamlined machine in record time.",
    timestamp: "1w",
    connections: "2nd"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Part 1: LinkedIn Style Testimonials */}
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-5xl text-white uppercase tracking-tight"
            >
              Industry Praise
            </motion.h3>
            
            <div className="space-y-6">
              {linkedinTestimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-xl max-w-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-gray-900">{t.name}</span>
                        <span className="text-gray-400 text-sm">• {t.connections}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-tight">{t.role}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5">{t.timestamp} • 🌎</p>
                    </div>
                  </div>
                  <p className="font-sans text-gray-800 text-sm leading-relaxed mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp size={16} /> <span className="text-xs font-semibold">Like</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                      <MessageCircle size={16} /> <span className="text-xs font-semibold">Comment</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                      <Share2 size={16} /> <span className="text-xs font-semibold">Repost</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                      <Send size={16} /> <span className="text-xs font-semibold">Send</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Part 2: Collage Layout */}
          <div className="relative h-[600px] mt-20 lg:mt-0">
            {/* Bold Quote Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 z-20 bg-primary p-8 rounded-xl shadow-2xl max-w-[320px] border-l-8 border-t-8 border-[#34D399] translate-x-4 -translate-y-4"
            >
              <p className="font-mono text-white text-xl font-bold leading-tight">
                "NO FLUFF. JUST RESULTS. OUR CONVERSION RATE TRIPLED IN 3 MONTHS."
              </p>
              <p className="text-white/60 text-xs mt-4 font-heading uppercase tracking-widest">- Dave G.</p>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-20 left-0 z-10 bg-white p-6 rounded-lg shadow-2xl max-w-[400px] rotate-1"
            >
              <div className="flex items-center gap-3 mb-4 border-b pb-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">J</div>
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400">From: JM</p>
                  <p className="text-xs font-bold text-gray-700">Subject: Re: Next Steps</p>
                </div>
              </div>
              <p className="font-sans text-gray-600 text-sm italic">
                "Honestly, the ROI was visible within the first two weeks. I've never seen a team move this fast while maintaining such high quality."
              </p>
            </motion.div>

            {/* Another Bold Quote / Sticker look */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/4 z-30 bg-primary p-4 rounded-lg shadow-2xl rotate-12 border-4 border-secondary"
            >
              <span className="font-display text-white text-3xl uppercase tracking-tighter">10X GROWTH ENGINE</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
