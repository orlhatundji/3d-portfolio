import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <div class="blocks-container">
        <div id="blocks"></div>
      </div>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
