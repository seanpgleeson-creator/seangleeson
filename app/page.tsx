import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerHighlights from "@/components/CareerHighlights";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Listening from "@/components/Listening";
import Contact from "@/components/Contact";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12">
      <Hero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <CareerHighlights />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Books />
      </SectionReveal>
      <SectionReveal>
        <Listening />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </div>
  );
}
