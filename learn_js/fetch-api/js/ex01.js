// Front-end => Giao diện, xử lý hiệu ứng, thao tác với các thành phần trên trang web

// => Dữ liệu sẽ được lấy từ đâu?

// => lấy ở phía server (backend xử lý và trả về)

// => Frontend sẽ phải thao tác để lấy dữ liệu, thêm dữ liệu, cập nhật dữ liệu và xóa dữ liệu (thao tác với server)

// Backend cung cấp cho frontend một API

// API là gì?
// Application Programming Interface: giao diện lập trình ứng dụng
// Cung cấp các phương thức để các ứng dụng, nền tảng có thể giao tiếp được với nhau

// RESTFul API => tiêu chuẩn để thiết kế API

// - URL Request (backend sẽ cung cấp): server api + resource
// Ví dụ:  http://localhost:3000/users

// HTTP Method
// GET => Lấy dữ liệu từ server
// POST => Thêm dữ liệu
// PUT => Sửa dữ liệu (ghi đè)
// PATCH => Sửa dữ liệu (không ghi đè)
// DELETE => Xóa dữ liệu

// Status code

// 200
// 201
// 300
// 301
// 304
// 400
// 404
// 401
// 500

// Response: JSON

// Làm sao để mà thao tác với API trong js?
// - fetch => trả về một promise
// Thư viện: axios, jquery ajax

const serverAPI = `https://gxjz4s-8080.csb.app`;

const getPosts = async () => {
  const response = await fetch(`${serverAPI}/posts`);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("error");
  }
};

getPosts();

// const id = 1;
// const getPost = async (id) => {
//   const response = await fetch(`${serverAPI}/posts/${id}`);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     console.log("error");
//   }
// };

// getPost(id);

const data = {
  id: 7,
  title: "Title 7",
  content: "Content 7",
};

const createPost = async (data) => {
  const response = await fetch(`${serverAPI}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Created Success");
  } else {
    console.log("Created fail");
  }
};

// createPost(data);

const dataToUpdate = {
  title: "title 11",
};

const updatePost = async (data, id) => {
  const response = await fetch(`${serverAPI}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);

  if (response.ok) {
    console.log("Updated Success");
  } else {
    console.log("Updated fail");
  }
};

// updatePost(dataToUpdate, 6);

const deletePost = async (id) => {
  const response = await fetch(`${serverAPI}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("Deleted Success");
  } else {
    console.log("Deleted fail");
  }
};

// deletePost(7);
