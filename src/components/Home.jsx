import React from "react";
import './portfolio.css'

function Home() {
  return (
    <div className="home-page-container">
      <h1>
        Hi, I&apos;m <span>Joe Greyson</span>
      </h1>
      <p className="designation">Frontend Developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipising elit.Inventore at
        officials suscipit us assumenda libero tenetur expedita eaque,
        eaque,quaerat quasi
      </p>
      <div className="home-page-button-container">
        <button>Hire Me</button>
        <button>See Projects</button>
      </div>
    </div>
  );
}

export default Home;
