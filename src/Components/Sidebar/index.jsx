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
            <div className="heading-details">
              <p style={{ margin: 0, fontSize: "10px" }}>INC</p>
              <span className="heading">InnovateHub</span>
            </div>
          </div>
          <div className="avatar">
            <Avatar alt="Travis Howard" src={dp1} />
          </div>
        </div>
        <div className="btn">
          <div className="icons">
            <img src={design} />
            <b className="btn-name">Design Team</b>
          </div>
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+1</p>
          </div>
        </div>
        <div className="btn">
          <div className="icons">
            <img src={marketing} />
            <b className="btn-name">Marketing Team</b>
          </div>
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+2</p>
          </div>
        </div>
        <div className="btn">
          <div className="icons">
            <img src={development} />
            <b className="btn-name">Development Team</b>
          </div>
          <div className="sideComponent">
            <img src={command} />
            <p style={{ margin: 0 }}>x+3</p>
          </div>
        </div>
        <div className="btn">
          <div className="icons">
            <img src={plusSquare} />
            <b className="btn-name">Create a Team</b>
          </div>
        </div>
        <div className="folder-container">
          <span className="folder">FOLDERS</span>
          <p style={{ fontSize: "30px", fontWeight: "600" }}>+</p>
        </div>
        <FolderDropdown name="products" />
        <FolderDropdown name="Sales" />
        <FolderDropdown name="Design" />
        <FolderDropdown name="Office" />
        <FolderDropdown name="Legal" />

        <div className="bottom-btns">
          <img src={user} style={{ marginRight: "4px" }} />
          <div className="details">Invite teammates</div>
        </div>
        <div className="bottom-btns">
          <img src={help} style={{ marginRight: "4px" }} />
          <div className="details">Help and First steps</div>
        </div>

        <div className="footer">
          7 days Left on trial
          <div className="add-btn">Add Billing</div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
