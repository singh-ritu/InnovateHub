import React from "react";
import "./logo.styles.css";
function Logo({ image, size }) {
  return (
    <>
      <img src={image} className={size === "small" ? "logo small" : "logo"} />
    </>
  );
}

export default Logo;
