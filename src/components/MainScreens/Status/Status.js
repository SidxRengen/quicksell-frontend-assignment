import React, { useEffect, useState } from "react";
import "./Status.css";
import Status_component from "./Status_component";

function Status({ data, order, setShowing }) {
  const [groupedTickets, setGroupedTickets] = useState({
    Backlog: [],
    Todo: [],
    In_Progress: [],
    Done: [],
    Cancelled: [],
  });

  useEffect(() => {
    const newGroupedTickets = {
      Backlog: [],
      Todo: [],
      In_Progress: [],
      Done: [],
      Cancelled: [],
    };

    data?.forEach((item) => {
      if (item.status === "Backlog") newGroupedTickets.Backlog.push(item);
      if (item.status === "Todo") newGroupedTickets.Todo.push(item);
      if (item.status === "In progress")
        newGroupedTickets.In_Progress.push(item);
      if (item.status === "Done") newGroupedTickets.Done.push(item);
      if (item.status === "Cancelled") newGroupedTickets.Cancelled.push(item);
    });

    if (order === "priority") {
      newGroupedTickets.Backlog.sort((a, b) => b.priority - a.priority);
      newGroupedTickets.Todo.sort((a, b) => b.priority - a.priority);
      newGroupedTickets.Done.sort((a, b) => b.priority - a.priority);
      newGroupedTickets.In_Progress.sort((a, b) => b.priority - a.priority);
      newGroupedTickets.Cancelled.sort((a, b) => b.priority - a.priority);
    } else {
      const ticketCategories = [
        "Backlog",
        "Todo",
        "In_Progress",
        "Done",
        "Cancelled",
      ];
      ticketCategories.forEach((category) => {
        newGroupedTickets[category].sort((a, b) => {
          const numA = parseInt(a.id.split("-")[1], 10); 
          const numB = parseInt(b.id.split("-")[1], 10); 

          return numA - numB; 
        });
      });
    }
    setGroupedTickets(newGroupedTickets);
    // console.log("o", order);
  }, [data, order]);
  // console.log("status", groupedTickets);
  return (
    <div className="priority" onClick={() => setShowing(false)}>
      <Status_component type="Backlog" groupedTickets={groupedTickets} />
      <Status_component type="Todo" groupedTickets={groupedTickets} />
      <Status_component type="In_Progress" groupedTickets={groupedTickets} />
      <Status_component type="Done" groupedTickets={groupedTickets} />
      <Status_component type="Cancelled" groupedTickets={groupedTickets} />
    </div>
  );
}

export default Status;
