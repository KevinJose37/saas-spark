const team = [
  {
    name: "Santiago Rondon",
    role: "CEO",
    initials: "SR",
    bio: "Dirección estratégica para el crecimiento de soluciones empresariales y tecnológicas.",
  },
  {
    name: "Kevin Vargas",
    role: "CTO",
    initials: "KV",
    bio: "Experto en arquitectura de software y soluciones cloud.",
  },
  {
    name: "Harold Vargas",
    role: "Diseñador",
    initials: "HV",
    bio: "Especialista en UI/UX y desarrollo de productos SaaS.",
  },
  {
    name: "David Garzón",
    role: "Desarrollador",
    initials: "DG",
    bio: "Experiencia en desarrollo de software y soluciones empresariales.",
  },
  {
    name: "Katherinne Valderrama",
    role: "Diseñadora UX/UI",
    initials: "KV",
    bio: "Diseño de experiencias digitales intuitivas, funcionales y centradas en el usuario.",
  },
  {
    name: "Juan Gooner",
    role: "Desarrollador web y SEO",
    initials: "JG",
    bio: "Desarrollo de sitios web optimizados y estrategias SEO orientadas a resultados.",
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Equipo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Conoce a nuestro <span className="text-primary">equipo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Profesionales apasionados por la tecnología y comprometidos con tu éxito.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${index === 4 ? "lg:col-start-2" : ""
                }`}
            >
              {/* Avatar */}
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-foreground text-3xl font-bold text-primary-foreground shadow-lg">
                {member.initials}
              </div>

              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
