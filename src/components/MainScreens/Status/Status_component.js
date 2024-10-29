import React from "react";
import backlog_icon from "../../assets/Backlog.svg";
import add_icon from "../../assets/add.svg";
import dots from "../../assets/3_dot_menu.svg";

function Status_component({ type, groupedTickets }) {
  const tickets = groupedTickets[type] || [];
  return (
    <div className="status__component">
      <div className="status__component__header">
        <div className="status__component__header__subheader">
          <img src={backlog_icon} alt={`${type}_icon`} />
          <span>{type}</span>
          <span>{tickets.length}</span>
        </div>
        <div className="status__component__header__subheader">
          <img src={add_icon} alt="add_icon" />
          <img src={dots} alt="dots" />
        </div>
      </div>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="status__component__card">
          <div className="status__component__card__header">
            <span>{ticket.id}</span>
            <span className="status__component__card__header__profile">
              {ticket.userId.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <p className="status__component__card__content">
            {ticket.title.length > 50
              ? ticket.title.substring(0, 47) + "..."
              : ticket.title}
          </p>
          <div className="status__component__card__footer">
            <img className="box_border" src={dots} alt="dots" />
            <div className="items_center box_border">
              <div className="status__component__card__footer__dot" />
              <span>{ticket.tag[0]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status_component;
