"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  // { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  // { href: "#gallery", label: "Gallery" },
  // { href: "#testimonials", label: "Testimonials" },
  // { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              // If you're already on the homepage, just scroll to top
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.replaceState(null, "", "/"); // clears any #hash
              }
            }}
            className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">
                S
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-semibold text-foreground text-lg">
                Shilos
              </span>
              <span className="text-muted-foreground text-xs block -mt-1">
                Roofing & Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 font-medium ${
                  activeHash === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:242-819-7060"
              className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <span>242-819-7060</span>
            </a>

            <Button
              variant="hero-outline"
              size="xl"
              asChild
              className="hover:text-amber-400">
              <a
                href="mailto:majorroofingandcons2025@gmail.com"
                className="flex items-center gap-2 ">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-up">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-3 transition-colors ${
                    activeHash === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
