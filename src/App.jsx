import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import  Projects from "./components/projects";
import ServicesList from "./components/services-list";
import About from "./components/about";
import { Footer } from "./components/footer";
import ScrollMarquee from "./fx/scroll-marquee";
import Trajetoria from "./components/trajetoria";
import { Testimonials } from "./components/testimonials";
import ProjectsSection from "./fx/projects-section";
import { ProjectsSectionExp } from "./fx/projects-section-exp";

const App = () => {
  return (
    <>
      <ProjectsSectionExp />
      {/* <NavbarScrollspy />
      <SocialIcons />
      <Hero />
      <ProjectsSection />
      <Projects />
      <ServicesList />
      <About />
      <ScrollMarquee />
      <Trajetoria />
      <Testimonials />
      <Footer /> */}
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
