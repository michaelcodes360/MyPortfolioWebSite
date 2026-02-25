import "./App.css";
import HeroCard from "./components/HeroCard";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import SkillSection from "./sections/SkillSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import { ToastContainer } from 'react-toastify';

const description =
  "Web development services offer businesses and individuals everything needed to build a strong online presence. These include website design, e-commerce solutions, content management, SEO, and ongoing support. Using various programming tools and frameworks, developers create responsive, user-friendly websites that effectively showcase the client's brand—whether simple sites or complex web applications—crucial for success in the digital world.";

function App() {
  return (
    <>
      <HeroSection />
      {/* <HeroCard /> */}
      <SkillSection />
      <ProjectsSection />
      <ServicesSection description={description} />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <ToastContainer />
    </>
  );
}

export default App;
