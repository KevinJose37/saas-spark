import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/landing/ContactForm";

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
    info: "contacto@tecnoatom.com",
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
            <ContactForm />
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
            <div className="mt-8 h-64 overflow-hidden rounded-2xl bg-muted/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.15051342214!2d-73.1160690300353!3d7.121637499241337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e681561e8533a6b%3A0xe707682456016d47!2sCl%2036%20%2327-71%2C%20Mejoras%20P%C3%BAblicas%2C%20Bucaramanga%2C%20Santander!5e0!3m2!1ses!2sco!4v1765417476443!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
