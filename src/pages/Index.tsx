import { Mountain, Users, Palmtree, ArrowRight, Calendar, Heart, FileText, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AnimatedCard from "@/components/AnimatedCard";
import heroImage from "@/assets/hero-imider.jpg";
import patternImage from "@/assets/pattern-amazigh.jpg";

const Index = () => {
  const highlights = [
    {
      icon: Mountain,
      title: "Paysages Magnifiques",
      description: "Découvrez les montagnes de l'Atlas et les vallées verdoyantes"
    },
    {
      icon: Users,
      title: "Culture Amazighe",
      description: "Plongez dans un patrimoine millénaire vivant et authentique"
    },
    {
      icon: Palmtree,
      title: "Tourisme Durable",
      description: "Explorez nos circuits de randonnée respectueux de l'environnement"
    },
  ];

  const recentNews = [
    {
      date: "15 Mars 2025",
      title: "Festival Ahidous 2025",
      category: "Culture"
    },
    {
      date: "10 Mars 2025",
      title: "Nouveau Circuit de Randonnée",
      category: "Tourisme"
    },
    {
      date: "5 Mars 2025",
      title: "Projet de Reforestation",
      category: "Environnement"
    },
  ];

  const quickServices = [
    { icon: FileText, label: "E-Services", path: "/services" },
    { icon: Leaf, label: "Environnement", path: "/environnement" },
  ];

  return (
    <>
      <SEO 
        title="Commune d'Imider"
        description="Découvrez Imider, commune rurale amazighe au cœur de l'Atlas. 4294 habitants, 7 douars, un patrimoine millénaire et un engagement pour le développement durable."
        keywords="Imider, Tinghir, Amazigh, Tamazight, Atlas, Maroc, tourisme durable, culture berbère, patrimoine, environnement"
        ogImage="/hero-imider.jpg"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Village d'Imider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
              Bienvenue à Imider
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-slow opacity-90">
              Village amazigh authentique au cœur de l'Atlas marocain, 
              gardien d'un patrimoine culturel millénaire et d'une nature préservée.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-slow">
              <Link to="/village">
                <Button 
                  size="lg" 
                  className="font-semibold shadow-soft btn-ripple hover:scale-105 transition-all duration-300"
                >
                  Découvrir le Village
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/tourisme">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="font-semibold shadow-soft hover:scale-105 transition-all duration-300"
                >
                  Explorer le Tourisme
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Pourquoi Visiter Imider ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une destination unique où se rencontrent nature, culture et traditions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className="shadow-soft group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-desert p-4 rounded-2xl w-fit mx-auto mb-6 shadow-warm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {quickServices.map((service, index) => (
              <Link key={index} to={service.path}>
                <Card className="shadow-soft hover-lift cursor-pointer group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src={patternImage}
            alt="Motifs amazighs"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                  Un Village, Sept Douars, Une Histoire
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Imider est une commune rurale amazighe de 4 294 habitants, située à 30 km de Tinghir 
                  dans la région de Drâa-Tafilalet. Composée de sept douars, elle incarne la richesse 
                  de la culture berbère marocaine.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Entre montagnes de l'Atlas et vallées verdoyantes, Imider offre un cadre naturel 
                  exceptionnel préservé par ses habitants, gardiens d'un patrimoine millénaire.
                </p>
                <Link to="/village">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-semibold group hover:scale-105 transition-all duration-300"
                  >
                    En Savoir Plus
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4 294</div>
                    <div className="text-sm text-muted-foreground">Habitants</div>
                  </CardContent>
                </Card>
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Douars</div>
                  </CardContent>
                </Card>
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1800m</div>
                    <div className="text-sm text-muted-foreground">Altitude</div>
                  </CardContent>
                </Card>
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">30km</div>
                    <div className="text-sm text-muted-foreground">de Tinghir</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-2">
              Actualités Récentes
            </h2>
            <p className="text-muted-foreground">
              Restez informé de la vie du village
            </p>
          </div>
          <Link to="/actualites">
            <Button 
              variant="outline"
              className="hover:scale-105 transition-all duration-300 group"
            >
              Voir Tout
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentNews.map((news, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className="shadow-soft group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 group-hover:text-accent transition-colors">
                  <Calendar className="h-4 w-4 text-accent" />
                  {news.date}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {news.category}
                </span>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-oasis" />
        
        <div className="relative container mx-auto px-4 text-center text-accent-foreground">
          <Heart className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h2 className="text-4xl font-display font-bold mb-6">
            Venez Découvrir Notre Village
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Explorez la beauté naturelle et culturelle d'Imider, rencontrez ses habitants 
            et partagez l'authenticité de la vie amazighe.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="secondary" 
              className="font-semibold shadow-soft btn-ripple hover:scale-105 transition-all duration-300 group"
            >
              Planifier Votre Visite
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Index;
