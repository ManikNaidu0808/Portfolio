import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manik-naidu-6078b1162/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://https://github.com/ManikNaidu0808?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
}

export default HeaderSocials;
