import React, { useState } from "react";

function TodoList({ todoList, setTodoList }) {
  const [id, setId] = useState(null);
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    if (id === null) {
      const idChange = +e.target.getAttribute("data-id");
      setId(idChange);
      const name = todoList.find((todo) => todo.id === idChange).name;
      setValue(name);
    } else {
      const todoListUpdate = todoList.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            name: value,
          };
        }
        return todo;
      });
      // localStorage.setItem("todoList", JSON.stringify(todoListUpdate));
      setTodoList(todoListUpdate);
      setId(null);
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleDelete = (e) => {
    const idDelete = +e.target.getAttribute("data-id");
    const newTodoList = todoList.filter((todo) => todo.id !== idDelete);
    setTodoList(newTodoList);
  };
  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <li key={index}>
            {id === todo.id ? (
              <input type="text" value={value} onChange={handleChange} />
            ) : (
              <span>{todo.todo}</span>
            )}
            <button onClick={handleClick} data-id={todo.id}>
              {id === todo.id ? "Complete" : "Update"}
            </button>
            <button data-id={todo.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
