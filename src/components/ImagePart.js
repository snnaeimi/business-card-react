import React from "react";
import personalImage from "../images/personalImage.png";

export default function ImagePart() {
  return (
    <div>
      <img
        alt="a woman who is smile"
        src={personalImage}
        className="personalImage"
      />
    </div>
  );
}
