import { Link } from "react-router-dom";
import { Home, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page non trouvée - 404"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir Imider."
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-sunset">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <Mountain className="h-24 w-24 mx-auto mb-6 animate-float opacity-80" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 animate-fade-in">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in-slow">
              Page Non Trouvée
            </p>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Désolé, la page que vous recherchez semble avoir disparu dans les montagnes de l'Atlas.
            </p>
            <Link to="/">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold shadow-warm gap-2"
              >
                <Home className="h-5 w-5" />
                Retour à l'Accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
