import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}