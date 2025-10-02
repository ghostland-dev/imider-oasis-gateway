import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/village", label: "Le Village" },
    { path: "/culture", label: "Culture & Patrimoine" },
    { path: "/tourisme", label: "Tourisme" },
    { path: "/services", label: "E-Services" },
    { path: "/environnement", label: "Environnement" },
    { path: "/actualites", label: "Actualités" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-desert p-2 rounded-lg shadow-warm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Imider
              </h1>
              <p className="text-xs text-muted-foreground">Village Amazigh</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`font-medium transition-all duration-300 relative group/btn
                    ${isActive(item.path) 
                      ? 'shadow-warm' 
                      : 'hover:bg-secondary/50 hover:scale-105'
                    }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                  {!isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/btn:left-0 group-hover/btn:right-0" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[600px] pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`w-full justify-start font-medium transition-all hover:translate-x-2
                    ${isActive(item.path) ? 'shadow-warm' : ''}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
