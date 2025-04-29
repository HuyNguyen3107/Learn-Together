import React, { useState } from "react";

function TodoList({ todoList, setTodoList }) {
  const [updateId, setUpdateId] = useState(null);
  const [value, setValue] = useState("");
  const handleUpdate = (e) => {
    if (updateId !== null) {
      const newTodoList = todoList.map((task) => {
        if (+task.id === +updateId) {
          return {
            id: task.id,
            name: value,
          };
        }
        return task;
      });
      setTodoList(newTodoList);
      setUpdateId(null);
    } else {
      setUpdateId(+e.target.getAttribute("data-id"));
      const value = todoList.find(
        (task) => task.id === +e.target.getAttribute("data-id")
      ).name;
      setValue(value);
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <ul>
      {todoList.map((task, index) => {
        return (
          <li key={index}>
            {+task.id === +updateId ? (
              <input type="text" value={value} onChange={handleChange} />
            ) : (
              <span>{task.name}</span>
            )}
            <button data-id={task.id} onClick={handleUpdate}>
              {+task.id === +updateId ? "Completed" : "Update"}
            </button>
            <button data-id={task.id}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
