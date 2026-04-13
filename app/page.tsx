import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12">
      <Hero />
      <About />
    </div>
  );
}
