import { client } from "../js/client.js";

const ul = document.querySelector("ul");

// const getTasks = async () => {
//   const tasks = await client.get("tasks");
//   return tasks;
// };

// lấy thẻ ul
// tạo thẻ li (sử dụng chuỗi hoặc dom node)
// nếu dùng chuỗi thì anh phải dùng innerHTML
// nếu anh dùng dom node thì anh append vào ul

const showTasks = async () => {
  const obj = await client.get("tasks");
  const { response, data } = obj;
  if (response.ok) {
    data.forEach((task) => {
      const li = document.createElement("li");
      li.innerText = task.name;
      li.setAttribute("data-id", task.id);
      ul.append(li);
    });
  }
};

showTasks();

// khi click vào nút Add thì lấy được dữ liệu từ input
// kiểm tra id của task mới nhất rồi tạo một id có giá trị lớn hơn 1 đơn vị so với id đó
// tạo một obj với các dữ liệu giống trên server
// gọi hàm client.post để tạo mới trên server
// khi tạo thành công thì anh thêm task vừa rồi vào giao diện

const button = document.querySelector("button");
const input = document.querySelector("input");

const createTask = async (body) => {
  const res = await client.post("tasks", body);
  return res;
};

button.addEventListener("click", async () => {
  const name = input.value;
  const id = +ul.children[ul.children.length - 1].getAttribute("data-id") + 1;
  const body = {
    id,
    name,
  };
  const { response } = await createTask(body);
  if (response.ok) {
    alert("Created success");
    const li = document.createElement("li");
    li.innerText = name;
    li.setAttribute("data-id", id);
    ul.append(li);
    input.value = "";
  } else {
    alert("Created fail");
  }
});
