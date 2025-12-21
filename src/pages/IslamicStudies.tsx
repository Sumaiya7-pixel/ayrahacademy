import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";
import RegisterSection from "@/components/sections/RegisterSection";
import { ScrollText, HandHeart, GraduationCap } from "lucide-react";

const islamicCourses = [
  {
    icon: ScrollText,
    title: "Hadees Learning",
    description: "Learn the sayings and teachings of Prophet Muhammad ﷺ with authentic narrations and their meanings.",
  },
  {
    icon: HandHeart,
    title: "Islamic Duas (Daily Duas & Sunnah)",
    description: "Memorize essential daily supplications and Sunnah practices for everyday life activities.",
  },
  {
    icon: GraduationCap,
    title: "Islamic Studies (Basic Deeniyath & Moral Education)",
    description: "Comprehensive Islamic knowledge covering beliefs, worship, ethics, and character development for children.",
  },
];

const IslamicStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Islamic <span className="text-primary">Studies</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Build a strong Islamic foundation with our comprehensive Islamic studies programs 
            covering Hadees, Duas, and moral education for complete spiritual development.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {islamicCourses.map((course, index) => (
              <CourseCard
                key={course.title}
                icon={course.icon}
                title={course.title}
                description={course.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <RegisterSection />
    </Layout>
  );
};

export default IslamicStudies;
