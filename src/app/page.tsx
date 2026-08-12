import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
