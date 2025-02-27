import HoverEffectText from "./components/fx/mouse-color-changer";
import { UmTexto } from "./components/fx/um-texto";

const App = () => {
  return (
    <>
      <HoverEffectText />
      <UmTexto />
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-sky-600 hover-effect">
          app app app app app app app
        </h1>
        <h1 className="text-3xl font-bold text-green-600">
          app app app app app app app
        </h1>
        <h1 className="text-3xl font-bold text-black hover-effect">
          app app app app app app app
        </h1>
      </div>
    </>
  );
  // quem vc é?
  // oq vc faz?
  // oq vc ja fez? 
};

export default App;
