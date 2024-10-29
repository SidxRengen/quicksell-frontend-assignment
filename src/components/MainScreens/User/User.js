import React from "react";
import "./User.css";
import User_Component from "./User_Component";

function User({ data, order, setShowing }) {
  const groupTicketsByUserId = (tickets) => {
    const groupedTickets = (tickets || [])?.reduce((temp, ticket) => {
      const { userId } = ticket;
      if (!temp[userId]) {
        temp[userId] = {
          userId,
          userName: ticket.userName || "Unknown",
          tickets: [],
        };
      }
      temp[userId].tickets.push(ticket);
      return temp;
    }, {});

    const groupedArray = Object.values(groupedTickets);

    groupedArray.forEach((userGroup) => {
      if (order === "priority") {
        userGroup.tickets.sort((a, b) => b.priority - a.priority);
      } else {
        userGroup.tickets.sort((a, b) => {
          const numA = parseInt(a.id.split("-")[1], 10);
          const numB = parseInt(b.id.split("-")[1], 10);
          return numA - numB;
        });
      }
    });

    return groupedArray;
  };

  const groupedTickets = groupTicketsByUserId(data);

  return (
    <div className="user" onClick={() => setShowing(false)}>
      {groupedTickets?.map((userGroup) => (
        <User_Component
          key={userGroup.userId}
          tickets={userGroup.tickets}
          userName={userGroup.userName}
        />
      ))}
    </div>
  );
}

export default User;
