import React from "react";
import "./Services.css";
// import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>My Work</h5>
      <h2>Projects Worked On</h2>
      <div className="container services_container">
        {/* 1 */}
        <article className="service">
          <div className="service_head">
            <h3>Portfolio Website</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript, ReactJs & Services(EmailJs, ReactIcons)</h5>
          </div>
          <ul className="service_list">
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Worked with the React framework to design a Portfolio Website </p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Created a Fully Functional Portfolio Website</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Integrated EmailJs to the Website for Query Emails</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Used React-Icons to implement all types of Icons</p>
            </li>
            <li>
            <p>Link - <a href="https://maniknaidu-portfolio.vercel.app/">Portfolio</a></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>News App</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript, ReactJs </h5>
          </div>
          <ul className="service_list">
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Worked with the React framework to design a News app </p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Created a Fully Functional News app</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Live News are fetching through News Api </p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Used React-Icons to implement all types of Icons</p>
            </li>
            <li>
            <p>Link - <a>News App</a></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Weather App</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript, ReactJs</h5>
          </div>
          <ul className="service_list">
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Worked with the React framework to design a Weather App</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Created a Fully Functional Website which shows live weather details</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Celcius and farenheit both readings are available</p>
            </li>
            <li>
              <p>Link - <a href="https://weather-app-manik.vercel.app/" target="_blank">Weather App</a></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Game - Snake</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript</h5>
          </div>
          <ul className="service_list">
            <li>
              <p>Used JavaScript to make this game</p>
            </li>
            <li>
              <p>Used requestAnimationFrame to paint the screen continously</p>
            </li>
            <li>
              <p>Fully-Functional game which contain high-score in local storage</p>
            </li>
            <li>
              <p>Link (Only for PC) - <a href="https://cobra-1-manik2ndgame.vercel.app/" target="_blank">Cobra I</a></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Game - Tic-Tac-Toe</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript</h5>
          </div>
          <ul className="service_list">
            <li>
              <p> HTML is used for structuring the game board, CSS for styling and layout.</p>
            </li>
            <li>
              <p>Used JavaScript for implementing game logic, including player moves, win conditions, and a responsive user interface.</p>
            </li>
            <li>
              <p>Engage in intense battles, taking turns as 'X' and 'O' within an elegantly designed grid</p>
            </li>
            <li>
              <p>Link - <a href="https://tic-tac-toe-manik-1stgame.vercel.app/" target="_blank">Tic-Tac-Toe</a></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Food App</h3>
            <h5 color="text-light">Technology Used - HTML, CSS, JavaScript</h5>
          </div>
          <ul className="service_list">
            <li>
              <p>Integrating Swiggy API to fetch and display restaurant.</p>
            </li>
            <li>
              <p>Displaying restaurant of specific location, While also implementing a separate API to show case the menus of selected restaurants.</p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p>Link - <a href="https://tic-tac-toe-manik-1stgame.vercel.app/" target="_blank">Food App</a></p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
