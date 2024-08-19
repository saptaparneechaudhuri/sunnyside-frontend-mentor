import { useRef } from "react";
import Header from "./Header";

const Landing = ({ onClickArrow }) => {
  return (
    <section className="landing w-full h-screen bg-rose-200 relative">
      <div
        onClick={onClickArrow}
        className="uppercase absolute w-full top-1/4 text-5xl font-bold text-custom-white tracking-widest flex flex-col items-center  md:gap-24"
      >
        <h1 className="text-center">We are creatives</h1>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Landing;
