/* eslint-disable react/no-unescaped-entities */
import TimeIcon from "../assets/icons/time-icon";
import MapIcon from "../assets/icons/map-icon";
import PhoneIcon from "../assets/icons/phone-icon";

export default function Contact() {
  return (
    <>
      <section className="w-full flex-col justify-center items-center mt-20 mb-40 md:mb-4 ">
        <h3 className="font-raleway-regular text-lg text-center text-[orange]">
          Contact
        </h3>
        <p className="font-raleway-black text-3xl text-center">
          We're Waiting for you!
        </p>
      </section>

      <section className="w-[80%] m-auto h-12 flex flex-col md:flex-row justify-center items-center mt-20 mb-60 md:mb-40 gap-3">
        <div className="flex flex-col justify-center items-center w-full md:w-[25%] h-auto rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <article className="flex flex-col justify-center items-center p-3">
            <TimeIcon />
            <p className="font-raleway-semibold text-lg ">Today 12 pm - 9 pm</p>
            <p className="font-raleway-regular text-sm text-gray-600">
              Working Hours
            </p>
          </article>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[25%] h-auto rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] b">
          <article className="flex flex-col justify-center items-center p-3">
            <MapIcon />
            <p className="font-raleway-semibold text-lg ">
              3883 Repert st. Vancouver
            </p>
            <p className="font-raleway-regular text-sm text-gray-600">
              Vancouver, BC
            </p>
          </article>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[25%] h-auto rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <article className="flex flex-col justify-center items-center p-3">
            <PhoneIcon />
            <p className="font-raleway-semibold text-lg ">(604) 555-1234</p>
            <p className="font-raleway-regular text-sm text-gray-600">Phone</p>
          </article>
        </div>
      </section>
    </>
  );
}
