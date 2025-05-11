import React, { useEffect, useState } from "react";
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
  // useEffect(() => {}, []);
  // dependencies
  // không có thì đoạn code trong callback sẽ chạy mỗi khi component re-render
  // mảng rỗng thì đoạn code trong callback sẽ chạy một lần duy nhất khi component được render lần đầu
  // chứa các state thì khi một state trong các state thay đổi code trong callback sẽ chạy lại
  return (
    <div className="todo">
      <h1>Todo</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Todo;
