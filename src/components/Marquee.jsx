/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Marquee.css";

const Marquee = ({ text }) => {
  return (
    <div className="marquee">
      <div className="marquee__inner" aria-hidden="true">
        {text.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
