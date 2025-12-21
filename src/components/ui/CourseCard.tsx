import { LucideIcon } from "lucide-react";

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const CourseCard = ({ icon: Icon, title, description, index = 0 }: CourseCardProps) => {
  return (
    <div
      className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
