import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";

const rules = [
  "Students must attend classes on time",
  "Proper Islamic dress code is required",
  "Respect for teachers and fellow students is mandatory",
  "Regular attendance is encouraged",
  "Mobile phones should be kept silent during classes",
  "Complete assigned homework and practice regularly",
  "Maintain cleanliness and hygiene",
  "Follow Islamic etiquette at all times",
];

const Rules = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rules & <span className="text-primary">Guidelines</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please follow these guidelines to ensure a respectful and productive learning environment for all students.
          </p>
        </div>
      </section>

      {/* Rules List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
              <p className="text-foreground">
                <span className="text-primary font-semibold">Note:</span> These rules are designed to 
                create a respectful and focused learning environment. Your cooperation is highly appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rules;
