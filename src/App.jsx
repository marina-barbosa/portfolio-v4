import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import ServicesList from "./components/services-list";
import About from "./components/about";
import { Footer } from "./components/footer";
import ScrollMarquee from "./components/scroll-marquee";
import Trajetoria from "./components/trajetoria";
import { Testimonials } from "./components/testimonials";
import CosmicHero from "./z-experimental/gradient-orb";
import { StarryBackground } from "./fx/starry-background";
import { MouseMaskWindow } from "./fx/mouse-mask-window";
import MouseColorChanger from "./fx/mouse-color-changer";
import { Glitch } from "./fx/glitch";
import { HackerScrambles } from "./fx/hacker-scrambles";
import { ProjectsScrollTrigger } from "./components/projects-scroll-trigger";
import { RevealTextFx } from "./fx/reveal-text";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col antialiased">
        <StarryBackground />
        <MouseColorChanger />
        <MouseMaskWindow />
        <HackerScrambles />
        <RevealTextFx />
        <NavbarScrollspy />
        <Glitch />
        <SocialIcons />
        <span className="flex flex-col space-y-[6rem]">
          <Hero />
          <ProjectsScrollTrigger />
          <ServicesList />
          <About />
          <ScrollMarquee />
          {/* <Trajetoria /> */}
          {/* <Testimonials /> */}
          <Footer />
        </span>
        {/*

        */}
      </div>
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
