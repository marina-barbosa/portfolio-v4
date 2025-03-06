import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import ServicesList from "./components/services-list";
import About from "./components/about";
import { Footer } from "./components/footer";
import ScrollMarquee from "./components/scroll-marquee";
import Trajetoria from "./components/trajetoria";
import { Testimonials } from "./components/testimonials";
import { StarryBackground } from "./fx/starry-background";
import { MouseMaskWindow } from "./fx/mouse-mask-window";
import MouseColorChanger from "./fx/mouse-color-changer";
import { Glitch } from "./fx/glitch";
import { HackerScrambles } from "./fx/hacker-scrambles";
import { ProjectsScrollTrigger } from "./components/projects-scroll-trigger";
import { RevealTextFx } from "./fx/reveal-text";
import { Logo } from "./components/logo";
import MobileProjects from "./components/mobile-projects";

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
        <Logo />
        <SocialIcons />
        <Hero />
        <span className="flex flex-col space-y-[6rem]">
          <span id="projetos" className="block h-[100px] mt-[-100px]" />
          <MobileProjects />
          <ProjectsScrollTrigger />
          <ServicesList />
          <span id="projetos-fim" className="block h-[100px] mt-[-100px]" />
          <span id="sobre" className="block h-[100px] mt-[-100px]" />
          <About />
          <ScrollMarquee />
          <Trajetoria />
          {/* <Testimonials /> */}
          <span id="sobre-fim" className="block h-[100px] mt-[-100px]" />
          <span
            id="contato"
            className="block h-[100px] 2xl:h-[300px] mt-[-300px] 2xl:mt-[-400px]"
          />
          <Footer />
        </span>
      </div>
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
