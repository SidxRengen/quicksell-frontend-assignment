import React, { useState } from "react";
import filter_icon from "../assets/Display.svg";
import down_arrow from "../assets/down.svg";
import "./Navbar.css";
function Navbar({ mode, setMode }) {
  const [show, setShow] = useState(false);
  const [group, setGroup] = useState("");
  const [order, setOrder] = useState("");
  const handleChange = (e) => {
    setMode(e);
    setGroup(e);
  };
  return (
    <div className="navbar">
      <div className="navbar__filter" onClick={() => setShow(!show)}>
        <img src={filter_icon} alt="filter_icon" />
        <span>Display</span>
        <img src={down_arrow} alt="down_icon" />
      </div>
      {show && (
        <div className="navbar__hidden_menu">
          <div className="navbar__hidden_menu__option">
            <span>Grouping</span>{" "}
            <select
              value={group}
              onChange={(e) => handleChange(e.target.value)}
              className="navbar__hidden_menu__option__select"
            >
              <option value="priority">Priority</option>
              <option value="status">Status</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="navbar__hidden_menu__option">
            <span>Ordering</span>{" "}
            <select
              value={order}
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              className="navbar__hidden_menu__option__select"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
