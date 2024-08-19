const Content = ({ reference }) => {
  return (
    <section
      className="content-grid grid md:grid-cols-12 w-full h-fit"
      ref={reference}
    >
      <div className="bg-teal-600 col-span-6 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
        <div className="bg-custom-white p-20">
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
            <span className="learn-more border-b-primary-yellow"></span>
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
        <div className="bg-custom-white p-20">
          <h2 className="text-desat-blue text-4xl font-bold mb-4">
            Stand out to the right <br /> audience
          </h2>
          <p className="text-grayish-blue-1 mb-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="text-desat-blue font-bold uppercase z-10 relative">
            Learn more
            <span className="learn-more border-b-primary-red"></span>
          </p>
        </div>
      </div>

      <div className="bg-green-700 col-span-6">
        <img src="/images/desktop/image-graphic-design.jpg" alt="cherry" />
        <div className="text-center">
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <h2 className="text-grayish-blue-1 text-4xl font-bold mb-4">
            Graphic Design
          </h2>
          <p className="text-center text-grayish-blue-1 font-semibold">
            Great design makes you memorable. We deliver <br /> artwork that
            underscores your brand message <br />
            and captures potential clients’ attention.
          </p>
        </div>
      </div>

      <div className="bg-orange-800 col-span-6">
        <img src="/images/desktop/image-photography.jpg" alt="orange" />
        <div className="text-center">
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>
          <div className="p-5"></div>

          <h2 className="text-grayish-blue-1 text-4xl font-bold mb-4">
            Photography
          </h2>
          <p className=" md:text-center text-grayish-blue-1 font-semibold">
            Increase your credibility by getting the most <br /> stunning,
            high-quality photos that improve your <br /> business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
