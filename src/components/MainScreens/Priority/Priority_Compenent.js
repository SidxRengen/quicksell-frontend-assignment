import React from "react";
import add_icon from "../../../assets/add.svg";
import dots from "../../../assets/3_dot_menu.svg";
import ComponentCard from "../Component_Card/ComponentCard";
import no_priority from "../../../assets/No-priority.svg";
import low_priority from "../../../assets/Low_Priority.svg";
import mid_priority from "../../../assets/Medium_Priority.svg";
import high_priority from "../../../assets/High_Priority.svg";
import urgent_priority from "../../../assets/Urgent_Priority_colour.svg";

function Priority_Compenent({ tickets, priority }) {
  return (
    <div>
      <div className="priority__component">
        <div className="priority__component__header">
          <div className="priority__component__header__subheader">
            <div>
              {(priority === 0 && (
                <span className="priority__component__header__subheader1">
                  {" "}
                  <img src={no_priority} alt="" />
                  <span>No priority</span>
                </span>
              )) ||
                (priority === 1 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={low_priority} alt="" />
                    <span>Low</span>
                  </span>
                )) ||
                (priority === 2 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={mid_priority} alt="" />
                    <span>Medium</span>
                  </span>
                )) ||
                (priority === 3 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={high_priority} alt="" />
                    <span>High</span>
                  </span>
                )) ||
                (priority === 4 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={urgent_priority} alt="" />
                    <span>Urgent</span>
                  </span>
                ))}
            </div>
            <span>{tickets?.length}</span>
          </div>
          <div className="priority__component__header__subheader">
            <img src={add_icon} alt="add_icon" />
            <img src={dots} alt="dots" />
          </div>
        </div>

        {tickets?.map((ticket) => (
          <ComponentCard priority="priority" ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Priority_Compenent;
