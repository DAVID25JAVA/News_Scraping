// src/components/Footer.jsx

import Wrapper from "./Wrapper";

function Footer() {
  return (
    <footer className="bg-black text-white py-5 mt-auto">
      <Wrapper>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm">
            © 2026 HackerNews Clone. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Built with MERN Stack
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;