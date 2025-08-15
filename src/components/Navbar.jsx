import logo from "../assets/images/ascendix.png";
import { Link } from "react-router-dom";
import avatar from "../assets/images/Avatar.png";
import notify from "../assets/images/notification.png"
import { useState } from "react";

const Navbar = () => {

  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-5 text-white bg-[#1D1751] border-b border-b-[#FFFFFF66] md:px-20">
      {/* desktop nav */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-6 ">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src={logo} alt="Ascendix Logo" className="h-7" />
            <span className="text-2xl font-semibold">ascendix</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="#" className="text-[#B6E63A] cursor-pointer">
              Earn
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-r from-[#8653EF] to-[#B6E63A] text-transparent bg-clip-text cursor-pointer"
            >
              Web3Mission
            </Link>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <Link>
            <img src={notify} alt="" className="h-5" />
          </Link>
          <button
            onClick={() => setMenuOpen(!MenuOpen)}
            className="cursor-pointer"
          >
            <img src={avatar} alt="" className="h-10" />
          </button>
        </div>
      </div>

      {/* mobile nav  */}
      <div className="flex justify-between md:hidden">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Ascendix Logo" className="h-7" />
          <span className="text-2xl font-semibold">ascendix</span>
        </Link>

        <div className="flex items-center space-x-1">
          <Link>
            <img src={notify} alt="" className="h-5" />
          </Link>
          <button
            onClick={() => setMenuOpen(!MenuOpen)}
            className="cursor-pointer"
          >
            <img src={avatar} alt="" className="h-10" />
          </button>
        </div>
      </div>

      {/* mobile dropdown menu  */}
      {MenuOpen && (
        <div className="flex flex-col font-bold">
          <Link to="#" className="text-[#B6E63A] cursor-pointer">
            Earn
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-[#8653EF] to-[#B6E63A] text-transparent bg-clip-text cursor-pointer"
          >
            Web3Mission
          </Link>
          <Link to="/login" className="cursor-pointer">
            Login
          </Link>
          <Link to="/signup" className="cursor-pointer">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
