const container = document.querySelector(".container");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  let check = 0;
  if (password.length >= 8) {
    check += 1;
  }

  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
      check += 1;
      break;
    }
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
      check += 1;
      break;
    }
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
      check += 1;
      break;
    }
  }

  if (check === 4) {
    return true;
  }
  return false;
}

function generateRandomToken(length = 32) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  return token;
}

const isLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    container.innerHTML = `<h1>Login to Your Account</h1>
        <form action="">
            <div>
                <input type="email" name="email" placeholder="Enter your email" class="email-field">
            </div>
            <div>
                <input type="password" name="password" placeholder="Enter your password" class="password-field">
            </div>
            <button>Login</button>`;
    const emailField = document.querySelector(".email-field");
    const passwordField = document.querySelector(".password-field");
    const form = document.querySelector("form");
    const button = document.querySelector("button");

    // password: 8 ký tự trở lên, ít nhất có 1 ký tự là số, chữ hoa, chữ thường.

    // email: sẽ phải đúng định dạng email

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailValue = emailField.value;
      const passwordValue = passwordField.value;

      if (!emailValue || !passwordValue) {
        alert("Vui lòng điền đủ thông tin vào các trường");
        return;
      }

      if (!isValidEmail(emailValue)) {
        alert("Email không hợp lệ");
        return;
      }

      if (!isValidPassword(passwordValue)) {
        alert("Password không hợp lệ");
        return;
      }

      //   gửi lên server check

      const token = generateRandomToken();
      localStorage.setItem("token", token);
      isLogin();
    });
  } else {
    container.innerHTML = `<h1>Login Success</h1>
        <button class="logout-btn">Logout</button>
    `;
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      isLogin();
    });
  }
};

isLogin();
