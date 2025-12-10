import { Users, BarChart3, Zap, Settings, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Analytics Avanzado",
    description: "Dashboards interactivos y reportes en tiempo real para tomar decisiones informadas.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimiza procesos repetitivos y aumenta la productividad de tu equipo.",
  },
  {
    icon: Cloud,
    title: "Integraciones Cloud",
    description: "Conecta todas tus herramientas en un ecosistema unificado y eficiente.",
  },
  {
    icon: Settings,
    title: "Software a Medida",
    description: "Desarrollamos soluciones personalizadas que se adaptan a tu negocio.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Protección de datos y cumplimiento normativo para tu tranquilidad.",
  },
  {
    icon: Users,
    title: "Consultoría IT",
    description: "Asesoría experta para transformar digitalmente tu organización.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Soluciones que <span className="text-primary">impulsan</span> tu negocio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ofrecemos un conjunto completo de servicios tecnológicos diseñados para transformar y escalar tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
