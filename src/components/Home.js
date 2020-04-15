import React, { useEffect, useRef } from "react";
import Macy from "macy";

import "./Home.css";

export default (props) => {
  const imgContainer = useRef();

  useEffect(() => {
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
  }, []);

  const { imageLayout, images } = props.user.data.homePage;

  return (
    <div className={`${imageLayout} ui container`} ref={imgContainer}>
      {images.map((image) => (
        <img key={image} className="homepage-img" src={image} alt="gallery" />
      ))}
    </div>
  );
};
