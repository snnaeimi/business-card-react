import React from "react";

export default function AboutAndInterest() {
  return (
    <div className="flex flex-col text-left ml-9 mt-6">
      <div className="mb-7">
        <h1 className="text-xl font-bold text-[#2B283A] mb-[5px]">About</h1>
        <p className="text-[#4A4E74] text-xs">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-xl font-bold text-[#2B283A] mb-[5px]">Interests</h1>
        <p className="text-[#4A4E74] text-xs">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
