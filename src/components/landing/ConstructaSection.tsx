import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import constructaPreview from "@/assets/constructa-preview.png";

const ConstructaSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-12">
          {/* Inner Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="relative z-10 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                <Sparkles className="h-4 w-4" />
                <span>Nuestra Solución Premium</span>
              </div>

              <div>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                  Descubre <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Constructa</span>
                </h2>
                <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                  La plataforma definitiva para la gestión de constructoras.
                  Controla proyectos, finanzas y personal en un entorno
                  diseñado para el futuro de la construcción.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/constructa">
                  <Button
                    size="lg"
                    className="group min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 text-lg hover:from-blue-700 hover:to-purple-700"
                  >
                    Explorar Plataforma
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                {/* <Link to="/constructa">
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[200px] border-white/10 bg-white/5 text-lg text-white hover:bg-white/10"
                  >
                    Ver Demo
                  </Button>
                </Link> */}
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl filter" />
              <img
                src={constructaPreview}
                alt="Constructa Dashboard Interface"
                className="relative z-11 w-full animate-float rounded-xl  transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructaSection;
