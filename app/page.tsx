import About from "./components/About";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ServicesSection />
        <About />
      </main>
    </div>
  );
}
