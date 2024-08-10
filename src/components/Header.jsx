import { useEffect, useState } from "react";
import MenuHamburguesa from "../assets/icons/menuHamburguesa";
import MenuClose from "../assets/icons/menuClose";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      <header className="font-raleway-regular flex w-[100%] text-black  justify-between items-center bg-white py-3 px-3 md:px-12 shadow-md z-50 ">
        <section className="md:ml-6 flex items-center">
          <img src="/src/assets/icons/logo.svg" alt="Logo" />
        </section>
        <section className="flex items-center justify-center gap-2 ">
          <button
            onClick={handleSmoothScrollAboutUs}
            className="md:block hidden"
          >
            ABOUT US
          </button>
          <button onClick={handleSmoothScrollMenu} className="md:block hidden">
            MENU
          </button>
          <button
            onClick={handleSmoothScrollContact}
            className="md:block hidden"
          >
            CONTACT
          </button>

          {isOpen ? (
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MenuClose />
            </button>
          ) : (
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MenuHamburguesa />
            </button>
          )}
        </section>
      </header>

      {isOpen && (
        <section className="flex justify-center items-center w-full h-11 shadow-xl gap-3 text-gray-600 ">
          <button onClick={handleSmoothScrollAboutUs}>ABOUT US</button>
          <button onClick={handleSmoothScrollMenu}>MENU</button>
          <button onClick={handleSmoothScrollContact}>CONTACT</button>
        </section>
      )}
    </>
  );
}
