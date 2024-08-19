const Images = () => {
  return (
    <section className="bg-rose-100 grid md:grid-cols-12 grid-cols-2">
      <img
        src="/images/desktop/image-gallery-milkbottles.jpg"
        alt="milk-bottles"
        className="md:col-span-3"
      />
      <img
        src="/images/desktop/image-gallery-orange.jpg"
        alt="orange"
        className="md:col-span-3"
      />
      <img
        src="/images/desktop/image-gallery-cone.jpg"
        alt="cone"
        className="md:col-span-3"
      />
      <img
        src="/images/desktop/image-gallery-sugarcubes.jpg"
        alt="sugarcubes"
        className="md:col-span-3"
      />
    </section>
  );
};

export default Images;
