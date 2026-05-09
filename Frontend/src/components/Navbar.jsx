import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import { navLinks } from "../assets/assets";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/login")
      }
      setShowModal(false);
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="bg-black text-white shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            HackerNews
          </Link>

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

            {user ? (
              <p
                onClick={() => setShowModal(true)}
                className="bg-yellow-400 text-black w-10 h-10 cursor-pointer flex items-center justify-center rounded-full font-semibold"
              >
                {user?.username?.charAt(0).toUpperCase()}
              </p>
            ) : (
              <Link
                to="/login"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Login
              </Link>
            )}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

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

            {user ? (
              <p
                onClick={() => setShowModal(true)}
                className="bg-yellow-400 text-black w-10 h-10 cursor-pointer flex items-center justify-center rounded-full font-semibold"
              >
                {user?.username?.charAt(0).toUpperCase()}
              </p>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center"
              >
                Login
              </Link>
            )}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-xl w-80 text-center">
              <h2 className="text-lg font-semibold mb-4">
                Do you want to logout?
              </h2>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 cursor-pointer px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </header>
  );
}

export default Navbar;
