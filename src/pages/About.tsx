import Layout from "@/components/layout/Layout";
import { Users, Heart, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <p className="font-arabic text-xl text-primary/80">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                <span className="text-primary font-semibold">Ayrah Islamic Academy</span> is a 
                trustworthy Islamic institution guided by experienced and caring Islamic teachers. 
                We believe that teaching Islam requires patience, love, discipline, and responsibility.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Our mission is to help children grow with faith, respect, and a strong connection 
                to Islam from a young age. We are dedicated to providing authentic Islamic education 
                with strong moral values, nurturing children with Qur'anic knowledge, Islamic manners, 
                and good character in a caring and disciplined environment.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Patience & Love
                </h3>
                <p className="text-muted-foreground text-sm">
                  Teaching with compassion and understanding for every child's unique learning journey.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Discipline
                </h3>
                <p className="text-muted-foreground text-sm">
                  Building strong foundations through structured learning and consistent practice.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Experienced Teachers
                </h3>
                <p className="text-muted-foreground text-sm">
                  Qualified Islamic educators dedicated to nurturing the next generation.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Authentic Education
                </h3>
                <p className="text-muted-foreground text-sm">
                  Teaching Islam based on the Qur'an and authentic Sunnah of Prophet Muhammad ﷺ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
