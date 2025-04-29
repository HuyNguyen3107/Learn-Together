import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Todo from "./components/Todo";

function App() {
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "user 1",
  //   },
  //   {
  //     id: 2,
  //     name: "user 2",
  //   },
  //   {
  //     id: 3,
  //     name: "user 3",
  //   },
  //   {
  //     id: 4,
  //     name: "user 4",
  //   },
  // ]);

  return (
    <>
      {/* <Header />
      <main>
        <Users users={users} setUsers={setUsers} />
      </main>
      <Footer /> */}
      <Todo/>
    </>
  );
}

export default App;
