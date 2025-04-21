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
      const span = document.createElement("span");
      const deleteBtn = document.createElement("button");
      const updateBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      updateBtn.classList.add("update-btn");
      span.innerText = task.name;
      span.setAttribute("data-id", task.id);
      deleteBtn.innerText = "Delete";
      updateBtn.innerText = "Update";
      updateBtn.addEventListener("click", async function () {
        if (this.innerText === "Update") {
          const input = document.createElement("input");
          input.value = this.previousElementSibling.innerText;
          this.previousElementSibling.remove();
          this.parentElement.prepend(input);
          this.innerText = "Completed";
        } else if (this.innerText === "Completed") {
          const value = this.previousElementSibling.value;
          const { response: res } = await client.patch(`tasks/${task.id}`, {
            name: value,
          });

          if (res.ok) {
            const span = document.createElement("span");
            span.innerHTML = value;
            span.setAttribute("data-id", task.id);
            this.previousElementSibling.remove();
            this.parentElement.prepend(span);
            this.innerText = "Update";
          } else {
            alert("Update fail");
          }
        }
      });

      li.append(span, updateBtn, deleteBtn);
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
  const id =
    +ul.children[ul.children.length - 1].children[0].getAttribute("data-id") +
    1;
  const body = {
    id,
    name,
  };

  const { response } = await createTask(body);
  if (response.ok) {
    alert("Created success");

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    updateBtn.classList.add("update-btn");
    span.innerText = name;
    span.setAttribute("data-id", id);
    deleteBtn.innerText = "Delete";
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click", async function () {
      if (this.innerText === "Update") {
        const input = document.createElement("input");
        input.value = this.previousElementSibling.innerText;
        this.previousElementSibling.remove();
        this.parentElement.prepend(input);
        this.innerText = "Completed";
      } else if (this.innerText === "Completed") {
        const value = this.previousElementSibling.value;
        const { response: res } = await client.patch(`tasks/${id}`, {
          name: value,
        });

        if (res.ok) {
          const span = document.createElement("span");
          span.innerHTML = value;
          span.setAttribute("data-id", id);
          this.previousElementSibling.remove();
          this.parentElement.prepend(span);
          this.innerText = "Update";
        } else {
          alert("Update fail");
        }
      }
    });

    li.append(span, updateBtn, deleteBtn);
    ul.append(li);
    input.value = "";
  } else {
    alert("Created fail");
  }
});

// const

const searchField = document.querySelector(".search-field");

const renderTasks = (data) => {
  ul.innerHTML = "";
  data.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    updateBtn.classList.add("update-btn");
    span.innerText = task.name;
    span.setAttribute("data-id", task.id);
    deleteBtn.innerText = "Delete";
    updateBtn.innerText = "Update";
    // updateBtn.addEventListener("click", async function () {
    //   if (this.innerText === "Update") {
    //     const input = document.createElement("input");
    //     input.value = this.previousElementSibling.innerText;
    //     this.previousElementSibling.remove();
    //     this.parentElement.prepend(input);
    //     this.innerText = "Completed";
    //   } else if (this.innerText === "Completed") {
    //     const value = this.previousElementSibling.value;
    //     const { response: res } = await client.patch(`tasks/${task.id}`, {
    //       name: value,
    //     });

    //     if (res.ok) {
    //       const span = document.createElement("span");
    //       span.innerHTML = value;
    //       span.setAttribute("data-id", task.id);
    //       this.previousElementSibling.remove();
    //       this.parentElement.prepend(span);
    //       this.innerText = "Update";
    //     } else {
    //       alert("Update fail");
    //     }
    //   }
    // });

    li.append(span, updateBtn, deleteBtn);
    ul.append(li);
  });
};

let timerId = null;

const debounce = (value) => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(async () => {
    const { response, data } = await client.get(`tasks?${value}`);
    if (response.ok) {
      renderTasks(data);
    }
  }, 1000);
};

searchField.addEventListener("input", async (e) => {
  const queryString = new URLSearchParams({
    name: e.target.value,
  }).toString();
  debounce(queryString);
});
