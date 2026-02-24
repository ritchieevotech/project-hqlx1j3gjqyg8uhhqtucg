import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do we get data when brands can't use Amazon's testing tool?",
    answer: "When Amazon's Manage Your Experiments (MYE) isn't available, we use a rigorous manual pre/post-launch analysis. We track session-to-order ratios over 4-6 week windows, adjusting for seasonal trends and traffic shifts to ensure our data accurately reflects the impact of the content changes."
  },
  {
    question: "What else should you know about the split testing results?",
    answer: "Every category behaves differently. While our overall success rate is high, we focus on statistical significance. We don't just look for a 'winner'; we look for 'why' a specific creative resonated better with your audience to inform the next iteration of your brand's visual strategy."
  },
  {
    question: "Which split test should I focus on first?",
    answer: "We always recommend starting with your Main Image. It's the highest leverage point because it dictates your Click-Through Rate (CTR). Once we've maximized the traffic coming to your page, we shift focus to A+ Content and SEO to improve Conversion Rate (CVR)."
  },
  {
    question: "How often should I refresh my content?",
    answer: "Amazon is a dynamic marketplace. We typically suggest a creative audit every 3–6 months. If competitors launch new designs or Amazon updates their display algorithms, a refresh helps maintain your ranking and prevents your listing from looking dated compared to newer brands."
  }
];

export function ResultsFaqSection() {
  return (
    <section className="px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Everything you need to know about our data-driven approach to Amazon creative testing.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-none bg-slate-50/50 rounded-2xl px-6 py-2 transition-colors data-[state=open]:bg-slate-100/50"
            >
              <AccordionTrigger className="font-heading text-lg md:text-xl font-bold text-primary hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
