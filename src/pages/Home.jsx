import Navebar from "../components/Navebar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Expreince from "../components/Expreince";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Expreince />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
