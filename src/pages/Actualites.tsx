import { Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Actualites = () => {
  const news = [
    {
      title: "Festival Ahidous 2025",
      date: "15 Mars 2025",
      category: "Culture",
      excerpt: "La commune d'Imider organise son festival annuel de danse et musique traditionnelles amazighes. Un événement majeur qui rassemble les villages de la région.",
      color: "accent"
    },
    {
      title: "Nouveau Circuit de Randonnée",
      date: "10 Mars 2025",
      category: "Tourisme",
      excerpt: "Ouverture d'un nouveau sentier balisé reliant les sept douars d'Imider, offrant des panoramas exceptionnels sur l'Atlas et les vallées environnantes.",
      color: "primary"
    },
    {
      title: "Projet de Reforestation",
      date: "5 Mars 2025",
      category: "Environnement",
      excerpt: "Lancement d'une initiative communautaire pour planter 1000 arbres cette année afin de lutter contre l'érosion et préserver les ressources en eau.",
      color: "accent"
    },
    {
      title: "Atelier de Poterie Traditionnelle",
      date: "1 Mars 2025",
      category: "Artisanat",
      excerpt: "Formation gratuite destinée aux jeunes du village pour transmettre les techniques ancestrales de poterie amazighe, organisée par la coopérative locale.",
      color: "primary"
    },
    {
      title: "Rénovation de la Kasbah d'Imedghas",
      date: "25 Février 2025",
      category: "Patrimoine",
      excerpt: "Démarrage des travaux de restauration de la kasbah historique d'Imedghas, dans le respect des techniques de construction traditionnelles en pisé.",
      color: "accent"
    },
    {
      title: "Jumelage avec un Village Français",
      date: "20 Février 2025",
      category: "International",
      excerpt: "Signature d'un accord de jumelage avec une commune française pour développer les échanges culturels et promouvoir le tourisme durable.",
      color: "primary"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-sunset">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Actualités
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Restez informé des événements, projets et initiatives de la commune d'Imider.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl font-display leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-oasis py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-warm border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Restez Connecté
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Inscrivez-vous pour recevoir les dernières nouvelles d'Imider directement 
                dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-3 bg-gradient-desert text-primary-foreground rounded-lg font-semibold hover:shadow-warm transition-all">
                  S'inscrire
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
