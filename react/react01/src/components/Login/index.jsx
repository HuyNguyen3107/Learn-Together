import React, { useState } from "react";

function Login() {
  const [obj, setObj] = useState({
    email: "huy@gmail.com",
    password: "huy12345",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const obj = {};
    // obj[e.target.type] = "ok";
    // obj["email"]
    // {...obj}
  };
  return (
    <form>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
