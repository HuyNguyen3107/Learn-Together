import React, { useContext, useState } from "react";
import { instance } from "../../utils/axios";
import { notifySuccess } from "../../utils/toast";
import { TodoContext } from ".";

function TodoList() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [id, setId] = useState(null);
  const [value, setValue] = useState("");
  const handleClick = async (e) => {
    if (id === null) {
      const idChange = +e.target.getAttribute("data-id");
      setId(idChange);
      const name = todoList.find((todo) => todo.id === idChange).todo;
      setValue(name);
    } else {
      const task = {
        todo: value,
        completed: false,
      };
      const res = await instance.patch(`/todos/${id}`, task);
      if (res.status === 200) {
        const todoListUpdate = todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              ...task,
            };
          }
          return todo;
        });
        notifySuccess("Cập nhật thành công");
        localStorage.setItem("todoList", JSON.stringify(todoListUpdate));
        setTodoList(todoListUpdate);
        setId(null);
        setValue("");
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleDelete = async (e) => {
    const idDelete = +e.target.getAttribute("data-id");
    const res = await instance.delete(`/todos/${idDelete}`);
    if (res.status === 200) {
      const newTodoList = todoList.filter((todo) => todo.id !== idDelete);
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }
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
