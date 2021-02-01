import { Avatar } from "@material-ui/core";
import React from "react";
import "./Stroy.css";

function Story({ image, profileSrc, title }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
      className="story"
    >
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
