import TwitterIcon from "../assets/icons/twitter-icon";
import InstagramIcon from "../assets/icons/instagram-icon";
import FacebookIcon from "../assets/icons/facebook-icon";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleSmoothScrollAboutUs = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleSmoothScrollMenu = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };

  const handleSmoothScrollContact = () => {
    window.scrollTo({ top: 2100, behavior: "smooth" });
  };

  return (
    <>
      <footer className=" w-full h-auto bg-slate-200 font-raleway-regular gap-5 md:gap-0 flex-col ">
        <section className="flex w-[90%] flex-col md:flex-row  m-auto items-center justify-between pb-14 ">
          <article className="w-[90%] flex flex-col md:flex-row gap-2 m-auto justify-between items-center ">
            <div className="p-2 ">
              <img
                className="hover:scale-105 transition-transform duration-500"
                src="/src/assets/icons/logo.svg"
                alt=""
              />
            </div>
            <div className="flex gap-2 p-2 relative  font-raleway-semibold md:left-5 ">
              <button
                className="text-sm hover:text-[orange] hover:underline transition-all duration-500"
                onClick={handleSmoothScrollAboutUs}
              >
                ABOUT US
              </button>
              <button
                className="text-sm hover:text-[orange] hover:underline transition-all duration-500"
                onClick={handleSmoothScrollMenu}
              >
                MENU
              </button>
              <button
                className="text-sm hover:text-[orange] hover:underline transition-all duration-500"
                onClick={handleSmoothScrollContact}
              >
                CONTACT
              </button>
            </div>
            <div className="w-[300px] pt-6 flex flex-col  ">
              <p className="text-sm text-center md:text-left">
                Experience the taste of authentic cuisine and exceptional
                service. Join us for an unforgettable dining experience.
              </p>

              <div className="flex gap-2 mt-5 md:mt-2 justify-center items-center md:justify-normal md:items-start">
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
          </article>

          <hr />
        </section>
        <section className="font-raleway-regular">
          <article className="w-[90%] m-auto ">
            <hr className="border-1 border-gray-900 my-4" />

            <p className="md:ml-12 text-center md:text-left">
              © 2023 Veggie King. All rights reserved.
            </p>
          </article>
        </section>
      </footer>
    </>
  );
}
