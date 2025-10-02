import { Droplets, Trees, Leaf, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SEO from "@/components/SEO";
import eauImage from "@/assets/environnement-eau.jpg";
import reforestationImage from "@/assets/reforestation-projet.jpg";

const Environnement = () => {
  const initiatives = [
    {
      icon: Droplets,
      title: "Gestion de l'Eau",
      description: "Protection et optimisation des ressources hydriques vitales",
      progress: 75,
      color: "accent",
    },
    {
      icon: Trees,
      title: "Reforestation",
      description: "Programme de plantation de 1000 arbres par an",
      progress: 60,
      color: "primary",
    },
    {
      icon: Leaf,
      title: "Agriculture Durable",
      description: "Promotion des pratiques agricoles écologiques",
      progress: 55,
      color: "accent",
    },
    {
      icon: Recycle,
      title: "Gestion des Déchets",
      description: "Tri sélectif et recyclage communautaire",
      progress: 40,
      color: "primary",
    },
  ];

  const waterData = [
    { label: "Sources naturelles", value: "12", unit: "sources" },
    { label: "Consommation quotidienne", value: "180", unit: "m³/jour" },
    { label: "Qualité de l'eau", value: "95", unit: "%" },
  ];

  return (
    <>
      <SEO 
        title="Environnement & Développement Durable"
        description="Les initiatives écologiques d'Imider : gestion de l'eau, reforestation, énergies renouvelables et protection de l'environnement dans l'Atlas."
        keywords="environnement Imider, développement durable, reforestation, gestion eau, énergies renouvelables, écologie Atlas"
      />
      <div className="min-h-screen">
        {/* Header */}
      <section className="relative py-20 bg-gradient-oasis">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-accent-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Environnement & Développement Durable
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Notre engagement pour préserver l'écosystème fragile de l'Atlas 
              et construire un avenir durable pour les générations futures.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
          Nos Initiatives Écologiques
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`bg-${initiative.color}/10 p-3 rounded-lg`}>
                    <initiative.icon className={`h-6 w-6 text-${initiative.color}`} />
                  </div>
                  <CardTitle className="text-xl font-display">{initiative.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-semibold text-foreground">{initiative.progress}%</span>
                  </div>
                  <Progress value={initiative.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gestion de l'Eau */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={eauImage}
                alt="Gestion de l'eau à Imider"
                className="rounded-2xl shadow-warm w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Gestion Durable de l'Eau
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'eau est la ressource la plus précieuse d'Imider. Face aux défis climatiques 
                et à l'exploitation minière, nous avons mis en place un système de gestion 
                intégré des ressources hydriques.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {waterData.map((data, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-accent mb-1">{data.value}</div>
                      <div className="text-xs text-muted-foreground">{data.unit}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-tight">
                        {data.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Nos actions incluent le monitoring continu de la qualité de l'eau, 
                la protection des sources naturelles et la sensibilisation à l'économie d'eau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projet de Reforestation */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Programme de Reforestation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lancé en 2023, notre programme de reforestation vise à planter 1000 arbres 
                par an pour lutter contre l'érosion des sols et restaurer les écosystèmes 
                dégradés par l'activité minière.
              </p>
              <p>
                Chaque habitant est invité à participer aux journées de plantation 
                organisées chaque saison. Les espèces plantées sont natives de la région 
                et adaptées au climat semi-aride : thuya, genévrier, caroubier et amandier.
              </p>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                      <Trees className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Bilan 2024
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>✓ 850 arbres plantés</li>
                        <li>✓ 120 familles participantes</li>
                        <li>✓ 5 hectares reboisés</li>
                        <li>✓ 85% de taux de survie</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <img
              src={reforestationImage}
              alt="Projet de reforestation"
              className="rounded-2xl shadow-warm w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Objectifs Futurs */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Objectifs 2025-2030
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: "100%", label: "Énergies renouvelables dans les bâtiments publics" },
              { value: "5000", label: "Arbres plantés d'ici 2030" },
              { value: "50%", label: "Réduction de la consommation d'eau" },
              { value: "80%", label: "Taux de recyclage des déchets" },
            ].map((goal, index) => (
              <Card key={index} className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{goal.value}</div>
                  <p className="text-sm text-muted-foreground leading-tight">{goal.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Environnement;
