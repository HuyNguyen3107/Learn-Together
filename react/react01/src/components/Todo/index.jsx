import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./index.css";

function Todo() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Task 1",
    },
    {
      id: 2,
      name: "Task 2",
    },
    {
      id: 3,
      name: "Task 3",
    },
    {
      id: 4,
      name: "Task 4",
    },
  ]);
  return (
    <div className="todo">
      <h1>Todo</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Todo;
