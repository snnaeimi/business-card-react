import React from "react";
import { MdEmail } from "react-icons/md";

export default function EmailButton() {
  return (
    <div className="emailContainerClass">
      <button className="emailBtnClass">
        <MdEmail className="emailIcon" />
        <span className="emailText">Email</span>
      </button>
    </div>
  );
}
