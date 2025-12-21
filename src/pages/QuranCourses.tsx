import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";
import RegisterSection from "@/components/sections/RegisterSection";
import { BookOpen, BookMarked, Bookmark, FileText } from "lucide-react";

const quranCourses = [
  {
    icon: BookOpen,
    title: "Qur'an Memorization (Hifz)",
    description: "Complete memorization of the Holy Qur'an with proper pronunciation and understanding for dedicated students.",
  },
  {
    icon: BookMarked,
    title: "Qur'an Naazira (Reading Practice)",
    description: "Learn to read the Qur'an fluently with correct pronunciation and proper Arabic letter recognition.",
  },
  {
    icon: Bookmark,
    title: "Qur'an with Tajweed",
    description: "Master the rules of Tajweed for beautiful and accurate recitation of the Holy Qur'an.",
  },
  {
    icon: FileText,
    title: "Surah Memorization",
    description: "Memorize essential Surahs for daily prayers and special occasions with meaning and understanding.",
  },
];

const QuranCourses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qur'an <span className="text-primary">Programs</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Qur'anic education programs designed to help children connect with 
            the words of Allah through proper recitation, memorization, and understanding.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quranCourses.map((course, index) => (
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

export default QuranCourses;
