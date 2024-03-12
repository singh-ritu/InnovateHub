import React from "react";
import Logo from "../Logo/Logo";
import headinglogo from "../../assets/headinglogo.jpg";
import dp1 from "../../assets/dp1.jpg";
import design from "../../assets/design.svg";

import "./sidebar.styles.css";
import Avatar from "@mui/material/Avatar";
function sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-heading">
          <div className="heading-info">
            <Logo image={headinglogo} />
            <div style={{ marginLeft: "8px" }}>
              <p style={{ margin: 0 }}>INC</p>
              <span className="heading">InnovateHub</span>
            </div>
          </div>
          <Avatar alt="Travis Howard" src={dp1} />
        </div>
        <div className="btn">
          <div>
            <img src={design} />
            <b>Design Team</b>
          </div>
          <div>X + 1</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default sidebar;
