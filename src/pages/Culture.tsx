import { Palette, Music, Languages, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PhotoGallery from "@/components/PhotoGallery";
import artisanatImage from "@/assets/artisanat-imider.jpg";
import kasbahdImage from "@/assets/kasbah-heritage.jpg";
import tissageImage from "@/assets/tissage-tradition.jpg";
import ahidousImage from "@/assets/ahidous-danse.jpg";

const Culture = () => {
  const patrimoineItems = [
    {
      icon: Landmark,
      title: "Kasbahs Historiques",
      description: "Architecture traditionnelle en pisé, témoins de l'histoire millénaire d'Imider et de son système défensif."
    },
    {
      icon: Palette,
      title: "Artisanat Traditionnel",
      description: "Poterie, tissage, bijouterie berbère : des savoir-faire ancestraux transmis de génération en génération."
    },
    {
      icon: Music,
      title: "Ahidous",
      description: "Danse et musique traditionnelles amazighes, expression collective de l'identité culturelle du village."
    },
    {
      icon: Languages,
      title: "Langue Tamazight",
      description: "Le tamazight, langue amazighe écrite en caractères Tifinagh, est au cœur de l'identité locale."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-desert">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Culture & Patrimoine
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Découvrez la richesse culturelle amazighe d'Imider, ses traditions 
              millénaires et son patrimoine architectural unique.
            </p>
          </div>
        </div>
      </section>

      {/* Patrimoine Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {patrimoineItems.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-oasis p-3 rounded-lg shadow-warm">
                    <item.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-display">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Artisanat Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                L'Artisanat Local
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'artisanat d'Imider reflète l'expertise et la créativité des artisans amazighs. 
                  Les femmes du village perpétuent des traditions ancestrales à travers la poterie, 
                  le tissage de tapis et la création de bijoux berbères.
                </p>
                <p>
                  Les motifs géométriques qui ornent les tapis et les poteries ne sont pas seulement 
                  décoratifs : ils racontent des histoires, transmettent des symboles et préservent 
                  la mémoire collective du peuple amazigh.
                </p>
                <p>
                  Les coopératives artisanales d'Imider œuvrent à la valorisation de ces savoir-faire 
                  et à leur transmission aux nouvelles générations, tout en développant des canaux 
                  de commercialisation équitables.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={artisanatImage}
                alt="Artisanat traditionnel d'Imider"
                className="rounded-2xl shadow-warm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Langue Tamazight */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            La Langue Tamazight
          </h2>
          <Card className="shadow-warm">
            <CardContent className="p-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Le tamazight est la langue maternelle des habitants d'Imider. C'est une langue 
                  amazighe (berbère) riche et expressive, qui fait partie du patrimoine culturel 
                  immatériel du village.
                </p>
                <p>
                  Cette langue s'écrit traditionnellement en caractères Tifinagh, un alphabet 
                  ancestral qui remonte à l'Antiquité. Les Tifinagh sont plus qu'un simple système 
                  d'écriture : ils sont un symbole d'identité et de résistance culturelle.
                </p>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-center text-2xl font-arabic mb-3">
                    ⴰⵣⵓⵍ (Azul)
                  </p>
                  <p className="text-center text-sm">
                    "Bonjour" en tamazight - La salutation traditionnelle amazighe
                  </p>
                </div>
                <p>
                  La préservation et la promotion du tamazight sont des priorités pour la commune 
                  d'Imider, qui s'efforce de maintenir vivante cette langue dans l'éducation, 
                  l'administration et la vie quotidienne.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Galerie Culturelle
          </h2>
          <div className="max-w-6xl mx-auto">
            <PhotoGallery
              photos={[
                { src: kasbahdImage, alt: "Kasbah historique d'Imider", title: "Kasbah Traditionnelle" },
                { src: artisanatImage, alt: "Artisanat local", title: "Artisanat Amazigh" },
                { src: tissageImage, alt: "Tissage traditionnel", title: "Tissage de Tapis" },
                { src: ahidousImage, alt: "Danse Ahidous", title: "Danse Ahidous" },
                { src: artisanatImage, alt: "Poterie traditionnelle", title: "Poterie" },
                { src: kasbahdImage, alt: "Architecture pisé", title: "Architecture en Pisé" },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;
