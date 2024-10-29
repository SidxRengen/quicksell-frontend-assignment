import React, { useEffect, useState } from "react";
import filter_icon from "../../assets/Display.svg";
import down_arrow from "../../assets/down.svg";
import "./Navbar.css";
function Navbar({ setMode, setOrdering, setShowing, showing }) {
  const [group, setGroup] = useState(
    localStorage.getItem("group") || "priority"
  );
  const [order, setOrder] = useState(localStorage.getItem("order") || "title");
  useEffect(() => {
    setMode(group);
    setOrdering(order);
    if (!localStorage.getItem("group")) {
      localStorage.setItem("group", "priority");
    }
    if (!localStorage.getItem("order")) {
      localStorage.setItem("order", "title");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("group", group);
  }, [group]);

  useEffect(() => {
    localStorage.setItem("order", order);
  }, [order]);

  const handleChange = (e) => {
    setMode(e);
    setGroup(e);
  };

  return (
    <div className="navbar">
      <div
        className="navbar__filter"
        onClick={() => {
          setShowing(!showing);
        }}
      >
        <img src={filter_icon} alt="filter_icon" />
        <span>Display</span>
        <img src={down_arrow} alt="down_icon" />
      </div>
      {showing && (
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
                setOrdering(e.target.value);
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
