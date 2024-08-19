import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="relative">
      <div className="grid grid-cols-12 absolute top-0 w-full px-5 py-5 z-10 text-custom-white items-center">
        <div className="col-span-8 font-bold md:text-2xl px-5 py-1">
          sunnyside
        </div>
        <div
          className="col-span-4 justify-self-end px-5 cursor-pointer md:hidden"
          onClick={() => setShow((show) => !show)}
        >
          <img src="/images/icon-hamburger.svg" />
        </div>
        {show && (
          <div className=" clippy bg-custom-white w-3/4 min-h-80 flex flex-col justify-center absolute top-20 left-0 right-0 mr-auto ml-auto">
            <ul className=" flex flex-col justify-center items-center px-8 py-5 gap-4 text-lg font-semibold">
              <div></div>
              <div></div>
              <li className="text-grayish-blue-1">About</li>
              <li className="text-grayish-blue-1">Services</li>
              <li className="text-grayish-blue-1">Project</li>

              <button className="bg-primary-yellow px-5 py-2 uppercase rounded-full text-desat-blue font-semibold">
                contact
              </button>
            </ul>
          </div>
        )}

        <div className="col-span-4 hidden md:block">
          <ul className="grid grid-cols-4 justify-items-center items-center md:text-base cursor-pointer">
            <li className="list">About</li>
            <li className="list">Services</li>
            <li className="list">Project</li>
            <li className="list">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
