
import { ButtonCosmic } from "./button-cosmic";
export const Hero = () => {
    return (
      <section className="mx-auto h-screen flex flex-col items-center justify-center bg-gray-100  font-raleway">
        <h1 className=" mx-auto max-w-[78vw] m-10 mb-0 text-7xl uppercase font-bold text-center">
          You dream, I create. <br />
          Just like that.
        </h1>
        <h2 className="mt-4 mb-10 ">Fullstack Developer since 2023</h2>
        <div>
          <ButtonCosmic>say hi</ButtonCosmic>
          <ButtonCosmic>download cv</ButtonCosmic>
        </div>
      </section>
    );
};