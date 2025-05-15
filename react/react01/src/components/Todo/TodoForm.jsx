import React, { useState } from "react";
import { notifyError, notifyWarning, ToastBox } from "../../utils/toast";

function TodoForm({ todoList, setTodoList }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newId;
    if (todoList.length) {
      newId = todoList[todoList.length - 1].id + 1;
    } else {
      newId = 1;
    }
    const task = {
      id: newId,
      name: value,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    // localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    notifyError("Hiển thị 2 lần");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button>Add Todo</button>
      <div
        style={{
          width: "100px",
          height: "100px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "#fff",
        }}
        onClick={handleClick}
      >
        click me
      </div>
    </form>
  );
}

export default TodoForm;
