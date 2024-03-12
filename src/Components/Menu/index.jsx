import React from "react";
import sort from "../../assets/sort.svg";
import filter from "../../assets/filter.svg";
import plusSquare from "../../assets/plusSquare.svg";
import importExport from "../../assets/importExport.svg";
import "./menu.styles.css";

function Menu() {
  return (
    <>
      <div className="menu-btns">
        <div style={{ display: "flex" }}>
          <div className="btn">
            <img src={sort} />
            sort
          </div>
          <div className="btn">
            <img src={filter} />
            Filter
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="btn">
            <img src={plusSquare} />
            Meeting
          </div>
          <div className="btn">
            <img src={importExport} />
            Import/Export
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
