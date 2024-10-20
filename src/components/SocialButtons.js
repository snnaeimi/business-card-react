import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex justify-center text-2xl text-[#918E9B]">
      <FaTwitterSquare className="mr-6" />
      <FaFacebookSquare className="mr-6" />
      <FaInstagramSquare className="mr-6" />
      <FaLinkedin className="mr-6" />
      <FaGithubSquare />
    </div>
  );
}
