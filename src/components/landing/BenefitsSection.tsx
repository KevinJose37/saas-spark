import cardCustomers from "@/assets/card-customers.png";
import cardAnalytics from "@/assets/card-analytics.png";
import cardGrowth from "@/assets/card-growth.png";
import cardSales from "@/assets/card-sales.png";

const benefits = [
  {
    title: "Clientes totales",
    value: "+100",
    image: cardCustomers,
    alt: "Ilustración 3D de clientes satisfechos con gráfica de crecimiento",
  },
  {
    title: "Analítica de datos",
    subtitle: "Insights en tiempo real",
    image: cardAnalytics,
    alt: "Gráfica de barras colorida mostrando análisis de datos",
  },
  {
    title: "Crecimiento general",
    subtitle: "Métricas clave",
    image: cardGrowth,
    alt: "Gráfica 3D de crecimiento empresarial",
  },
  {
    title: "Horas de trabajo ahorradas",
    value: "+1000",
    image: cardSales,
    alt: "Icono de redes sociales y marketing digital",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            La única <span className="text-primary">empresa</span> capaz de proveer todas
            <br />
            las <span className="text-primary">herramientas</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Desarrollamos las soluciones necesarias para resolver las problemáticas y puntos de mejora en tu negocio.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-accent/30">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                {benefit.value && (
                  <p className="text-2xl font-bold text-primary">{benefit.value}</p>
                )}
                {benefit.subtitle && (
                  <p className="text-sm text-muted-foreground">{benefit.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
