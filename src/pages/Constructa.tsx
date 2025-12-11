import { useState } from "react";
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
  CheckCircle2,
  FileText,
  BarChart3,
  Calculator,
  Building2,
  MapPin,
  Users,
  Wallet,
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

interface FeatureSectionProps {
  title: string;
  description?: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  description,
  features,
  image,
  imageAlt,
  icon,
  reverse = false,
}: FeatureSectionProps) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div
        className={`flex flex-col items-center gap-12 lg:gap-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Image */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-2xl" />
            <img
              src={image}
              alt={imageAlt}
              className="relative w-full max-w-md mx-auto animate-float drop-shadow-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-accent-foreground">
            {icon}
            <span className="text-sm font-medium">Módulo</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mb-6 text-lg text-muted-foreground">{description}</p>
          )}

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Constructa = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-foreground pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-primary-foreground/5 blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 lg:flex-row lg:gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Constructa — Control total para tu empresa constructora
            </h1>

            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              Gestiona compras, proyectos, presupuestos, personal y contabilidad
              desde un solo lugar. La plataforma integral que tu constructora necesita.
            </p>

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl"
                >
                  Solicitar demostración
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Solicitar demostración de Constructa</DialogTitle>
                </DialogHeader>
                <ContactForm onSuccess={() => setIsContactOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Hero Image */}
          <div className="mt-12 flex-1 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary-foreground/5 blur-2xl" />
              <img
                src={constructaHero}
                alt="Dashboard principal de Constructa con paneles de control y analytics"
                className="relative w-full max-w-2xl animate-float rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        title="Gestión de Órdenes de Compra"
        icon={<FileText className="h-5 w-5" />}
        image={constructaOrders}
        imageAlt="Módulo de órdenes de compra con documentos y flujos de aprobación"
        features={[
          "Creación automática de órdenes desde requisiciones",
          "Flujo de aprobaciones personalizable por niveles",
          "Control y evaluación de proveedores",
          "Seguimiento del estado en tiempo real",
        ]}
      />

      <div className="bg-card">
        <FeatureSection
          title="Dashboards Ejecutivos"
          description="Visualiza el estado de tu empresa en tiempo real con paneles diseñados para la toma de decisiones."
          icon={<BarChart3 className="h-5 w-5" />}
          image={constructaDashboard}
          imageAlt="Dashboard ejecutivo con gráficos y métricas de rendimiento"
          features={[
            "KPIs en tiempo real de todos tus proyectos",
            "Análisis de costos, avances, tiempos y rendimientos",
            "Panel unificado para gerencia y directivos",
            "Exportación de reportes personalizados",
          ]}
          reverse
        />
      </div>

      <FeatureSection
        title="Presupuestos"
        icon={<Calculator className="h-5 w-5" />}
        image={constructaBudget}
        imageAlt="Módulo de presupuestos con tablas y cálculos automáticos"
        features={[
          "Creación de presupuestos detallados por proyecto",
          "Versionado y comparativos históricos",
          "Cálculo automático de cantidades y costos",
          "Exportación e importación en múltiples formatos",
        ]}
      />

      <div className="bg-card">
        <FeatureSection
          title="Gestión de Proyectos"
          description="Controla cada fase de tus proyectos de construcción con herramientas especializadas."
          icon={<Building2 className="h-5 w-5" />}
          image={constructaProjects}
          imageAlt="Gestión de proyectos de construcción con cronogramas y edificios"
          features={[
            "Definición y seguimiento de etapas del proyecto",
            "Gestión de actividades, hitos y entregables",
            "Control de avance físico y financiero",
            "Alertas automáticas de desviaciones",
          ]}
          reverse
        />
      </div>

      <FeatureSection
        title="Localizaciones"
        icon={<MapPin className="h-5 w-5" />}
        image={constructaLocations}
        imageAlt="Mapa con ubicaciones de proyectos y obras de construcción"
        features={[
          "Registro de obras, oficinas y sedes",
          "Localización geográfica de proyectos activos",
          "Información logística centralizada",
          "Gestión de recursos por ubicación",
        ]}
      />

      <div className="bg-card">
        <FeatureSection
          title="Gestión de Personal"
          description="Administra tu equipo de trabajo con todas las herramientas necesarias."
          icon={<Users className="h-5 w-5" />}
          image={constructaTeam}
          imageAlt="Gestión de personal con perfiles de usuario y roles"
          features={[
            "Asignación de roles y permisos granulares",
            "Control documental del personal",
            "Gestión de equipos de trabajo por proyecto",
            "Historial de actividades y rendimiento",
          ]}
          reverse
        />
      </div>

      <FeatureSection
        title="Contabilidad Integrada"
        icon={<Wallet className="h-5 w-5" />}
        image={constructaAccounting}
        imageAlt="Módulo de contabilidad con gráficos financieros y calculadora"
        features={[
          "Conciliación bancaria automatizada",
          "Registro y categorización de gastos",
          "Estados financieros en tiempo real",
          "Integración con sistemas contables externos",
        ]}
      />

      {/* CTA Final Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent-foreground">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Image */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-primary-foreground/5 blur-2xl" />
                <img
                  src={constructaIntegrated}
                  alt="Sistema integrado Constructa con todos los módulos conectados"
                  className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Transforma tu constructora con Constructa
              </h2>

              <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
                Únete a las empresas que ya optimizaron sus operaciones con nuestra plataforma integral.
              </p>

              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg shadow-lg transition-all hover:shadow-xl"
                  >
                    Solicitar asesoría
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Solicitar asesoría de Constructa</DialogTitle>
                  </DialogHeader>
                  <ContactForm onSuccess={() => setIsContactOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Constructa;
