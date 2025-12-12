import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "Cliente 1", logo: new URL('../../assets/cliente1.png', import.meta.url).href },
  { name: "Cliente 2", logo: new URL('../../assets/cliente2.png', import.meta.url).href },
  { name: "Cliente 3", logo: new URL('../../assets/cliente3.png', import.meta.url).href },
  { name: "Cliente 4", logo: new URL('../../assets/cliente4.png', import.meta.url).href },
  { name: "Cliente 5", logo: new URL('../../assets/cliente5.png', import.meta.url).href },
  { name: "Cliente 6", logo: new URL('../../assets/cliente6.png', import.meta.url).href },
  { name: "Cliente 7", logo: new URL('../../assets/cliente7.png', import.meta.url).href },
  { name: "Cliente 8", logo: new URL('../../assets/cliente8.png', import.meta.url).href },
  { name: "Cliente 9", logo: new URL('../../assets/cliente9.png', import.meta.url).href },
  { name: "Cliente 10", logo: new URL('../../assets/cliente10.png', import.meta.url).href },
  { name: "Cliente 11", logo: new URL('../../assets/cliente11.png', import.meta.url).href },
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
        <div className="w-full">
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
                  <div className="flex h-40 items-center justify-center rounded-xl bg-background p-4 shadow-sm transition-all hover:shadow-md grayscale hover:grayscale-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
