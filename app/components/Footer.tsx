import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-6">
          {/* Brand */}
          <div className="lg:col-span-2 ">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  S
                </span>
              </div>
              <div>
                <span className="font-serif font-semibold text-secondary-foreground text-lg">
                  Shilos
                </span>
                <span className="text-secondary-foreground/70 text-xs block -mt-1">
                  Roofing & Construction
                </span>
              </div>
            </Link>

            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Nassau&apos;s trusted roofing and construction experts. We bring
              heartfelt service and exceptional craftsmanship to every project,
              protecting Bahamian homes with quality built to last.
            </p>

            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">Proudly serving the Bahamas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                // { label: "Products", href: "/products" },
                { label: "About Us", href: "#about" },
                // { label: "Gallery", href: "/gallery" },
                // { label: "Testimonials", href: "/testimonials" },
                //  { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-secondary-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:242-819-7060"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>242-819-7060</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:majorroofingandcons2025@gmail.com"
                  className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-1 shrink-0" />
                  <span className="break-all text-sm">
                    majorroofingandcons2025@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Nassau, Bahamas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center space-y-2">
          <p className="text-secondary-foreground/60 text-md">
            © {currentYear} Shilos Roofing &amp; Construction. All rights
            reserved.
          </p>

          <p className="text-secondary-foreground/50 text-md">
            Designed &amp; Developed by{" "}
            <a
              href="https://vitanovadesigns.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors">
              VitaNova Designs and Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
