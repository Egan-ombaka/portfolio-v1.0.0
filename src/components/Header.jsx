import React from "react";
import { FaHome, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import "../css/Header.css";

const Header = () => {
  return (
    <nav className="header-container" id="home">
      <div className="header">
        <ul>
          <li>
            <a href="#home" aria-label="Home">
              <span>
                <FaHome className="icons" />
              </span>
            </a>
          </li>
        </ul>

        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/egan-nyamisoa" rel="noopener noreferrer" aria-label="LinkedIn">
              <span>
                <FaLinkedinIn className="icons" />
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/egan-ombaka" rel="noopener noreferrer" aria-label="GitHub">
              <span>
                <FaGithub className="icons" />
              </span>
            </a>
          </li>
          <li>
            <a href="https://shorturl.at/TBbzQ" aria-label="Email">
              <span>
                <IoMdMailUnread className="icons" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;