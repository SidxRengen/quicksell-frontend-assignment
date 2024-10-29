import React from "react";
import "./User.css";
import User_Component from "./User_Component";
function User({ data }) {
  const groupTicketsByUserId = (data) => {
    const groupedTickets = data.reduce((temp, ticket) => {
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

    return Object.values(groupedTickets);
  };

  const groupedTickets = groupTicketsByUserId(data);
  console.log("groupedTickets", groupedTickets);
  return (
    <div className="User">
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
