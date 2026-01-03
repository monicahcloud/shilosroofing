import { Heart, Target, Handshake, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Heartfelt Service",
    description: "We treat every home like it's our own family's home.",
  },
  {
    icon: Target,
    title: "Quality Focus",
    description: "We never cut corners. Every detail matters to us.",
  },
  {
    icon: Handshake,
    title: "Honest & Dependable",
    description: "Our word is our bond. We show up and deliver on promises.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream mt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-lg">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              Building Trust, One Roof at a Time
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Shilos Maintenance &amp; Construction is a proud Nassau-based
              company dedicated to protecting Bahamian homes with exceptional
              craftsmanship and genuine care. We understand that your home is
              your sanctuary, and we treat it with the respect it deserves.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team brings together years of experience, local expertise, and
              a deep commitment to our community. When you choose Shilos,
              you&apos;re not just hiring contractors — you&apos;re gaining
              partners who truly care about your home&apos;s protection and your
              family&apos;s peace of mind.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                "Free consultations and honest assessments",
                "Transparent pricing with no hidden fees",
                "Locally owned and operated in Nassau",
                "Committed to lasting relationships",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild>
              <a
                href="mailto:majorroofingandcons2025@gmail.com"
                className="flex items-center gap-2 ">
                <Mail className="w-5 h-5" />
                Get Your Free Consultation
              </a>
            </Button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex gap-5 p-6 bg-card rounded-xl shadow-soft border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
