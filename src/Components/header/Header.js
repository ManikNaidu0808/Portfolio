import React from "react";
import "./Header.css";
import CTA from "./cta";
import ME from "../../assets/mebg1.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  const myself = {
    name: "T. Manik Naidu",
    title: "Front-End Developer",
    company: "RedHat",
  };
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{myself.name}</h1>
        {/* <h5 className="text-light">{myself.company}</h5> */}
        <h5 className="text-light">{myself.title}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Myself" className="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
