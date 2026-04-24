import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Experience from "@/component/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}