import { useState } from "react";
import "./dropdown.styles.css";
import down from "../../assets/down.svg";

const names = ["Roadmap", "Feedback", "Performance", "Team", "Analytics"];

function FolderDropdown({ name }) {
  const [open, setOpen] = useState(false);
  const openDropdown = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="dropdown-trigger" onClick={openDropdown}>
        <div className="dropdown-name">{name}</div>
        <img src={down} />
      </div>

      {open && (
        <div>
          {names.map((name, index) => (
            <div
              style={{
                paddingBottom: index !== names.length - 1 ? "12px" : "0",
                borderLeft: "2px solid lightgrey",
                marginLeft: "10px",
                paddingLeft: "10px",
              }}
              key={index}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FolderDropdown;
