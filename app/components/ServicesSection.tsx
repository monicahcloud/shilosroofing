import {
  Building2,
  Home,
  Wrench,
  Layers,
  PaintBucket,
  Hammer,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "General Construction",
    description:
      "From foundations to finishing touches, we build with precision and care. Your vision, our expertise.",
  },
  {
    icon: Layers,
    title: "Clay Tile Repair & Restoration",
    description:
      "Preserve the classic beauty of your clay tile roof with expert repairs and meticulous restoration.",
  },
  {
    icon: Home,
    title: "Metal Roof Services",
    description:
      "Installation, repair, and restoration of durable metal roofing systems built to withstand island weather.",
  },
  {
    icon: PaintBucket,
    title: "PVC Flat Roof Solutions",
    description:
      "Professional PVC flat roof repair and installation for reliable, long-lasting protection.",
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Keep your property in peak condition with our comprehensive maintenance services.",
  },
  {
    icon: Hammer,
    title: "Bermuda Roof Restoration",
    description:
      "Specialized restoration of iconic Bermuda-style roofs, preserving tradition with modern techniques.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mt-10 mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-lg">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Craftsmanship You Can Count On
          </h2>
          <p className="text-muted-foreground text-lg">
            From rooftops to foundations, we bring decades of expertise and
            unwavering dedication to every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
