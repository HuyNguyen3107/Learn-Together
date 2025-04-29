import React, { useState } from "react";

function TodoForm({ todoList, setTodoList }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const lastId = todoList[todoList.length - 1].id;
    const newTodoList = [
      ...todoList,
      {
        id: +lastId + 1,
        name: value,
      },
    ];
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
