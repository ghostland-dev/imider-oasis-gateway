import { FileText, Calendar as CalendarIcon, User, Home, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";

const Services = () => {
  const [formData, setFormData] = useState({
    type: "",
    nom: "",
    prenom: "",
    cin: "",
    telephone: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès ! Vous recevrez une notification une fois traitée.");
    setFormData({ type: "", nom: "", prenom: "", cin: "", telephone: "", details: "" });
  };

  const services = [
    {
      icon: FileText,
      title: "Attestation de Résidence",
      description: "Demander une attestation officielle de résidence",
      color: "primary",
    },
    {
      icon: User,
      title: "Extrait de Naissance",
      description: "Obtenir un extrait d'acte de naissance",
      color: "accent",
    },
    {
      icon: Home,
      title: "Autorisation de Construire",
      description: "Déposer une demande d'autorisation de construction",
      color: "primary",
    },
    {
      icon: CalendarIcon,
      title: "Prise de Rendez-vous",
      description: "Réserver un créneau pour vos démarches",
      color: "accent",
    },
  ];

  const documents = [
    {
      title: "Guide des Démarches Administratives",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      title: "Formulaire d'Attestation Vierge",
      size: "156 KB",
      format: "PDF",
    },
    {
      title: "Règlement Municipal",
      size: "3.1 MB",
      format: "PDF",
    },
  ];

  return (
    <>
      <SEO 
        title="E-Services Municipaux"
        description="Accédez aux services en ligne de la commune d'Imider : formulaires administratifs, prises de rendez-vous et téléchargement de documents officiels."
        keywords="e-services Imider, services municipaux, mairie en ligne, formulaires administratifs, documents officiels"
      />
      <div className="min-h-screen">
        {/* Header */}
      <section className="relative py-20 bg-gradient-desert">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              E-Services Municipaux
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Effectuez vos démarches administratives en ligne simplement et rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
          Services Disponibles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all hover:-translate-y-1 text-center">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 mx-auto mb-3`}>
                  <service.icon className={`h-6 w-6 text-${service.color}`} />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Forms Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Formulaire de Demande</CardTitle>
              <CardDescription>
                Remplissez ce formulaire pour toute demande administrative
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="demande" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="demande">Nouvelle Demande</TabsTrigger>
                  <TabsTrigger value="suivi">Suivi de Demande</TabsTrigger>
                </TabsList>

                <TabsContent value="demande">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium text-foreground">
                        Type de Demande *
                      </label>
                      <select
                        id="type"
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="residence">Attestation de Résidence</option>
                        <option value="naissance">Extrait de Naissance</option>
                        <option value="construction">Autorisation de Construire</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="text-sm font-medium text-foreground">
                          Nom *
                        </label>
                        <input
                          id="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="prenom" className="text-sm font-medium text-foreground">
                          Prénom *
                        </label>
                        <input
                          id="prenom"
                          type="text"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="cin" className="text-sm font-medium text-foreground">
                          CIN *
                        </label>
                        <input
                          id="cin"
                          type="text"
                          required
                          value={formData.cin}
                          onChange={(e) => setFormData({ ...formData, cin: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Numéro CIN"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="text-sm font-medium text-foreground">
                          Téléphone *
                        </label>
                        <input
                          id="telephone"
                          type="tel"
                          required
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+212 6XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="details" className="text-sm font-medium text-foreground">
                        Détails de la Demande
                      </label>
                      <textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Informations complémentaires..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-semibold">
                      Soumettre la Demande
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="suivi">
                  <div className="space-y-6 py-8 text-center">
                    <div className="bg-muted/50 p-8 rounded-lg">
                      <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Suivre votre Demande
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Entrez votre numéro de référence pour consulter l'état de votre demande
                      </p>
                      <div className="max-w-md mx-auto flex gap-3">
                        <input
                          type="text"
                          placeholder="Numéro de référence"
                          className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <Button>Rechercher</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Documents à Télécharger
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-destructive/10 p-3 rounded-lg flex-shrink-0">
                      <Download className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-2 leading-tight">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="bg-secondary px-2 py-1 rounded text-xs">
                          {doc.format}
                        </span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Télécharger
                  </Button>
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

export default Services;
