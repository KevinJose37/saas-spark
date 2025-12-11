import { useState } from "react";
import heroDashboard from "@/assets/hero-dashboard.png";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/landing/ContactForm";
import { QuoteForm } from "@/components/landing/QuoteForm";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-foreground">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 lg:flex-row lg:gap-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Soluciones de Software para Impulsar tu Empresa
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Desarrollamos herramientas de analytics, automatización y dashboards que transforman tu negocio
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl"
                >
                  Pedir una cotización
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Solicitar Cotización</DialogTitle>
                </DialogHeader>
                <QuoteForm onSuccess={() => setIsQuoteOpen(false)} />
              </DialogContent>
            </Dialog>

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
                >
                  Contáctanos
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contáctanos</DialogTitle>
                </DialogHeader>
                <ContactForm onSuccess={() => setIsContactOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Social Media Section */}
          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <span className="text-sm font-medium text-primary-foreground/80">Síguenos en:</span>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary-foreground/5 blur-2xl" />
            <img
              src={heroDashboard}
              alt="Dashboard moderno de analytics con gráficas y paneles de control"
              className="relative w-full max-w-2xl animate-float rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
