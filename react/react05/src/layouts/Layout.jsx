import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  // const isLoggedIn = false;

  // if (!isLoggedIn) {
  //   window.location.href = "/login";
  //   return;
  // }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/non-existent">Non-existent</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 My Website</p>
      </footer>
    </>
  );
}

export default Layout;
