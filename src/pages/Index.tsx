import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import VisionSection from "@/components/sections/VisionSection";
import ClassTimings from "@/components/sections/ClassTimings";
import RegisterSection from "@/components/sections/RegisterSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <VisionSection />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Islamic education programs designed for children of all ages
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Qur'an Programs</h3>
              <p className="text-muted-foreground mb-6">Hifz, Naazira, Tajweed, and Surah Memorization courses for complete Qur'anic education.</p>
              <Link to="/quran-courses">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn">
                  View Courses <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GraduationCap size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Islamic Studies</h3>
              <p className="text-muted-foreground mb-6">Hadees, Islamic Duas, and basic Deeniyath courses for moral and spiritual development.</p>
              <Link to="/islamic-studies">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn">
                  View Courses <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ClassTimings />
      <RegisterSection />
    </Layout>
  );
};

export default Index;
