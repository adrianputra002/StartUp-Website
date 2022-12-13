import { useRef, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Sections/Login";
function App() {
  const ref = useRef(null);
  const scrollHome = (e) => {
    const section = document.querySelector("#home");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollAbout = (e) => {
    const section = document.querySelector("#about");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollPricing = (e) => {
    const section = document.querySelector("#pricing");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollContact = (e) => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [isActive, setIsActive] = useState(false);
  const togglerHandler = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar
                isActive={isActive}
                togglerHandler={togglerHandler}
                setIsActive={setIsActive}
                scrollPricing={scrollPricing}
                scrollContact={scrollContact}
                scrollAbout={scrollAbout}
                scrollHome={scrollHome}
              />
              <section id="hero">
                <Hero scrollPricing={scrollPricing} />
              </section>
              <section id="about" className="my-12">
                <About scrollContact={scrollContact} />
              </section>
              <section id="pricing" className="mb-12">
                <Pricing />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              {" "}
              <Navbar
                isActive={isActive}
                togglerHandler={togglerHandler}
                setIsActive={setIsActive}
                scrollPricing={scrollPricing}
                scrollContact={scrollContact}
                scrollAbout={scrollAbout}
                scrollHome={scrollHome}
              />
             <Login/> <Footer/>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
