import React from "react";

import "./About.css";

export default (props) => {
  const aboutPage = props.user.data.aboutPage;

  return (
    <div className="ui container">
      <div className="about-wrapper">
        <h1 className="center">{aboutPage.heading}</h1>
        <img className="profile" src={aboutPage.profilePicture} alt="profile" />
        <div className="center">{aboutPage.bioText}</div>
      </div>
    </div>
  );
};
