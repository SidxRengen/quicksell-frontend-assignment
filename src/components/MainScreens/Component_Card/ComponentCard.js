import React from "react";
import dots from "../../../assets/3_dot_menu.svg";
import backlog_icon from "../../../assets/Backlog.svg";
import done_icon from "../../../assets/Done.svg";
import cancelled_icon from "../../../assets/Cancelled.svg";
import in_progress_icon from "../../../assets/in-progress.svg";
import to_do_icon from "../../../assets/To-do.svg";
import no_priority from "../../../assets/No-priority.svg";
import low_priority from "../../../assets/Low_Priority.svg";
import mid_priority from "../../../assets/Medium_Priority.svg";
import high_priority from "../../../assets/High_Priority.svg";
import urgent_priority from "../../../assets/Urgent_Priority_colour.svg";
import "./ComponentCard.css";
function ComponentCard({ ticket, user, priority, status }) {
  return (
    <div className="component_card">
      <div key={ticket.id} className="component_card__component__card">
        <div className="component_card__component__card__header">
          <span className="component_card__component__card__title">
            {ticket.id}
          </span>
          {!user && (
            <span className="component_card__component__card__header__profile">
              {`${ticket?.userName?.split(" ")[0][0]}${
                ticket?.userName?.split(" ")[1]?.[0] || ""
              }`.toUpperCase()}{" "}
            </span>
          )}
        </div>
        <div className="component_card__component__card__para">
          <p className="component_card__component__card__para__content">
            {!status && (
              <>
                {(ticket.status === "Backlog" && (
                  <img
                    className="component_card__component__card__para__content__img"
                    src={backlog_icon}
                    alt={`${ticket.status}_icon`}
                  />
                )) ||
                  (ticket.status === "Todo" && (
                    <img
                      className="component_card__component__card__para__content__img"
                      src={to_do_icon}
                      alt={`${ticket.status}_icon`}
                    />
                  )) ||
                  (ticket.status === "In progress" && (
                    <img
                      className="component_card__component__card__para__content__img"
                      src={in_progress_icon}
                      alt={`${ticket.status}_icon`}
                    />
                  )) ||
                  (ticket.status === "Done" && (
                    <img
                      className="component_card__component__card__para__content__img"
                      src={done_icon}
                      alt={`${ticket.status}_icon`}
                    />
                  )) ||
                  (ticket.status === "Cancelled" && (
                    <img
                      className="component_card__component__card__para__content__img"
                      src={cancelled_icon}
                      alt={`${ticket.status}_icon`}
                    />
                  ))}{" "}
              </>
            )}
            <span>
              {ticket.title.length > 50
                ? ticket.title.substring(0, 47) + "..."
                : ticket.title}
            </span>
          </p>
        </div>
        <div className="component_card__component__card__footer">
          {!priority && (
            <>
              {(ticket.priority === 0 && (
                <span className="priority__component__header__subheader1">
                  {" "}
                  <img src={no_priority} alt="" />
                </span>
              )) ||
                (ticket.priority === 1 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={low_priority} alt="" />
                  </span>
                )) ||
                (ticket.priority === 2 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={mid_priority} alt="" />
                  </span>
                )) ||
                (ticket.priority === 3 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={high_priority} alt="" />
                  </span>
                )) ||
                (ticket.priority === 4 && (
                  <span className="priority__component__header__subheader1">
                    {" "}
                    <img src={urgent_priority} alt="" />
                  </span>
                ))}
            </>
          )}
          <div className="items_center box_border ">
            <div className="component_card__component__card__footer__dot" />
            <span className="component_card__component__card__footer__tag">
              {ticket.tag[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
