import React from "react";
import githubURL from "../assets/images/contacticons/github.png";
import linkedinURL from "../assets/images/contacticons/linkedin.png";

export default function Footer() {
  return (
    <div className="footer_links">
      <div className="social_media">
        <a href="https://github.com/Poongothai-R?tab=repositories" target="_blank" rel="noreferrer">
          <img src={githubURL} className="footer_image" alt="github_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/poongothair/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinURL} className="footer_image" alt="linkedin" />
        </a>
      </div>
      <div className="copy_right">
        <p> © 2023 @ Poongothai Rajesh</p>
      </div>
    </div>
  );
}
