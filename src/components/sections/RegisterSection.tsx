import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-20 bg-background islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary">Register?</span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Join Ayrah Islamic Academy and give your child the gift of Islamic knowledge. 
            Click the button below to start the registration process.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 shadow-gold"
          >
            <Link to="/register">
              <UserPlus size={24} className="mr-3" />
              Register Your Child
            </Link>
          </Button>

          <p className="mt-6 text-muted-foreground text-sm">
            Contact: <span className="text-primary">+91 89256 11202</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
