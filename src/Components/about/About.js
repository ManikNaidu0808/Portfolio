import React from "react";
import "./About.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoMdSchool } from "react-icons/io";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <p>
          Dedicated and enthusiastic front-end developer with a passion for creating visually appealing and user-friendly web experiences. Seeking an opportunity to leverage my technical skills in HTML, CSS, JavaScript and React. Eager to learn and collaborate in a dynamic team environment while continuously expanding my knowledge of modern front- end technologies and design principles.
          </p>
         
          <h2 className="subheading">Experience</h2>
          <div className="about__cards">
            <article className="about__card mrt">
              <FaAward className="about__icon" />
              <h5>Freelance Front-End Developer</h5>
              <h5>RedHat - Application Developer , 2019 Dec-2020 Nov</h5>
              <h5>WNS - Trainee , 2019 Aug-2019 Nov  </h5>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
export default About;
