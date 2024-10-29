import React from "react";
import add_icon from "../../../assets/add.svg";
import dots from "../../../assets/3_dot_menu.svg";
import ComponentCard from "../Component_Card/ComponentCard";

function User_Component({ tickets, userName }) {
  return (
    <div>
      <div className="user__component">
        <div className="user__component__header">
          <div className="user__component__header__subheader">
            <span className="component_card__component__card__header__profile">
              {" "}
              {`${userName?.split(" ")[0][0]}${
                userName?.split(" ")[1]?.[0] || ""
              }`.toUpperCase()}
            </span>
            <span>{tickets.length}</span>
          </div>
          <div className="user__component__header__subheader">
            <img src={add_icon} alt="add_icon" />
            <img src={dots} alt="dots" />
          </div>
        </div>

        {tickets?.map((ticket) => (
          <ComponentCard user="user" ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default User_Component;
