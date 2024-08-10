import Header from "./components/Header";
import GetStart from "./section/getStart";
import AboutUs from "./section/AboutUs";
import Menu from "./section/Menu";
import ClientGrid from "./section/clientGrid";
import Contact from "./section/contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <header className="w-[100%]">
        <Header />
      </header>
      <main className="w-[100%]">
        <GetStart />
        <AboutUs />
        <Menu />
        <ClientGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
