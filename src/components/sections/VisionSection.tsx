import { BookOpen, Heart, Scale } from "lucide-react";

const visionItems = [
  {
    icon: BookOpen,
    title: "Qur'an & Sunnah",
    description: "Teach Islam based on the authentic teachings of the Qur'an and Sunnah",
  },
  {
    icon: Heart,
    title: "Islamic Character",
    description: "Build strong Islamic character with Akhlaq (ethics) and Adab (manners)",
  },
  {
    icon: Scale,
    title: "Balanced Education",
    description: "Balance Deen (religious) and worldly education for complete development",
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 bg-card islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Vision</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
