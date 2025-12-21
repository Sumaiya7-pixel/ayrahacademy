import { Clock, Sun, Moon, Calendar } from "lucide-react";

const timingItems = [
  {
    icon: Sun,
    title: "Morning Batches",
    description: "Early morning classes for a blessed start to the day",
  },
  {
    icon: Moon,
    title: "Evening Batches",
    description: "After-school sessions for working parents' convenience",
  },
  {
    icon: Calendar,
    title: "Weekday Classes",
    description: "Regular classes Monday through Friday",
  },
  {
    icon: Clock,
    title: "Weekend Classes",
    description: "Saturday and Sunday sessions available",
  },
];

const ClassTimings = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Class <span className="text-primary">Timings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible class schedules designed to accommodate busy family routines
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timingItems.map((item, index) => (
            <div
              key={item.title}
              className="p-6 bg-background border border-border rounded-lg text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary font-medium">
            ✨ Flexible timings for parents' convenience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClassTimings;
