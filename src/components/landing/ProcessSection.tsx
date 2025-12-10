const steps = [
  {
    number: "1",
    title: "Reunión inicial",
    description: "Conocemos tu negocio y objetivos",
  },
  {
    number: "2",
    title: "Toma de requerimientos",
    description: "Definimos las funcionalidades clave",
  },
  {
    number: "3",
    title: "Puesta en marcha",
    description: "Implementación y lanzamiento",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nuestro <span className="text-accent-foreground">mejor</span>
            <br />
            <span className="text-accent-foreground">método</span>, para tu
            <br />
            compañía.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Garantizamos las soluciones necesarias para resolver las problemáticas y puntos de mejora en tu negocio.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mx-auto max-w-4xl">
          {/* Curved Path SVG */}
          <svg
            className="absolute left-0 top-1/2 hidden h-24 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 800 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M50 80 Q200 10, 400 50 Q600 90, 750 30"
              stroke="hsl(var(--destructive))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="opacity-60"
            />
          </svg>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step dot */}
                <div className="mb-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive shadow-lg" />
                
                {/* Step number */}
                <span className="mb-2 text-6xl font-bold text-foreground/10 md:text-7xl lg:text-8xl">
                  {step.number}
                </span>
                
                {/* Step content */}
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
