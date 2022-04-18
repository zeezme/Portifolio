import React from "react";
import "./topbar.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const logoName = "Lucas Menezes";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a href="#contact" className="logo">
              {logoName}
            </a>
            <GitHubIcon className="icon" />
            <a
              className="border"
              href="https://github.com/zeezme"
              target="_blank "
            >
              ZeezMe
            </a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/meneluca/" target="_blank">
              meneluca
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => { setMenuOpen(!menuOpen) }}>
            <span className="line 1"></span>
            <span className="line 2"></span>
            <span className="line 3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
