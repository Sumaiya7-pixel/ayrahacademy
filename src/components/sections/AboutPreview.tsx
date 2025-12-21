import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Ayrah Islamic Academy</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Ayrah Islamic Academy is a dedicated Islamic learning center focused on 
            providing authentic Islamic education with strong moral values. We aim to 
            nurture children with Qur'anic knowledge, Islamic manners, and good character 
            in a caring and disciplined environment.
          </p>

          <Link to="/about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              Learn More About Us
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
