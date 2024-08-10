const Content = () => {
  return (
    <section className="content-grid grid grid-cols-12 w-full h-fit">
      <div className="bg-teal-600 col-span-6">
        <div className="bg-custom-white">
          <h2 className="text-desat-blue text-4xl font-bold mb-4">
            Transform your <br /> brand
          </h2>
          <p className="text-grayish-blue-1 mb-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="text-desat-blue font-bold uppercase z-10 relative">
            Learn more
            <span className="learn-more"></span>
          </p>
        </div>
      </div>

      <div className="col-span-6 bg-slate-300">
        <img
          src="/images/desktop/image-transform.jpg"
          alt="transform"
          className=""
        />
      </div>

      <div className="col-span-6 bg-rose-500">
        <img src="/images/desktop/image-stand-out.jpg" alt="stand-out" />
      </div>

      <div className="col-span-6 bg-sky-600">
        {/* <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <p>Learn more</p> */}
      </div>

      <div className="bg-green-700 col-span-6">
        <img src="/images/desktop/image-graphic-design.jpg" alt="cherry" />
      </div>

      <div className="bg-orange-800 col-span-6">
        <img src="/images/desktop/image-photography.jpg" alt="orange" />
      </div>
    </section>
  );
};

export default Content;
