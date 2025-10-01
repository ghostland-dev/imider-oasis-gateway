import { Users, Mountain, Calendar, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Village = () => {
  const douars = [
    { name: "Imedghas", population: "~650 hab." },
    { name: "Assaka", population: "~580 hab." },
    { name: "Tawenza", population: "~620 hab." },
    { name: "Azghar", population: "~590 hab." },
    { name: "Tiferdine", population: "~610 hab." },
    { name: "Ait Ali", population: "~630 hab." },
    { name: "Izelimane", population: "~614 hab." },
  ];

  const stats = [
    { icon: Users, label: "Population", value: "4 294 habitants", color: "accent" },
    { icon: Home, label: "Douars", value: "7 douars", color: "primary" },
    { icon: Mountain, label: "Altitude", value: "1 800m", color: "accent" },
    { icon: Calendar, label: "Fondation", value: "Tradition millénaire", color: "primary" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-sunset">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Le Village d'Imider
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Une commune rurale amazighe au cœur des montagnes de l'Atlas, 
              gardienne d'un patrimoine millénaire et d'une culture vivante.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-warm hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-lg bg-${stat.color}/10 mb-3`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Histoire */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">Histoire</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Imider est une commune rurale amazighe située dans la province de Tinghir, 
              dans la région de Drâa-Tafilalet, au Maroc. Le village se trouve à environ 30 km 
              de la ville de Tinghir, nichée au cœur des montagnes de l'Atlas.
            </p>
            <p>
              L'histoire d'Imider est intimement liée à l'exploitation minière. La mine d'argent 
              d'Imider, exploitée depuis 1969, est l'une des plus importantes mines d'argent 
              d'Afrique. Cette exploitation a profondément marqué l'identité du village et de ses habitants.
            </p>
            <p>
              En août 2011, les habitants d'Imider ont lancé un mouvement de protestation 
              pacifique contre l'exploitation minière et ses impacts environnementaux et sociaux. 
              Ce mouvement a duré plusieurs années et a attiré l'attention nationale et internationale 
              sur les enjeux de justice sociale et environnementale.
            </p>
            <p>
              Aujourd'hui, Imider s'efforce de concilier développement économique et préservation 
              de son environnement et de son patrimoine culturel amazigh.
            </p>
          </div>
        </div>
      </section>

      {/* Les Sept Douars */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Les Sept Douars d'Imider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {douars.map((douar, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {douar.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    {douar.population}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Géographie */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Géographie et Climat
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Localisation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Imider est située dans les contreforts de l'Atlas, à une altitude moyenne de 1 800 mètres. 
                Le village bénéficie d'une position stratégique entre les vallées fertiles et les 
                hauteurs montagneuses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Climat</h3>
              <p className="text-muted-foreground leading-relaxed">
                Le climat est de type semi-aride montagnard, avec des étés chauds et secs et des 
                hivers froids. Les précipitations, essentiellement concentrées en hiver, alimentent 
                les sources et les nappes phréatiques vitales pour la région.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Village;
