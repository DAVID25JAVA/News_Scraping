import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

function NotFound() {
  return (
    <Wrapper>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold text-black">404</h1>

        <p className="text-2xl font-semibold mt-4">Page Not Found</p>

        <p className="text-gray-500 mt-2 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default NotFound;
