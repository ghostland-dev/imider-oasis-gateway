import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-desert p-2 rounded-lg shadow-warm">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Imider</h3>
                <p className="text-sm text-muted-foreground">Village Amazigh</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Commune rurale amazighe située à 30 km de Tinghir, riche en patrimoine culturel et naturel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { path: "/village", label: "Le Village" },
                { path: "/culture", label: "Culture" },
                { path: "/tourisme", label: "Tourisme" },
                { path: "/actualites", label: "Actualités" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Imider, Province de Tinghir<br />Drâa-Tafilalet, Maroc</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+212 5XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">contact@imider.ma</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-secondary p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-soft hover:shadow-warm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-soft hover:shadow-warm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-soft hover:shadow-warm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Commune d'Imider. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
