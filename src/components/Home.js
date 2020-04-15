import React, { useEffect, useRef } from "react";
import Macy from "macy";

import fetchUser from "../utils/fetchUser";
import "./Home.css";

export default (props) => {
  const imgContainer = useRef();

  useEffect(() => {
    fetchUser(props);

    if (props.user.statusCode === 200) {
      if (imgContainer.current.classList.contains("masonry")) {
        Macy({
          container: ".masonry",
          columns: 1,
          margin: 4,
          mobileFirst: true,
          breakAt: {
            900: 3,
            500: 2,
          },
        });
      }
    }
  }, [props]);

  switch (props.user.statusCode) {
    case 200: {
      const { imageLayout, images } = props.user.data.homePage;

      return (
        <div className={`${imageLayout} ui container`} ref={imgContainer}>
          {images.map((image) => (
            <img
              key={image}
              className="homepage-img"
              src={image}
              alt="gallery"
            />
          ))}
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
