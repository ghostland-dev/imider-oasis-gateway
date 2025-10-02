import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    } else if (formData.name.length > 100) {
      newErrors.name = "Le nom ne peut pas dépasser 100 caractères";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    } else if (formData.email.length > 255) {
      newErrors.email = "L'email ne peut pas dépasser 255 caractères";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Le sujet doit contenir au moins 3 caractères";
    } else if (formData.subject.length > 200) {
      newErrors.subject = "Le sujet ne peut pas dépasser 200 caractères";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Le message ne peut pas dépasser 2000 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Veuillez corriger les erreurs dans le formulaire");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Imider, Province de Tinghir\nDrâa-Tafilalet, Maroc",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 5XX XX XX XX",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@imider.ma",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h - 16h\nSamedi: 8h - 12h",
      color: "primary"
    },
  ];

  return (
    <>
      <SEO 
        title="Contact"
        description="Contactez la commune d'Imider pour toute question, suggestion ou demande d'information. Nous sommes à votre écoute."
        keywords="contact Imider, mairie Imider, commune rurale, Tinghir, Drâa-Tafilalet"
      />
      <div className="min-h-screen">
        {/* Header */}
      <section className="relative py-20 bg-gradient-desert">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-slow opacity-90">
              Nous sommes à votre écoute pour toute question, suggestion ou demande d'information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all text-center">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-${info.color}/10 mx-auto mb-2`}>
                  <info.icon className={`h-6 w-6 text-${info.color}`} />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {info.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-center">
                Envoyez-nous un Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                      placeholder="Votre nom"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                      placeholder="votre@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Sujet *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                    placeholder="Objet de votre message"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none`}
                    placeholder="Écrivez votre message ici..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Localisation
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted rounded-2xl shadow-soft h-[400px] flex items-center justify-center">
              <div className="text-center space-y-3">
                <MapPin className="h-12 w-12 text-accent mx-auto" />
                <p className="text-muted-foreground">
                  Imider, Province de Tinghir, Drâa-Tafilalet
                </p>
                <p className="text-sm text-muted-foreground">
                  À 30 km de Tinghir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;
