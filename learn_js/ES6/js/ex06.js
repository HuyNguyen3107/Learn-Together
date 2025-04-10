// Promise: Object dùng để xử lý các tiến trình bất đồng bộ

// 3 trạng thái
//  - pending: chờ xử lý
//  - fulfilled: xử lý hoàn thành
//  - reject: xử lý thất bại

const getUsers = () => {
  const users = [];
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   reject("Lỗi mạng");
    //   resolve(users);
    // }, 1000);
    if (users.length > 0) {
      resolve(users);
    } else {
      reject({
        error: "ok",
      });
    }
  });
};

// const temp = new Promise

// const result = getUsers();
// console.log(result);

// result
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// getUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("ok");
//   });

// download1()
//   .then((download1) => {
//     console.log(download1);
//     download2().then((download2) => {
//       console.log(download2);
//       download3().then((download3) => {
//         console.log(download3);
//       });
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise chaining

// download1()
//   .then((response) => {
//     console.log(response);
//     return download2();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((response) => {
//     console.log(response);
//     return download3();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const result = download1();

// console.log(result);

const users = [
  {
    id: 1,
    name: "User 1",
    salary: 5000,
  },
  {
    id: 2,
    name: "User 2",
    salary: 6000,
  },
  {
    id: 3,
    name: "User 3",
    salary: 7000,
  },
  {
    id: 4,
    name: "User 4",
    salary: 8000,
  },
];

const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, 1000);
  });
};

// getUser(3).then((user) => {
//   console.log(user);
// });

const idList = [1, 3, 4];

const getTotalSalary = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const userId = arr[i];
    const userPromise = getUser(userId).then((user) => {
      total += user.salary;
      if (i === arr.length - 1) {
        return new Promise((resolve) => resolve(total));
      }
    });
    if (i === arr.length - 1) {
      return userPromise;
    }
  }
};

// console.log(getTotalSalary(idList));

getTotalSalary(idList).then((total) => {
  console.log(total);
});
