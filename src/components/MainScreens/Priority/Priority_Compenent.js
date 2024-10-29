import React from "react";
import backlog_icon from "../../assets/Backlog.svg";
import add_icon from "../../assets/add.svg";
import dots from "../../assets/3_dot_menu.svg";

function Priority_Compenent({ tickets, priority }) {
  return (
    <div>
      <div className="priority__component">
        <div className="priority__component__header">
          <div className="priority__component__header__subheader">
            <span>
              {(priority === 0 && "No priority") ||
                (priority === 1 && "Low") ||
                (priority === 2 && "Midium") ||
                (priority === 3 && "High") ||
                (priority === 4 && "Urgent")}
            </span>
            <span>{tickets?.length}</span>
          </div>
          <div className="priority__component__header__subheader">
            <img src={add_icon} alt="add_icon" />
            <img src={dots} alt="dots" />
          </div>
        </div>

        {tickets?.map((ticket) => (
          <div key={ticket.id} className="priority__component__card">
            <div className="priority__component__card__header">
              <span>{ticket.id}</span>
              <span className="priority__component__card__header__profile">
                {ticket.userId.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <p className="priority__component__card__content">
              {ticket.title.length > 50
                ? ticket.title.substring(0, 47) + "..."
                : ticket.title}
            </p>
            <div className="priority__component__card__footer">
              <img className="box_border" src={dots} alt="dots" />
              <div className="items_center box_border">
                <div className="priority__component__card__footer__dot" />
                <span>{ticket.tag[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Priority_Compenent;
