import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Roberto Sánchez",
    role: "CEO & Fundador",
    initials: "RS",
    bio: "15+ años liderando proyectos de transformación digital.",
  },
  {
    name: "Laura Fernández",
    role: "CTO",
    initials: "LF",
    bio: "Experta en arquitectura de software y soluciones cloud.",
  },
  {
    name: "Miguel Torres",
    role: "Director de Producto",
    initials: "MT",
    bio: "Especialista en UX y desarrollo de productos SaaS.",
  },
  {
    name: "Carmen López",
    role: "Head of Sales",
    initials: "CL",
    bio: "10+ años en ventas B2B de soluciones empresariales.",
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
              className="group rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
