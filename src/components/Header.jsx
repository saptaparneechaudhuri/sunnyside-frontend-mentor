const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-12 absolute top-0 w-full px-5 py-5 z-10 text-custom-white">
        <div className="col-span-8 font-bold md:text-2xl px-5 py-1">
          sunnyside
        </div>
        <ul className=" col-span-4  grid grid-cols-4 justify-items-center items-center md:text-base cursor-pointer">
          <li className="list">About</li>
          <li className="list">Services</li>
          <li className="list">Project</li>
          <li className="list">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
