import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 text-left font-sans text-sm md:text-base text-foreground hover:no-underline transition-all",
        className
      )}
      {...props}
    >
      {children}
      <span className="ml-auto flex items-center justify-center">
        <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
        <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const faqs = [
  {
    question: "Do I get the working files?",
    answer: "Yes. You receive organized, layered source files plus web-ready exports so your team can reuse assets later."
  },
  {
    question: "What if I don't have very many good product shots? Do you offer photoshoots?",
    answer: "We can work with your existing assets, recommend professional photographers, or help you plan detailed shot lists to get exactly what's needed for high-converting content."
  },
  {
    question: "What happens after I get the files from you?",
    answer: "We provide a simple guide for uploading everything to Amazon. We're also available for minor tweaks to ensure your listing looks perfect once live."
  },
  {
    question: "What exactly are product images?",
    answer: "Product images include your main Hero image (on white background), Infographic gallery images highlighting features, and Lifestyle images showing the product in use."
  },
  {
    question: "Why should I upgrade my images, can't I just use my stock images?",
    answer: "Stock images often look generic and fail to build trust. Custom, optimized images are proven to increase click-through rates and conversion by showing your product's unique value."
  },
  {
    question: "How long does it take start to finish?",
    answer: "Most projects take between 2–4 weeks from kick-off to final delivery, depending on the complexity and number of products."
  },
  {
    question: "Can I just order A+ Content without a package?",
    answer: "Yes, you can order A+ Content as a standalone service, though most brands find that bundling with listing images provides better visual consistency."
  },
  {
    question: "Do you help with Walmart?",
    answer: "Yes! We can adapt our creative strategy and asset dimensions to meet Walmart's specific requirements and help you stand out there as well."
  },
  {
    question: "Do you help source products or launch private label brands?",
    answer: "Our expertise is specifically in creative content and brand optimization. We don't handle product sourcing, but we help make your launched products look world-class."
  },
  {
    question: "Can you manage my Amazon account?",
    answer: "We focus exclusively on the creative and content side. However, we frequently collaborate with account managers to ensure our designs align with your overall strategy."
  },
  {
    question: "How much are additional product and variations?",
    answer: "Add-ons and variations are priced per item. Get in touch for a custom quote tailored to your specific catalog size."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <div className="h-px w-full bg-foreground/20 mb-2" />
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-foreground/20 first:border-t-0"
            >
              <AccordionTrigger>
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-sans text-sm md:text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-4 h-px w-full bg-foreground/20" />
      </div>
    </section>
  );
};
