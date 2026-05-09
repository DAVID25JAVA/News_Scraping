// src/components/Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
          >
            HackerNews
          </Link>

          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300 transition"
              }
            >
              Bookmarks
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300 transition"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300 transition"
              }
            >
              Register
            </NavLink>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}

export default Navbar;