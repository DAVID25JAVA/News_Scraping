import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await register(formData);
      console.log("res-->", res);
      if (res?.success) {
        navigate("/");
        toast.success(res?.message)
      }
    } catch (err) {
      setError(err);
      toast.error(errora)
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <Wrapper>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <h1 className="text-4xl font-bold text-center mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Register to bookmark stories
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="username"
              placeholder="Enter your name"
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
