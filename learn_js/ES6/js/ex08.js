// try catch => xử lý các lỗi ngoại lệ

// 1. Try thực thi
// 2. Nếu xảy ra lỗi => catch sẽ thực thi
// 3. Nếu không xảy ra lỗi => bỏ qua catch
// 4. Thực thi finally

// asdsdasd

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

try {
  let a = 10;
  console.log(a);
  getAdapter();
  //   if (a > 10) {
  //     console.log("ok");
  //   } else {
  //     throw new Error("a greater than 10");
  //   }
  downloadImg();
  const users = [];
  if (users.length) {
    console.log(users);
  } else {
    throw new Error("users is empty");
  }
} catch (exception) {
  console.log(exception);
} finally {
  console.log("this is finally");
}
