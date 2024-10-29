import axios from "axios";
import "./App.css";
import Priority from "./components/MainScreens/Priority/Priority";
import Status from "./components/MainScreens/Status/Status";
import User from "./components/MainScreens/User/User";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        " https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      console.log(data.data);
      setData(data.data);
    };
    getData();
  }, []);
  const mergeTicketsWithUsers = (data) => {
    const { tickets, users } = data;

    const userMap = users?.reduce((temp, user) => {
      temp[user.id] = user.name;
      return temp;
    }, {});

    const mergedTickets = tickets?.map((ticket) => ({
      ...ticket,
      userName: userMap[ticket.userId] || "Unknown User",
    }));
    return mergedTickets;
  };

  const result = mergeTicketsWithUsers(data);
  console.log("result", result);
  const [mode, setMode] = useState("priority");
  const [ordering, setOrdering] = useState("priority");
  const [showing, setShowing] = useState(false);
  return (
    <div className="app">
      <Navbar
        setOrdering={setOrdering}
        showing={showing}
        setMode={setMode}
        setShowing={setShowing}
      />
      {mode === "status" && (
        <Status order={ordering} data={result} setShowing={setShowing} />
      )}
      {mode === "user" && (
        <User order={ordering} data={result} setShowing={setShowing} />
      )}
      {mode === "priority" && (
        <Priority order={ordering} data={result} setShowing={setShowing} />
      )}
    </div>
  );
}

export default App;
