import React, { useContext, useState } from "react";
import {
  notifyError,
  notifySuccess,
  notifyWarning,
  ToastBox,
} from "../../utils/toast";
import { instance } from "../../utils/axios";
import { TodoContext } from ".";

function TodoForm() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let newId;
    // if (todoList.length) {
    //   newId = todoList[todoList.length - 1].id + 1;
    // } else {
    //   newId = 1;
    // }
    const task = {
      todo: value,
      completed: false,
      userId: 5,
    };
    const res = await instance.post("/todos/add", task);

    if (res.status === 201) {
      notifySuccess("Thêm mới thành công");
      const newTodoList = [...todoList, task];
      setTodoList(newTodoList);
      setValue("");
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }
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
