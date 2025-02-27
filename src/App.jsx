import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import  ProjectsSection  from "./components/projects";
import ServicesList from "./components/services-list";
import About from "./components/about";
import { Footer } from "./components/footer";
import ScrollMarquee from "./fx/scroll-marquee";
import { Trajetoria } from "./components/trajetoria";
import { Testimonials } from "./components/testimonials";

const App = () => {
  return (
    <>
      <NavbarScrollspy />
      <SocialIcons />
      <Hero />
      <ProjectsSection />
      <ServicesList />
      <About />
      <div style={{ paddingTop: "50px" }}>
        {/* height: "200vh",  */}
        <ScrollMarquee />
      </div>
      <Trajetoria />
      <Testimonials />
      <Footer />
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
