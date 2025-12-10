import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    info: "Av. Reforma 123, CDMX, México",
  },
  {
    icon: Phone,
    title: "Teléfono",
    info: "+52 55 1234 5678",
  },
  {
    icon: Mail,
    title: "Email",
    info: "contacto@softpro.com",
  },
  {
    icon: Clock,
    title: "Horario",
    info: "Lun - Vie: 9:00 - 18:00",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Contacto
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            ¿Listo para <span className="text-primary">empezar</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">
              Envíanos un mensaje
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Empresa
                  </label>
                  <Input
                    placeholder="Tu empresa"
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="bg-background"
                />
              </div>
              <Button size="lg" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Información de contacto
              </h3>
              <p className="text-muted-foreground">
                Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios o llena el formulario.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium text-foreground">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 overflow-hidden rounded-2xl bg-muted/50">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <MapPin size={48} className="opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
