import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "TechCorp", initials: "TC" },
  { name: "Innovate Labs", initials: "IL" },
  { name: "Global Solutions", initials: "GS" },
  { name: "DataFlow", initials: "DF" },
  { name: "CloudBase", initials: "CB" },
  { name: "SmartSys", initials: "SS" },
  { name: "TechCorp", initials: "TC" },
  { name: "Innovate Labs", initials: "IL" },
  { name: "Global Solutions", initials: "GS" },
  { name: "DataFlow", initials: "DF" },
  { name: "CloudBase", initials: "CB" },
  { name: "SmartSys", initials: "SS" },
];

const testimonials = [
  {
    quote: "TecnoAtom transformó completamente nuestra operación. Los dashboards nos dan visibilidad total del negocio.",
    author: "María González",
    role: "CEO, TechCorp",
    initials: "MG",
  },
  {
    quote: "La automatización que implementaron nos ahorró más de 200 horas mensuales en procesos manuales.",
    author: "Carlos Rodríguez",
    role: "Director de Operaciones, Innovate Labs",
    initials: "CR",
  },
  {
    quote: "Excelente equipo, profesionales y comprometidos. Superaron nuestras expectativas.",
    author: "Ana Martínez",
    role: "CTO, Global Solutions",
    initials: "AM",
  },
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="bg-card py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Clientes
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Empresas que <span className="text-primary">confían</span> en nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Más de 100 empresas han transformado sus operaciones con nuestras soluciones.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16 w-full">
          <Carousel
            plugins={[
              Autoplay({
                delay: 1200,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-8">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-8 basis-1/2 md:basis-1/3 lg:basis-[22%]">
                  <div className="flex h-32 items-center justify-center rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      {client.initials}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-background p-8 shadow-md"
            >
              <div className="mb-6 text-4xl text-primary">"</div>
              <p className="mb-6 text-foreground/80 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
