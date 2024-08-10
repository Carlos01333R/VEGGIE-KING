import MenuMightyBurger from "/src/assets/images/menu-section-mighty-burger.png";
import MenuChickpaeSalad from "/src/assets/images/menu-section-chickpae-salad.png";
import MenuChickpaeWrap from "/src/assets/images/menu-section-chickpae-wrap.png";

export default function Menu() {
  const menuFood = [
    {
      name: "Mighty Burger",
      description: "A classic burger with all the fixings.",
      image: MenuMightyBurger,
    },
    {
      name: "Chickpae's salad",
      description: "salad with chickpeas, tomatoes, cucumbers, and lettuce.",
      image: MenuChickpaeSalad,
    },
    {
      name: "Chickpae's wrap",
      description: "A classic wrap with all the fixings.",
      image: MenuChickpaeWrap,
    },
  ];
  return (
    <>
      <main className="mt-14 mb-10 w-[90%] m-auto">
        <section className="flex flex-col justify-center items-center w-[80%] m-auto">
          <h3 className="font-raleway-regular text-lg text-[orange]">Menu</h3>
          <p className="font-raleway-semibold font-bold text-5xl mt-2">
            Explore our best food
          </p>
          <p className="text-sm font-raleway-regular text-gray-600 mt-2">
            Our menu is a collection of the best foods from our restaurant.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            margin: "0 auto",
            gap: "1rem",
            marginTop: "40px",
          }}
        >
          {menuFood.map((item, index) => (
            <div
              className="w-[320px] md:w-[350px] h-[290px] md:h-[310px] rounded-b-xl shadow-xl mb-3 m-auto hover:scale-105 transition-transform duration-500"
              key={index}
            >
              <img className="" src={item.image} alt="" />

              <h3 className="ml-3 mt-2 font-raleway-black">{item.name}</h3>
              <p className="text-sm text-gray-600 ml-3">{item.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
