import Layout from "@/components/layout/Layout";
import RegisterSection from "@/components/sections/RegisterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the minimum age to join?",
    answer: "Children aged 5 years and above can join Ayrah Islamic Academy. We have age-appropriate programs designed to cater to different learning needs.",
  },
  {
    question: "Are online classes available?",
    answer: "Currently, we offer offline classes with WhatsApp-based support for parents and students. This allows for better interaction and hands-on learning.",
  },
  {
    question: "What are the fees?",
    answer: "Fee details will be shared via WhatsApp. Please contact us using the Register button to get complete information about our fee structure.",
  },
  {
    question: "What courses do you offer?",
    answer: "We offer Qur'an programs including Hifz, Naazira, Tajweed, and Surah Memorization. We also have Islamic Studies covering Hadees, Daily Duas, and basic Deeniyath education.",
  },
  {
    question: "What are the class timings?",
    answer: "We offer flexible timings with Morning and Evening batches available. Both Weekday and Weekend classes are available to accommodate busy family schedules.",
  },
  {
    question: "Who are the teachers?",
    answer: "Our academy is guided by experienced and caring Islamic teachers who believe in teaching with patience, love, discipline, and responsibility.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Ayrah Islamic Academy
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <RegisterSection />
    </Layout>
  );
};

export default FAQ;
