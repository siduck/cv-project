import { AppWindow, Download, Pencil } from "phosphor-react";

import "../styles/navbar.css";

function ModeSwitcher() {
  return (
    <div className="modeswitcher">
      <div className="editBtn">
        <Pencil className="editIcon" size={24} weight="fill" />
        Edit
      </div>

      <div className="previewBtn">
        <AppWindow className="previewIcon" size={24} weight="fill" />
        Preview
      </div>
    </div>
  );
}

function Savebtn() {
  return (
    <div className="savebtn">
      <Download className="saveIcon" size={24} weight="fill" />
      Download
    </div>
  );
}

export function Navbar() {
  return (
    <div className="navbar">
      <h2>
        CV Create
      </h2>

        <ModeSwitcher />
        <Savebtn />
    </div>
  );
}
