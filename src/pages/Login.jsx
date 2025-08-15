import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle Login logic here
  };
  return (
    <section className="bg-[#1D1751] min-h-screen flex justify-center items-center text-white p-5 md:p-0">
      <div className="space-y-4 p-4 shadow-2xl shadow-[#B6E63A33] rounded-4xl md:p-8">
        <h1 className="text-3xl font-bold text-center">Log in</h1>
        <div className="flex justify-center space-x-10 py-2">
          <Link to="#">
            <FcGoogle className="text-4xl" />
          </Link>
          <Link to="#">
            <FaGithub className="text-4xl text-[#FFFFFF]" />
          </Link>
          <Link to="#">
            <FaApple className="text-4xl" />
          </Link>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex-1 justify-center items-center space-y-6 md:p-8 "
        >
          <div className="flex-1 space-y-3">
            <label className="font-bold text-xl">Email or Username</label>
            <input
              type="email"
              placeholder="email or username"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="py-4 border border-white w-full rounded-xl px-5 text-white placeholder-gray-400 "
            />
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex justify-between">
              <label className="font-bold text-xl">Password</label>
              <Link to="#" className="text-[#B6E634] text-sm">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="py-4 border border-white w-full rounded-xl px-5 text-white placeholder-gray-400 "
            />
          </div>

          <div className="flex space-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              className="appearance-none h-5 w-5 border-2 border-gray-500 rounded-sm bg-transparent checked:bg-[#B6E63A]"
            />
            <span>Remember me</span>
          </div>

          <div className="flex justify-center px-15 pt-4">
            <button
              type="submit"
              className="bg-[#B6E63A] w-full py-3 rounded-xl text-black text-lg font-medium"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
