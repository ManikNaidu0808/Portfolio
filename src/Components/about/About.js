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
          A dedicated front-end developer with a strong foundation in HTML, CSS, and JavaScript, committed to crafting visually captivating and user-friendly interfaces. Proficient in leading front-end frameworks like React, I am continually enhancing my skill set by delving into database management with MongoDB and server-side development using Node.js. With a passion for innovation and a keen eye for design, I bring creativity and technical expertise to every project.
          </p>
          {/* <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
                <small>2 Companies</small>
              </article>
            </a>
            <a href="#services">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>&nbsp;</small>
                <small>3 Projects</small>
              </article>
            </a>
          </div> */}
          {/* <br></br> */}
          <h2 className="subheading">Experience</h2>
          <div className="about__cards">
            <article className="about__card mrt">
              <FaAward className="about__icon" />
              <h5>RedHat - Oracle Application Developer , 2019 Dec-2020 Nov</h5>
              <h5>WNS - Database Trainee , 2019 Aug-2019 Nov  </h5>
              {/* <h5>Freelance Front-End Developer</h5> */}
            </article>
          </div>
          <p>
          With 1.5 years of hands-on experience in Oracle technology. Proficient in using Oracle SQL Developer, SQL, and PL/SQL to design and manage databases, develop forms and reports, create triggers, and implement packages, functions, and stored procedures. Experienced in both Production Support and QA/TEST environments, contributing to a wide range of projects, work orders, maintenance requests, bug fixes, enhancements, and data changes. Committed to delivering high-quality solutions while continuously improving skills and staying updated with industry best practices.
          </p>

          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
          {/* <br></br>
          <h2 className="subheading">Education</h2>
          <div className="about__cards">
            <article className="about__card mrt">
              <IoMdSchool className="about__icon" />
              <h5>Bachelor of Engineering</h5>
              <small>Chhatrapati Shivaji Institute of Technology</small>
            </article>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default About;


// import React from "react";
// import "./About.css";
// import ME from "../../assets/about-me.jpg";
// import { FaAward } from "react-icons/fa";
// // import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
// import { IoMdSchool } from "react-icons/io";

// function About() {
//   return (
//     <section id="about">
//       <h5>Get to Know</h5>
//       <h2>About Me</h2>

//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={ME} alt="About" />
//           </div>
//         </div>
//         <div className="about__content">
//           <div className="about__cards">
//             <a href="#experience">
//               <article className="about__card">
//                 <FaAward className="about__icon" />
//                 <h5>Experience</h5>
//                 <small>1+ Years</small>
//                 <small>2 Companies</small>
//               </article>
//             </a>
//             {/* <article className="about__card">
//               <FiUsers className="about__icon" />
//               <h5>Clients</h5>
//               <small>200+ Worldwide</small>
//             </article> */}
//             <a href="#services">
//               <article className="about__card">
//                 <VscFolderLibrary className="about__icon" />
//                 <h5>Projects</h5>
//                 <small>&nbsp;</small>
//                 <small>3 Projects</small>
//               </article>
//             </a>
//           </div>
//           <p>
//             I am a front-end developer skilled in HTML, CSS, and JavaScript with a passion for creating visually appealing and
//             intuitive user interfaces. Proficient in various front-end frameworks and libraries such as React.
//           </p>

//           {/* <a href="#contact" className="btn btn-primary">
//             Let's Talk
//           </a> */}
//           <br></br>
//           <h2 className="subheading">Education</h2>
//           <div className="about__cards">
//             <article className="about__card mrt">
//               <IoMdSchool className="about__icon" />
//               <h5>Bachelor of Engineering</h5>
//               <small>Chhatrapati Shivaji Institute of Technology</small>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
