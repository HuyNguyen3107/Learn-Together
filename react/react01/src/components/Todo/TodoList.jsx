import React from "react";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((task, index) => {
        return (
          <li key={index}>
            <span>{task.name}</span>
            <button>Update</button>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
