import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/landing/ContactForm";
import {
  ArrowLeft,
  Check,
  FileText,
  BarChart3,
  Calculator,
  Building2,
  MapPin,
  Users,
  Wallet,
  ArrowRight,
} from "lucide-react";

import constructaHero from "@/assets/constructa-hero.png";
import constructaOrders from "@/assets/constructa-orders.png";
import constructaDashboard from "@/assets/constructa-dashboard.png";
import constructaBudget from "@/assets/constructa-budget.png";
import constructaProjects from "@/assets/constructa-projects.png";
import constructaLocations from "@/assets/constructa-locations.png";
import constructaTeam from "@/assets/constructa-team.png";
import constructaAccounting from "@/assets/constructa-accounting.png";
import constructaIntegrated from "@/assets/constructa-integrated.png";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Scroll to top component
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  align?: "left" | "right";
}

const FeatureSection = ({
  title,
  subtitle,
  features,
  image,
  imageAlt,
  icon,
  align = "left",
}: FeatureSectionProps) => (
  <section className="relative overflow-hidden py-24 lg:py-32">
    <div className="container relative z-10 mx-auto px-4">
      <div
        className={`flex flex-col gap-16 lg:items-center ${align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
      >
        {/* Content Side */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 shadow-inner ring-1 ring-white/10">
            {icon}
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-xl text-slate-400">
              {subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/10"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[100px] transition-all duration-700 group-hover:blur-[120px]" />
            <img
              src={image}
              alt={imageAlt}
              className="relative z-10 w-full animate-float rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Constructa = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500/30">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Regresar al Inicio
              </Link>

              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Control Total para tu <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Constructora
                </span>
              </h1>

              <p className="mb-10 text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto lg:mx-0">
                La suite integral que unifica compras, proyectos, presupuestos y recursos humanos en una sola plataforma inteligente.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="group h-14 bg-white text-slate-950 hover:bg-slate-200 text-lg font-semibold px-8"
                    >
                      Solicitar Demostración
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Agenda tu Demo Personalizada</DialogTitle>
                    </DialogHeader>
                    <ContactForm onSuccess={() => setIsContactOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-3xl">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[80px]" />
                <img
                  src={constructaHero}
                  alt="Constructa Dashboard Interface"
                  className="relative w-full animate-float rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Flow */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <FeatureSection
          title="Gestión de Compras"
          subtitle="Automatiza tu cadena de suministro"
          icon={<FileText className="h-7 w-7" />}
          align="left"
          image={constructaOrders}
          imageAlt="Interface de Órdenes de Compra"
          features={[
            "Generación automática desde requisiciones de obra",
            "Flujos de aprobación multinivel configurables",
            "Portal para cotizaciones",
            "Tracking en tiempo real de avance de proyectos"
          ]}
        />

        <FeatureSection
          title="Dashboards Ejecutivos"
          subtitle="Toma decisiones basadas en datos reales"
          icon={<BarChart3 className="h-7 w-7" />}
          align="right"
          image={constructaDashboard}
          imageAlt="Dashboard Ejecutivo"
          features={[
            "Visión 360° de todos los proyectos activos",
            "Alertas automáticas de desviación de budget",
            "Análisis de costos y tiempos",
            "Reportes automatizados para la junta directiva"
          ]}
        />

        <FeatureSection
          title="Control de Presupuestos"
          subtitle="Precisión financiera milimétrica"
          icon={<Calculator className="h-7 w-7" />}
          align="left"
          image={constructaBudget}
          imageAlt="Gestión de Presupuestos"
          features={[
            "Exportación directa a Excel",
            "Comparativa Línea Base vs Ejecución Real",
            "Control de precios unitarios y APU",
            "Comparación de presupuesto vs ejecución real"
          ]}
        />

        <FeatureSection
          title="Gestión de Proyectos"
          subtitle="Domina el cronograma de obra"
          icon={<Building2 className="h-7 w-7" />}
          align="right"
          image={constructaProjects}
          imageAlt="Gestión de Proyectos"
          features={[
            "Diagramas de Gantt interactivos",
            "Registro de diario de obra digital",
            "Gestión de incidencias y RFI",
            "Control de avance físico vs financiero"
          ]}
        />

        <FeatureSection
          title="Capital Humano"
          subtitle="Gestiona tu recurso más valioso"
          icon={<Users className="h-7 w-7" />}
          align="left"
          image={constructaTeam}
          imageAlt="Gestión de Personal"
          features={[
            "Gestión de usuarios y personal en obra",
            "Control de roles y permisos",
            "Flujos de aprobación y seguimiento en proyectos"
          ]}
        />

        <FeatureSection
          title="Contabilidad Integrada"
          subtitle="Finanzas claras, cuentas sanas"
          icon={<Wallet className="h-7 w-7" />}
          align="right"
          image={constructaAccounting}
          imageAlt="Módulo Contable"
          features={[
            "Conciliación bancaria",
            "Centro de costos por proyecto",
            "Estados financieros en tiempo real"
          ]}
        />
      </div>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Transforma tu Constructora Hoy
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-300">
              Únete a las empresas líderes que ya están construyendo el futuro con nuestra plataforma.
            </p>

            <div className="flex flex-col items-center gap-8">
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="h-16 rounded-full bg-white px-10 text-xl font-bold text-slate-950 transition-transform hover:scale-105"
                  >
                    Empezar Transformación
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Agenda tu Demo Personalizada</DialogTitle>
                  </DialogHeader>
                  <ContactForm onSuccess={() => setIsContactOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Constructa;
