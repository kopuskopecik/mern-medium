import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

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

  return <div className="App">

<ul className="list-group">
{userList.map(user => <li className="list-group-item">{user.firstName}</li>)}
  
  
</ul>

  </div>;
}

export default App;
