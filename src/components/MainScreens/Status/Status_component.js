import React from "react";
import backlog_icon from "../../../assets/Backlog.svg";
import done_icon from "../../../assets/Done.svg";
import cancelled_icon from "../../../assets/Cancelled.svg";
import in_progress_icon from "../../../assets/in-progress.svg";
import to_do_icon from "../../../assets/To-do.svg";
import add_icon from "../../../assets/add.svg";
import dots from "../../../assets/3_dot_menu.svg";
import ComponentCard from "../Component_Card/ComponentCard";

function Status_component({ type, groupedTickets }) {
  const tickets = groupedTickets[type] || [];
  return (
    <div className="status__component">
      <div className="status__component__header">
        <div className="status__component__header__subheader">
          {(type === "Backlog" && (
            <img src={backlog_icon} alt={`${type}_icon`} />
          )) ||
            (type === "Todo" && (
              <img src={to_do_icon} alt={`${type}_icon`} />
            )) ||
            (type === "In_Progress" && (
              <img src={in_progress_icon} alt={`${type}_icon`} />
            )) ||
            (type === "Done" && <img src={done_icon} alt={`${type}_icon`} />) ||
            (type === "Cancelled" && (
              <img src={cancelled_icon} alt={`${type}_icon`} />
            ))}
          <span>{type}</span>
          <span>{tickets.length}</span>
        </div>
        <div className="status__component__header__subheader">
          <img src={add_icon} alt="add_icon" />
          <img src={dots} alt="dots" />
        </div>
      </div>

      {tickets?.map((ticket) => (
        <ComponentCard status="status" ticket={ticket} />
      ))}
    </div>
  );
}

export default Status_component;
