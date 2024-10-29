import React, { useEffect, useState } from "react";
import "./Status.css";
import Status_component from "./Status_component";

function Status({ data }) {
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
      if (item.status === "In progress") newGroupedTickets.In_Progress.push(item);
      if (item.status === "Done") newGroupedTickets.Done.push(item);
      if (item.status === "Cancelled") newGroupedTickets.Cancelled.push(item);
    });

    setGroupedTickets(newGroupedTickets);
  }, [data]);
  
  return (
    <div className="priority">
      <Status_component type="Backlog" groupedTickets={groupedTickets} />
      <Status_component type="Todo" groupedTickets={groupedTickets} />
      <Status_component type="In_Progress" groupedTickets={groupedTickets} />
      <Status_component type="Done" groupedTickets={groupedTickets} />
      <Status_component type="Cancelled" groupedTickets={groupedTickets} />
    </div>
  );
}

export default Status;
