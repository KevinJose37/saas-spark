import { Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    description: "Empoderar a las empresas con tecnología innovadora que simplifique sus operaciones y acelere su crecimiento.",
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Ser el socio tecnológico preferido de las empresas latinoamericanas en su camino hacia la transformación digital.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Innovación, compromiso, transparencia y excelencia en cada proyecto que desarrollamos.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Nosotros
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Más de <span className="text-primary">10 años</span> transformando empresas
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              En SoftPro Solutions, somos un equipo de profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes. Desde 2014, hemos ayudado a más de 100 empresas a digitalizar sus operaciones y alcanzar sus objetivos de negocio.
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              Nuestra experiencia abarca desde startups hasta grandes corporaciones, ofreciendo soluciones escalables y personalizadas que se adaptan a las necesidades únicas de cada organización.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Años</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted-foreground">Clientes</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Expertos</span>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon size={28} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
