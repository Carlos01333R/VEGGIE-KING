export default function ClientGrid() {
  const PictureClient = [
    {
      image: "/src/assets/images/gallery-photo-1.png",
    },
    {
      image: "/src/assets/images/gallery-photo-2.png",
    },
    {
      image: "/src/assets/images/gallery-photo-3.png",
    },
    {
      image: "/src/assets/images/gallery-photo-4.png",
    },
    {
      image: "/src/assets/images/gallery-photo-5.png",
    },
    {
      image: "/src/assets/images/gallery-photo-6.png",
    },
  ];
  return (
    <>
      <section className="w-[100%] md:w-full flex justify-center items-center mt-20 mb-4 font-raleway-semibold text-3xl">
        <h3
          className="text-center w-[80%] md:w-[100%]
        "
        >
          Good Food - Happy Clients
        </h3>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
        className="w-full mb-10"
      >
        {PictureClient.map((item, index) => (
          <div key={index} className="w-full">
            <img
              src={item.image}
              alt="gallery-photo"
              className="w-full h-[250px] object-cover opacity-90 hover:opacity-100"
            />
          </div>
        ))}
      </section>
    </>
  );
}
