import "./App.css";
import HeroCard from "./components/HeroCard";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import SkillSection from "./sections/SkillSection";
import Testimonials from "./sections/Testiminials";

function App() {
  return (
    <>
      <Hero
        about="I create functional, beautiful websites with great user experience.
       I can build anything from portfolios to e-commerce sites.
       Let’s create something great together."
      />
      {/* <HeroCard /> */}
      <SkillSection />
      <ProjectsSection/>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
