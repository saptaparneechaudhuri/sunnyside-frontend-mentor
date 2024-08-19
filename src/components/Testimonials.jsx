const Testimonials = () => {
  return (
    <section className="bg-custom-white grid grid-cols-1 md:grid-cols-12   md:gap-8 md:p-20 p-5 justify-items-center">
      <h2 className="uppercase col-span-full tracking-widest font-bold text-grayish-blue-2">
        Client testimonials
      </h2>
      <div className="md:col-span-4 col-span-full flex flex-col items-center gap-10">
        <img
          src="/images/image-emily.jpg"
          alt="emily"
          className="rounded-full max-w-20 h-fit"
        />

        <p className="text-desat-blue text-lg font-medium text-center">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <p className="text-desat-blue font-bold text-base text-center">
          Emily R.
          <span className="block text-xs text-grayish-blue-3 mt-2">
            Marketing Director
          </span>
        </p>
      </div>

      <div className=" md:col-span-4 flex flex-col items-center gap-10">
        <img
          src="/images/image-thomas.jpg"
          alt="thomas"
          className="rounded-full max-w-20 h-fit"
        />

        <p className="text-desat-blue text-lg font-medium text-center">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>
        <p className="text-desat-blue font-bold text-base text-center">
          Thomas S.
          <span className="block text-xs text-grayish-blue-3 mt-2">
            Chief Operating Officer
          </span>
        </p>
      </div>

      <div className=" md:col-span-4 flex flex-col items-center gap-10">
        <img
          src="/images/image-jennie.jpg"
          alt="jennie"
          className="rounded-full max-w-20 h-fit"
        />

        <p className="text-desat-blue text-lg font-medium text-center">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <p className="text-desat-blue font-bold text-base text-center">
          Jennie F.
          <span className="block text-xs text-grayish-blue-3 mt-2">
            Business Owner
          </span>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
