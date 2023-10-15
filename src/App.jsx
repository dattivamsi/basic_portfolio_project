import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Navbar from "./components1/Navbar/Navbar";
import Test from "./Test";
import Hero from "./components1/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <div className="portfolio-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blogs" element={<Skills />} />
            <Route path="/contactus" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div> */}
      <div>
        <section id="HomePage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">parallex</section>
        <section>Services</section>
        <section id="Portfolio">Parallex</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
      {/* <div>
        <Test />
        <Test />
      </div> */}
    </>
  );
}

export default App;
