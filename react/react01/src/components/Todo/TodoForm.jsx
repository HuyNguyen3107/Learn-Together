import React, { useState } from "react";

function TodoForm({ todoList, setTodoList }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = todoList[todoList.length - 1].id + 1;
    const task = {
      id: newId,
      name: value,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
