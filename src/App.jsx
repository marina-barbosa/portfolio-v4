import { NavbarScrollspy } from "./components/navbar-scrollspy";
import { SocialIcons } from "./components/social-icons";
import { Hero } from "./components/hero";
import  ProjectsSection  from "./components/projects";
import ServicesList from "./components/services-list";
import About from "./components/about";

const App = () => {
  return (
    <>
      <NavbarScrollspy />
      <SocialIcons />
      <Hero />
      <ProjectsSection />
      <ServicesList />
      <About />
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
