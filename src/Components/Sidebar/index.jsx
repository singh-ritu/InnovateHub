import React from "react";
import Logo from "../Logo/Logo";
import headinglogo from "../../assets/headinglogo.jpg";
import dp1 from "../../assets/dp1.jpg";
import design from "../../assets/design.svg";
import command from "../../assets/command.svg";
import development from "../../assets/development.svg";
import plusSquare from "../../assets/plusSquare.svg";
import marketing from "../../assets/marketing.svg";
import user from "../../assets/user.svg";

import help from "../../assets/help.svg";

import FolderDropdown from "../FolderDropdown";

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
              <p style={{ margin: 0, fontSize: "10px" }}>INC</p>
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
          <span>FOLDERS</span>
          <p>+</p>
        </div>
        <FolderDropdown name="products" />
        <FolderDropdown name="Sales" />
        <FolderDropdown name="Design" />
        <FolderDropdown name="Office" />
        <FolderDropdown name="Legal" />

        <div className="bottom-btns">
          <img src={user} style={{ marginRight: "4px" }} />
          Invite teammates
        </div>
        <div className="bottom-btns">
          <img src={help} style={{ marginRight: "4px" }} />
          Help and First steps
        </div>
      </div>
    </>
  );
}

export default sidebar;
