import GalleryPhoto1 from "/src/assets/images/gallery-photo-1.png";
import GalleryPhoto2 from "/src/assets/images/gallery-photo-2.png";
import GalleryPhoto3 from "/src/assets/images/gallery-photo-3.png";
import GalleryPhoto4 from "/src/assets/images/gallery-photo-4.png";
import GalleryPhoto5 from "/src/assets/images/gallery-photo-5.png";
import GalleryPhoto6 from "/src/assets/images/gallery-photo-6.png";
import { Image } from "@nextui-org/image";

export default function ClientGrid() {
  const PictureClient = [
    { image: GalleryPhoto1 },
    { image: GalleryPhoto2 },
    { image: GalleryPhoto3 },
    { image: GalleryPhoto4 },
    { image: GalleryPhoto5 },
    { image: GalleryPhoto6 },
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
        className="w-full mb-10 md:max-w-[1400px] mx-auto"
      >
        {PictureClient.map((item, index) => (
          <div key={index} className="w-full bg-red-500">
            <Image
              removeWrapper={false}
              radius="none"
              sizes="100%"
              width={500}
              isBlurred={true}
              src={item.image}
              alt="gallery-photo"
              className=" h-[250px] object-cover opacity-90 hover:opacity-100"
            />
          </div>
        ))}
      </section>
    </>
  );
}
