import ayrahLogo from "@/assets/ayrah-logo.jfif";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleRegisterClick = () => {
    const message = encodeURIComponent(
      "Assalamu Alaikum, I would like to register my child for Ayrah Islamic Academy."
    );
    window.open(`https://wa.me/918925611202?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ayrahLogo})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Arabic Greeting */}
          <p className="font-arabic text-xl md:text-2xl text-primary/90 animate-fade-in">
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p className="text-muted-foreground text-sm md:text-base animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Assalamu Alaikum Warahmatullahi Wabarakatuh
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary">AYRAH</span> ISLAMIC ACADEMY
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Islamic Knowledge with Discipline & Faith
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="h-px w-16 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary/50" />
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-gold"
            >
              Admissions Open – Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
