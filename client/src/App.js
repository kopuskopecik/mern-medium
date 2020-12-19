import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import AppRouter from "./router/Router";

function App() {
  const [userList, SetUserList] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      SetUserList(data);
      console.log(data);
    } catch {
      console.log("User cant be retrieved.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
