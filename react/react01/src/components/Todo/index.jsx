import React, { createContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./index.css";
import { instance } from "../../utils/axios";
import { notifyError, notifySuccess, ToastBox } from "../../utils/toast";

export const TodoContext = createContext();

function Todo() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const getCarts = async () => {
      const res = await instance.get("/todos");
      if (res.status === 200) {
        setTodoList(res.data.todos);
        localStorage.setItem("todoList", JSON.stringify(res.data.todos));
        notifySuccess("Lấy dữ liệu thành công");
      } else {
        notifyError("Lấy dữ liệu không thành công");
      }
    };
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTodoList(todoList);
      notifySuccess("Lấy dữ liệu thành công");
    } else {
      getCarts();
    }
  }, []);
  // dependencies
  // không có thì đoạn code trong callback sẽ chạy mỗi khi component re-render
  // mảng rỗng thì đoạn code trong callback sẽ chạy một lần duy nhất khi component được render lần đầu
  // chứa các state thì khi một state trong các state thay đổi code trong callback sẽ chạy lại
  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      <div className="todo">
        <h1>Todo</h1>
        <TodoForm />
        <TodoList />
        <ToastBox />
      </div>
    </TodoContext.Provider>
  );
}

export default Todo;
