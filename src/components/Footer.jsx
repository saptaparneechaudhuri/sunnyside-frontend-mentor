const Footer = () => {
  return (
    <footer className="bg-moderate-cyan flex flex-col items-center gap-8 px-10 py-8">
      <h2 className="text-dark-cyan font-bold text-2xl">sunnyside</h2>
      <div className="flex gap-5 text-dark-cyan font-semibold cursor-pointer">
        <p className="hover:text-custom-white">About</p>
        <p className="hover:text-custom-white">Services</p>
        <p className="hover:text-custom-white">Projects</p>
      </div>

      <div className="flex gap-4 cursor-pointer">
        <img
          src="/images/icon-facebook.svg"
          alt="facebook"
          className="hover:fill-custom-white"
        />
        <img
          src="/images/icon-instagram.svg"
          alt="insta"
          className="hover:fill-custom-white"
        />
        <img
          src="/images/icon-twitter.svg"
          alt="twitter"
          className="hover:fill-custom-white"
        />
        <img
          src="/images/icon-pinterest.svg"
          alt="pinterest"
          className="hover:fill-custom-white"
        />
      </div>
    </footer>
  );
};

export default Footer;
