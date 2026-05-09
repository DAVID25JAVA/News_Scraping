// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;