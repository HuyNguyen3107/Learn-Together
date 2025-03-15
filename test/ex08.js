const openBtn = document.querySelector(".btn");
const modalBox = document.querySelector(".modal-box");
const closeOverlay = document.querySelector(".overlay");
const eyeLoginShow = document.querySelector(".login-form .fa-eye.show");
const eyeLoginSlash = document.querySelector(".login-form .fa-eye-slash");
const eyeRegisterShow = document.querySelector(".register-form .fa-eye.show");
const eyeRegisterSlash = document.querySelector(".register-form .fa-eye-slash");
const loginButton = document.querySelector(".btn-login");
const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#password-login");
const passwordNotice = document.querySelector(".notice-password");
const registerButton = document.querySelector(".register");
const loginFormButton = document.querySelector(".login");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const nameRegister = document.querySelector("#name");
const emailRegister = document.querySelector("#email-register");
const passwordRegister = document.querySelector("#password-register");
const noticeEmailLogin = document.querySelector(".notice-email");
const noticeName = document.querySelector(".notice-name");
const noticeEmailRegister = document.querySelector(".notice-email-rg");
const noticePasswordRegister = document.querySelector(".notice-password-rg");

const displayModalBox = () => {
  modalBox.classList.toggle("show");
};
const closeModalBox = () => {
  modalBox.classList.toggle("show");
};

const loginNotice = () => {
  if (emailLogin.value || !passwordInput.value) {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    noticeEmailLogin.innerText = "Vui lòng nhập thông tin";
  }
};
const checkEmailLogin = () => {
  // check thêm password
  if (!emailLogin.value) {
    noticeEmailLogin.innerText = "Vui lòng nhập thông tin";
    emailLogin.style.borderColor = "red";
    passwordLogin.style.borderColor = "red";
  } else if (
    emailLogin.value &&
    !emailLogin.value.toLowerCase().includes("@gmail.com")
  ) {
    noticeEmailLogin.innerText = "Vui lòng nhập đúng định dạng Email";
    emailLogin.style.borderColor = "red";
  } else {
    noticeEmailLogin.innerText = "";
    emailLogin.style.borderColor = "";
  }
};
const checkPasswordLogin = () => {
  // check thêm email
  if (!passwordLogin.value) {
    passwordNotice.innerText = "Vui lòng nhập thông tin";
    passwordLogin.style.borderColor = "red";
    emailLogin.style.borderColor = "red";
  } else {
    passwordNotice.innerText = "";
    passwordLogin.style.borderColor = "";
  }
};
const checkEmailRegister = () => {
  if (!emailRegister.value) {
    noticeEmailRegister.innerText = "Vui lòng nhập thông tin";
    emailRegister.style.borderColor = "red";
    nameRegister.style.borderColor = "red";
    passwordRegister.style.borderColor = "red";
  } else if (
    emailRegister.value &&
    !emailRegister.value.toLowerCase().includes("@gmail.com")
  ) {
    noticeEmailRegister.innerText = "Vui lòng nhập đúng định dạng Email";
    emailRegister.style.borderColor = "red";
  } else {
    noticeEmailRegister.innerText = "";
    emailRegister.style.borderColor = "";
  }
};

const checkPasswordRegister = () => {
  if (!passwordRegister.value) {
    noticePasswordRegister.innerText = "Vui lòng nhập thông tin";
    emailRegister.style.borderColor = "red";
    nameRegister.style.borderColor = "red";
    passwordRegister.style.borderColor = "red";
  } else if (
    passwordRegister.value &&
    (passwordRegister.value.includes(" ") || passwordRegister.value.length < 6)
  ) {
    noticePasswordRegister.innerText =
      "Vui lòng nhập mật khẩu đúng định dạng. Mật khẩu cần dài hơn 6 ký tự, có chứa ít nhất 1 chữ số và không được chứa khoảng cách";
  } else {
    noticePasswordRegister.innerText = "";
    passwordRegister.style.borderColor = "";
  }
};
const checkNameRegister = () => {
  if (!nameRegister.value) {
    noticeName.innerText = "Vui lòng nhập thông tin";
    emailRegister.style.borderColor = "red";
    nameRegister.style.borderColor = "red";
    passwordRegister.style.borderColor = "red";
  } else {
    noticeName.innerText = "";
    nameRegister.style.borderColor = "";
  }
};
const displayLoginPassword = () => {
  passwordLogin.type = "text";
  passwordRegister.type = "text";
  eyeLoginShow.style.display = "none";
  eyeLoginSlash.style.display = "block";
};
const undisplayLoginPassword = () => {
  passwordLogin.type = "password";
  passwordRegister.type = "password";
  eyeLoginShow.style.display = "block";
  eyeLoginSlash.style.display = "none";
};
const displayRegisterPassword = () => {
  passwordRegister.type = "text";
  eyeRegisterShow.style.display = "none";
  eyeRegisterSlash.style.display = "block";
};
const undisplayRegisterPassword = () => {
  passwordRegister.type = "password";
  passwordRegister.type = "password";
  eyeRegisterShow.style.display = "block";
  eyeRegisterSlash.style.display = "none";
};
const registerFormDisplay = () => {
  registerForm.classList.toggle("show");
  loginForm.classList.toggle("show");
  loginFormButton.classList.toggle("faded");
  registerButton.classList.toggle("faded");
  emailLogin.value = "";
  passwordLogin.value = "";
  passwordLogin.style.borderColor = "";
  emailLogin.style.borderColor = "";
};
const loginFormDisplay = () => {
  registerForm.classList.toggle("show");
  loginForm.classList.toggle("show");
  loginFormButton.classList.toggle("faded");
  registerButton.classList.toggle("faded");
  emailRegister.value = "";
  passwordRegister.value = "";
  nameRegister.value = "";
  noticeEmailRegister.innerText = "";
  noticePasswordRegister.innerText = "";
  noticeName.innerText = "";
  emailRegister.style.borderColor = "";
  nameRegister.style.borderColor = "";
  passwordRegister.style.borderColor = "";
};

openBtn.onclick = displayModalBox;
closeOverlay.onclick = closeModalBox;
loginButton.onclick = loginNotice;
emailLogin.oninput = checkEmailLogin;
emailLogin.onblur = checkEmailLogin;
passwordLogin.oninput = checkPasswordLogin;
passwordLogin.onblur = checkPasswordLogin;
eyeLoginShow.onclick = displayLoginPassword;
eyeLoginSlash.onclick = undisplayLoginPassword;
eyeRegisterShow.onclick = displayRegisterPassword;
eyeRegisterSlash.onclick = undisplayRegisterPassword;
registerButton.onclick = registerFormDisplay;
loginFormButton.onclick = loginFormDisplay;
nameRegister.oninput = checkNameRegister;
nameRegister.onblur = checkNameRegister;
emailRegister.oninput = checkEmailRegister;
emailRegister.onblur = checkEmailRegister;
passwordRegister.oninput = checkPasswordRegister;
passwordRegister.onblur = checkPasswordRegister;
