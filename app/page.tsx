import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerHighlights from "@/components/CareerHighlights";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Listening from "@/components/Listening";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12">
      <Hero />
      <About />
      <CareerHighlights />
      <Projects />
      <Books />
      <Listening />
      <Contact />
    </div>
  );
}
