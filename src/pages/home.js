import "./home.css";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/layouts/NavigationBar";
import HeroSection from "../components/heroSection/heroSection";
import AboutMe from "../components/aboutMe/AboutMe";
import Skills from "../components/skills/skill";
import Project from "../components/project/project";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <div className="home">
      <NavigationBar />
      <Container>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Project />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
