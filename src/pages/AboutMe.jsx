import React from "react";
import picture from "../assets/images/Portfolio_photo.png";

export default function AboutMe() {
  return (
    <div className="container_main" id="about">
      <div className="container_sub">
        <div className="page_left">
          <h2 className="title">About Me</h2>
          <p>
            I’m a passionate Frontend Developer who loves using technology to solve real-world problems.
          </p>
          <p>
            I always consider myself a fresher and would like to remain so with more professional experience on the back of it.
          </p>
          <p>
              Are you looking for a passionate web developer, who will start everyday as her first day?
            You are looking at the person, just a little right!!
          </p>
        </div>
        <div className="page_right">
          <img className="about_img" src={picture} alt="Indian lady" />
        </div>
      </div>
    </div>
  );
}
