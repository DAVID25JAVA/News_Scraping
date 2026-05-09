import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import { navLinks } from "../assets/assets";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
          >
            HackerNews
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6">

            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-300 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">

            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center"
            >
              Login
            </Link>

          </div>
        )}

      </Wrapper>
    </header>
  );
}

export default Navbar;