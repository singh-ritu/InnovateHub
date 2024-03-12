import React from "react";
import Logo from "../Logo/Logo";
import headinglogo from "../../assets/headinglogo.jpg";
import dp1 from "../../assets/dp1.jpg";
import design from "../../assets/design.svg";
import command from "../../assets/command.svg";
import development from "../../assets/development.svg";
import plusSquare from "../../assets/plusSquare.svg";
import marketing from "../../assets/marketing.svg";

import FolderDropdown from "./FolderDropdown";

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
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+1</p>
          </div>
        </div>
        <div className="btn">
          <div>
            <img src={marketing} />
            <b>Marketing Team</b>
          </div>
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+2</p>
          </div>
        </div>
        <div className="btn">
          <div>
            <img src={development} />
            <b>Development Team</b>
          </div>
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+3</p>
          </div>
        </div>
        <div className="btn">
          <div>
            <img src={plusSquare} />
            <b style={{ color: "rgb(158, 152, 152)" }}>Create a Team</b>
          </div>
        </div>
        <div className="folder-container">
          <div className="folder-heading">
            <span>FOLDERS</span>
            <p>+</p>
          </div>
          <div className="dropdown">
            <FolderDropdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
