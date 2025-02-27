import { ButtonCosmic } from "./button-cosmic";
export const Hero = () => {
    return (
      <section className="mx-auto h-screen flex flex-col items-center justify-center bg-gray-100  ">
        <h1 className=" mx-auto max-w-[78vw] m-10 text-7xl font-raleway uppercase font-bold md:text-left text-center">
          the future <br />
          of extended reality
          <br />
          <span className="lg:text-center mx-auto block">2023</span>
        </h1>
        <div>
          <ButtonCosmic />
          <ButtonCosmic />
        </div>
      </section>
    );
};