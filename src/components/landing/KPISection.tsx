const kpis = [
  { value: "12 Meses", label: "Prueba gratis" },
  { value: "+10M", label: "Usuarios" },
  { value: "+30", label: "Proyectos" },
];

const KPISection = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                {kpi.value}
              </span>
              <span className="text-lg text-muted-foreground">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
