import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              SoftPro
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground/80" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className={`${
                isScrolled
                  ? ""
                  : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              }`}
            >
              Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border/20 bg-card py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full">
                  Cotización
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
