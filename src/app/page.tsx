import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import Results from "@/components/home/Results";
import Contact from "@/components/home/Contact";
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Results />
      <Contact />
      <Portfolio />
    </main>
  );
}
