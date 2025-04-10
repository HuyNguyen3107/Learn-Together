// Async await
// async function luôn trả về 1 promise
// Muốn resolve một promise => dùng từ khóa await trước function cần gọi
// Một lần await thì sẽ là một lần then

// const getUser = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "User 1",
//         age: 21,
//       });
//     }, 1000);
//   });
// };

const getUser = async () => {
  return { name: "User 1", age: 21 };
};

// getUser().then((user) => {
//   console.log(user);
// });

// const showUser = async () => {
//   const user = await getUser();
//   console.log(user);
// };

// showUser();

// async function sh() {

// }

const download1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 1");
    }, 1000);
  });
};

const download2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 2");
    }, 1500);
  });
};

const download3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 3");
    }, 500);
  });
};

const downloadImg = async () => {
  const img1 = await download1();
  console.log(img1);
  const img2 = await download2();
  console.log(img2);
  const img3 = await download3();
  console.log(img3);
};

downloadImg();
