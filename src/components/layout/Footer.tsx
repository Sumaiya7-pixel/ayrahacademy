import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Assalamu Alaikum, I would like to register my child for Ayrah Islamic Academy."
    );
    window.open(`https://wa.me/918925611202?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              Ayrah Islamic Academy
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A dedicated Islamic learning center focused on providing authentic
              Islamic education with strong moral values.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quran-courses"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Qur'an Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/islamic-studies"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Islamic Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/rules"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Rules & Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Phone size={16} className="text-primary" />
                  +91 89256 11202
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@ayrahacademy.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  info@ayrahacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ayrah Islamic Academy. All rights
            reserved.
          </p>
          <p className="text-primary/80 text-xs mt-2 font-arabic">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
