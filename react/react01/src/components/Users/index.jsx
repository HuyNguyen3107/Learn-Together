import React from "react";
import "./index.css";

function Users({ users, setUsers }) {
  return (
    <>
      <div className="users">
        {users.map((user) => {
          return (
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <span>{user.name}</span>
              <button
                onClick={() => {
                  console.log(user.id);
                }}
                style={{
                  color: "#fff",
                  backgroundColor: "orange",
                  border: "none",
                  padding: "20px 40px",
                  fontSize: "20px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default Users;
