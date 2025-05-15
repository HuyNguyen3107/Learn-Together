import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Todo from "./components/Todo";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenExist = localStorage.getItem("token");
    if (tokenExist) {
      setToken(tokenExist);
    }
  }, []);
  return <>{token ? <Todo /> : <Login />}</>;
}

export default App;
