import React, { useEffect, useState } from "react";
import "./Priority.css";
import Priority_Compenent from "./Priority_Compenent";

function Priority({ data }) {
  const groupTicketsByPriority = (tickets) => {
    const groupedTickets = {
      0: { priority: 0, tickets: [] },
      1: { priority: 1, tickets: [] },
      2: { priority: 2, tickets: [] },
      3: { priority: 3, tickets: [] },
      4: { priority: 4, tickets: [] },
    };

    tickets?.forEach((ticket) => {
      const { priority } = ticket;
      if (groupedTickets[priority]) {
        groupedTickets[priority].tickets.push(ticket);
      }
    });

    return groupedTickets;
  };

  const groupedTickets = groupTicketsByPriority(data);

  console.log("Grouped Tickets by Priority:", groupedTickets);

  return (
    <div className="priority">
      <Priority_Compenent tickets={groupedTickets[0]?.tickets} priority={0} />
      <Priority_Compenent tickets={groupedTickets[4]?.tickets} priority={4} />
      <Priority_Compenent tickets={groupedTickets[3]?.tickets} priority={3} />
      <Priority_Compenent tickets={groupedTickets[2]?.tickets} priority={2} />
      <Priority_Compenent tickets={groupedTickets[1]?.tickets} priority={1} />
    </div>
  );
}

export default Priority;
