import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield, Award, Users } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpeg"
          alt="Man on roof working"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-secondary/80 via-secondary/70 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 py-16 md:py-24 text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-cream text-sm font-medium">
              Nassau&apos;s Trusted Roofing & Construction Experts
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6 animate-fade-up delay-100">
            Protect Your Home With{" "}
            <span className="text-primary">Quality You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl animate-fade-up delay-200">
            Family-owned and deeply rooted in the Bahamas, we bring honest
            craftsmanship and heartfelt service to every roof we touch. Your
            home deserves the best — and so do you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:242-819-7060" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 242-819-7060
              </a>
            </Button>
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

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-cream font-semibold">Fully Licensed</p>
                <p className="text-cream/70 text-sm">& Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-cream font-semibold">Quality Guaranteed</p>
                <p className="text-cream/70 text-sm">Built to Last</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-cream font-semibold">Family Owned</p>
                <p className="text-cream/70 text-sm">Local Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
