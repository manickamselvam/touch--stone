import "./App.css";
import travel_01 from "./assets/event-v1.mp4";

import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Book Events" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero videoSrc={travel_01} />

      <Cards />
      <Footer />
    </div>
  );
}

export default App;
