import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import  Projects from "./components/projects";
import ServicesList from "./components/services-list";
import About from "./components/about";
import { Footer } from "./components/footer";
import ScrollMarquee from "./experimental/scroll-marquee";
import Trajetoria from "./components/trajetoria";
import { Testimonials } from "./components/testimonials";
import ProjectsSection from "./experimental/projects-section";
import { ProjectsSectionExp } from "./experimental/projects-section-exp";
import CosmicHero from "./experimental/gradient-orb";
import { StarryBackground } from "./fx/starry-background";
import { MouseMaskWindow } from "./fx/mouse-mask-window";
import MouseColorChanger from "./fx/mouse-color-changer";
import { Glitch } from "./fx/glitch";
import { HackerScrambles } from "./fx/hacker-scrambles";

const App = () => {
  return (
    <>
      <StarryBackground />
      <MouseColorChanger />
      <MouseMaskWindow />
      <HackerScrambles />
      <NavbarScrollspy />
      <Glitch />
      <SocialIcons />
      <Hero />
      {/* <ProjectsSectionExp /> */}
      {/* 
      <ProjectsSection />
      <Projects />
      <ServicesList />
      <About />
      <ScrollMarquee />
      <Trajetoria />
      <Testimonials />
      <Footer /> 
      */}
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
