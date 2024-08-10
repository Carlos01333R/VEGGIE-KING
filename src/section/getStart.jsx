import ImgPizza from "/src/assets/images/hero-section-slide-food-1.png";
import ImgLeft from "/src/assets/images/hero-section-food.png";
import LogoButtonMenu from "/src/assets/icons/check-menu-icon.svg";

export default function GetStart() {
  return (
    <>
      <main className="h-[500px] w-full flex-col  flex md:flex-row font-raleway-regular text-black">
        <section className="relative -top-32 w-[5%]">
          <img
            className="relative md:left-0 md:top-[100%] md:block hidden w-[100px]"
            src={ImgLeft}
            alt=""
          />
        </section>

        <section className="w-full h-[200px] md:w-[70%] md:h-auto bg-[#377c47] md:bg-white flex flex-col justify-center items-center mt-1">
          <article className="relative w-[80%] md:w-[100%] flex flex-col md:flex-row justify-center items-center">
            <div className="relative top-[450px] md:top-0 md:left-20 z-50 ">
              <p className="font-raleway-black text-6xl md:w-[500px]">
                Healthy & Fresh Food For You
              </p>
              <p className="md:w-[350px] mt-1 text-gray-600">
                Create for your family, friends, and the community. delicious
                food is the future.
              </p>
              <button className="mt-2 mb-2 p-3 px-3 rounded-lg bg-[#fa7a03] font-raleway-bold flex gap-2">
                Check Menu <img src={LogoButtonMenu} alt="" />
              </button>
            </div>

            <div className="md:w-[50%]">
              <img
                className="w-[250px] relative -top-[50%] md:-top-0 md:left-[50%] md:h-[350px] md:w-[550px] mb-2 md:mb-0 object-contain"
                src={ImgPizza}
                alt=""
              />
            </div>
          </article>
        </section>

        <section className=" w-full h-[300px] md:w-[25%] md:h-auto bg-white md:bg-[#2c8240]"></section>
      </main>
    </>
  );
}
