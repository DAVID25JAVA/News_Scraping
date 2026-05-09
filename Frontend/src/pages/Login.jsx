import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

function Login() {
  return (
    <Wrapper>
      <div className="min-h-[80vh] flex items-center justify-center">

        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

          <h1 className="text-3xl font-bold mb-6">
            Login
          </h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Login
            </button>
          </form>

          {/* REGISTER LINK */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </Wrapper>
  );
}

export default Login;