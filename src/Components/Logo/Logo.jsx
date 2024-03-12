import React from "react";
import "./logo.styles.css";
function Logo({ image }) {
  return (
    <>
      <img src={image} className="logo" />
    </>
  );
}

export default Logo;
