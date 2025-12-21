import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const RegisterSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Assalamu Alaikum, I would like to register my child for Ayrah Islamic Academy."
    );
    window.open(`https://wa.me/918925611202?text=${message}`, "_blank");
  };

  return (
    <section id="register" className="py-20 bg-background islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary">Register?</span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Join Ayrah Islamic Academy and give your child the gift of Islamic knowledge. 
            Click the button below to register via WhatsApp.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 shadow-lg"
          >
            <MessageCircle size={24} className="mr-3" />
            Register via WhatsApp
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
