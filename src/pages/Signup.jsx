import { useState } from "react"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

const Signup = () => {
    const [formData, setFormData] = useState({ email: "", password: "", password2: "" });

    const handleSignup = (e) => {
      e.preventDefault();
      // Handle signup logic here
    };
  return (
    <section className="bg-[#1D1751] min-h-screen flex justify-center items-center text-white p-5 md:p-0 md:px-40 md:py-20 ">
      <div className="w-full space-y-4 p-4 shadow-2xl shadow-[#B6E63A33] rounded-4xl md:p-8">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
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
          onSubmit={handleSignup}
          className="flex-1 justify-center items-center space-y-5 md:p-8 "
        >
          <div className="flex-1 space-y-2">
            <p className="font-bold text-xl">Email</p>
            <input
              type="email"
              placeholder="enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="py-4 border border-[#FFFFFF] w-full rounded-xl px-5"
            />
          </div>

          <div className="flex-1 space-y-2">
            <p className="font-bold text-xl">Password</p>
            <input
              type="password"
              placeholder="enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="py-4 border border-[#FFFFFF] w-full rounded-xl px-5"
            />
          </div>

          <div className="flex-1 space-y-2 ">
            <p className="font-bold text-xl">Confirm Password</p>
            <input
              type="password"
              placeholder="re enter your password"
              value={formData.password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              className="py-4 border border-[#FFFFFF] w-full rounded-xl px-5"
            />
          </div>
          <div className="flex justify-center px-15 pt-4">
            <button
              type="submit"
              className="bg-[#B6E63A] w-full py-3 rounded-xl text-black text-lg font-medium"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup
