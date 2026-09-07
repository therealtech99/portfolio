import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { WhyHireMe } from "@/components/WhyHireMe";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Resume />
      <WhyHireMe />
      <Contact />
    </main>
  );
}
