const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">SoftPro Solutions</h3>
            <p className="max-w-sm text-card/70">
              Transformamos empresas con soluciones de software innovadoras, analytics avanzado y automatización inteligente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-card/70">
              <li><a href="#" className="transition-colors hover:text-card">Servicios</a></li>
              <li><a href="#" className="transition-colors hover:text-card">Nosotros</a></li>
              <li><a href="#" className="transition-colors hover:text-card">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-2 text-card/70">
              <li>info@softpro.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card/20 pt-8 text-center text-sm text-card/50">
          <p>&copy; 2024 SoftPro Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
