import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const isLoggedIn = true;
  const navigate = useNavigate();
  const handleLogin = () => {
    // Simulate a login action
    if (isLoggedIn) {
      // Redirect to home page after login
      navigate("/");
    } else {
      // Handle login failure
      alert("Login failed");
    }
  };

  return (
    <div onClick={handleLogin}>
      <button>Login</button>
    </div>
  );
}

export default Login;
