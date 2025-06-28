import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAllowed = true; // Replace with actual authentication logic
  if (!isAllowed) {
    return <Navigate to="/login" />; // Redirect to login if not allowed
  } else {
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
