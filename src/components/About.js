import React, { useEffect } from "react";

import "./About.css";
import fetchUser from "../utils/fetchUser";

export default (props) => {
  useEffect(() => {
    fetchUser(props);
  });

  switch (props.user.statusCode) {
    case 200: {
      const aboutPage = props.user.data.aboutPage;

      return (
        <div className="ui container">
          <div className="about-wrapper">
            <h1 className="center">{aboutPage.heading}</h1>
            <img
              className="profile"
              src={aboutPage.profilePicture}
              alt="profile"
            />
            <div className="center">{aboutPage.bioText}</div>
          </div>
        </div>
      );
    }
    case 404: {
      return <div className="center">User not found</div>;
    }
    default: {
      return <></>;
    }
  }
};
