import "./App.css";
import HeroCard from "./components/HeroCard";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import SkillSection from "./sections/SkillSection";
import Testimonials from "./sections/Testiminials";

function App() {
  return (
    <>
      <HeroSection
        about="I create functional, beautiful websites with great user experience.
       I can build anything from portfolios to e-commerce sites.
       Let’s create something great together."
      />
      {/* <HeroCard /> */}
      <SkillSection />
      <ProjectsSection/>
      <ServicesSection />
      <ContactSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
