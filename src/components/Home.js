import React, { useEffect, useRef } from "react";
import Macy from "macy";

import fetchUser from "../utils/fetchUser";
import "./Home.css";

export default (props) => {
  const imgContainer = useRef();

  useEffect(() => {
    fetchUser(props);

    if (props.user.statusCode) {
      if (imgContainer.current.classList.contains("masonry")) {
        Macy({
          container: ".masonry",
          columns: 3,
          margin: 4,
          breakAt: {
            900: 2,
            500: 1,
          },
        });
      }
    }
  }, [props.user]);

  if (props.error) {
    return <div className="center">{JSON.stringify(props.error)}</div>;
  }
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
