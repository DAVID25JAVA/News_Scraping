// src/pages/Login.jsx

import Wrapper from "../components/Wrapper";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  return (
    <Wrapper>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <h1 className="text-4xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to continue
          </p>

          <form className="space-y-5">
            <Input
              type="email"
              placeholder="Enter your email"
            />

            <Input
              type="password"
              placeholder="Enter your password"
            />

            <Button className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;