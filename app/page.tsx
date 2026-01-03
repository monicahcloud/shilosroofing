import About from "./components/About";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <main className=" ">
        <HeroSection />
        <ServicesSection />
        <About />
      </main>
    </div>
  );
}
