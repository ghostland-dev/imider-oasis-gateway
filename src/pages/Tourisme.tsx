import { Footprints, Hotel, MapPinned, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AnimatedCard from "@/components/AnimatedCard";
import tourismeImage from "@/assets/tourisme-circuit.jpg";

const Tourisme = () => {
  const circuits = [
    {
      name: "Circuit des Kasbahs",
      duration: "Demi-journée",
      difficulty: "Facile",
      description: "Découverte du patrimoine architectural amazigh à travers les kasbahs historiques du village."
    },
    {
      name: "Randonnée de l'Atlas",
      duration: "Journée complète",
      difficulty: "Modéré",
      description: "Ascension vers les sommets avec vue panoramique sur les vallées et les douars."
    },
    {
      name: "Sentier des Sources",
      duration: "4 heures",
      difficulty: "Facile",
      description: "Balade relaxante le long des sources naturelles et des oasis verdoyantes."
    },
  ];

  const services = [
    {
      icon: Hotel,
      title: "Hébergements",
      items: ["Maisons d'hôtes traditionnelles", "Gîtes ruraux", "Camping sous les étoiles"]
    },
    {
      icon: MapPinned,
      title: "Points d'Intérêt",
      items: ["Kasbahs historiques", "Sites archéologiques", "Panoramas naturels"]
    },
    {
      icon: Camera,
      title: "Activités",
      items: ["Randonnée pédestre", "Photographie", "Rencontres culturelles"]
    },
  ];

  return (
    <>
      <SEO 
        title="Tourisme Durable"
        description="Explorez les circuits de randonnée d'Imider, hébergements traditionnels et activités culturelles. Tourisme responsable dans l'Atlas marocain."
        keywords="tourisme Imider, randonnée Atlas, kasbahs, hébergement traditionnel, écotourisme, Tinghir"
      />
      <div className="min-h-screen">
        {/* Header */}
      <section className="relative py-20 bg-gradient-oasis">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-accent-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Tourisme Durable
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Explorez les trésors naturels et culturels d'Imider dans une démarche 
              respectueuse de l'environnement et des traditions locales.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <img
            src={tourismeImage}
            alt="Paysages d'Imider"
            className="rounded-2xl shadow-warm w-full h-auto"
          />
        </div>
      </section>

      {/* Circuits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
          Circuits de Randonnée
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {circuits.map((circuit, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className="shadow-soft group"
            >
              <CardHeader>
                <div className="bg-gradient-oasis p-3 rounded-lg shadow-soft w-fit mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Footprints className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                  {circuit.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-4 text-sm">
                  <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    {circuit.duration}
                  </span>
                  <span className="bg-accent/10 px-3 py-1 rounded-full text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    {circuit.difficulty}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {circuit.description}
                </p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
            Services Touristiques
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedCard 
                key={index}
                delay={index * 100}
                className="shadow-soft group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary p-2 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-desert shadow-warm max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-display font-bold mb-4">
              Planifiez Votre Visite
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Contactez-nous pour organiser votre séjour à Imider et découvrir 
              l'authenticité de la vie amazighe.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold shadow-soft btn-ripple hover:scale-105 transition-all duration-300"
              >
                Nous Contacter
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
      </div>
    </>
  );
};

export default Tourisme;
