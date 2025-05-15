import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./index.css";
import { instance } from "../../utils/axios";
import { notifySuccess, ToastBox } from "../../utils/toast";

function Todo() {
  const [todoList, setTodoList] = useState([
    // [
    //   { id: 1, name: "Task 1" },
    //   { id: 2, name: "Task 2" },
    //   { id: 3, name: "Task 3" },
    //   { id: 4, name: "Task 4" },
    // ],
  ]);
  useEffect(() => {
    const getCarts = async () => {
      const res = await instance.get("/todos");
      setTodoList(res.data.todos);
      localStorage.setItem("todoList", JSON.stringify(res.data.todos));
    };
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTodoList(todoList);
      notifySuccess("Lấy dữ liệu thành công");
    } else {
      getCarts();
      notifySuccess("Lấy dữ liệu thành công");
    }
  }, []);
  // dependencies
  // không có thì đoạn code trong callback sẽ chạy mỗi khi component re-render
  // mảng rỗng thì đoạn code trong callback sẽ chạy một lần duy nhất khi component được render lần đầu
  // chứa các state thì khi một state trong các state thay đổi code trong callback sẽ chạy lại
  return (
    <div className="todo">
      <h1>Todo</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <ToastBox />
    </div>
  );
}

export default Todo;
