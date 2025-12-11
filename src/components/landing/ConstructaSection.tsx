import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import constructaPreview from "@/assets/constructa-preview.png";

const ConstructaSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-foreground">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
              <Building2 className="h-5 w-5 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Proyecto Estrella
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Conoce nuestro proyecto estrella:{" "}
              <span className="bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
                Constructa
              </span>
            </h2>

            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              Un aplicativo web integral diseñado específicamente para constructoras. 
              Optimiza la operación de tus proyectos, gestiona materiales, órdenes de compra, 
              locaciones y mucho más desde una sola plataforma.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/constructa">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl group"
                >
                  Conocer más
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary-foreground/5 blur-2xl" />
              <img
                src={constructaPreview}
                alt="Dashboard de Constructa con analytics y gráficos de gestión de proyectos"
                className="relative w-full max-w-xl mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructaSection;
