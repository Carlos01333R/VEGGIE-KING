import AboutSectionFoot from "/src/assets/images/about-us-section-food.png";
import { Image } from "@nextui-org/image";

export default function AboutUs() {
  return (
    <>
      <main className="font-raleway-regular w-full flex flex-col md:flex-row justify-center items-center h-[500px] mt-[45%] md:mt-0 gap-10">
        <section className="w-full md:w-[50%]  h-[250px] md:h-full flex flex-col justify-center items-center ">
          <div className="flex  flex-col md:flex-row md:w-[100%]">
            <section className="md:w-[50%] ">
              <div className="relative w-full md:w-[500px] h-[10px] md:h-[500px] bg-[#2c8240] rounded-full md:left-[-50%] "></div>
            </section>

            <section className="relativo flex justify-center items-center md:w-[50%] ">
              <Image
                className="relative w-[250px] top-2 md:top-0 md:w-[550px] md:h-[330px]  md:-left-[60%] object-contain"
                src={AboutSectionFoot}
                alt="img about us section"
              />
            </section>
          </div>
        </section>

        <section className="w-full md:w-[50%] h-[250px] md:h-full flex flex-col justify-center items-center">
          <div className="md:text-start w-[80%]">
            <a className="text-[orange] text-2xl" href="#">
              About Us
            </a>
            <p className="font-raleway-black text-4xl">Few words about us</p>
            <p className="md:w-[500px] text-gray-600 ">
              We are not ordering food trunk, we create a place overflowing with
              posive energy that it expresses important to us value, Get to know
              us and our food, and discover our culture.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
