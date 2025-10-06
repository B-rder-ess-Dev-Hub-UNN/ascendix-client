import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="p-5 text-white bg-[#1D1751] border-b border-b-[#FFFFFF66] md:p-0 md:px-20 md:py-5">
      {/* desktop nav */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-6 ">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src="/src/assets/images/ascendix.png" alt="Ascendix Logo" className="h-7" />
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
          <button className="shadow-sm py-2 px-6 rounded-2xl cursor-pointer">
            <Link to="/login">Login</Link>
          </button>
          <button className="border py-2 px-6 border-[#B6E63A] rounded-2xl cursor-pointer">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>

      {/* mobile nav  */}
      <div className="flex justify-between md:hidden">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <img src="/src/assets/images/ascendix.png" alt="Ascendix Logo" className="h-7" />
          <span className="text-2xl font-semibold">ascendix</span>
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="cursor-pointer">
          <img src="/src/assets/images/Avatar.png" alt="" className="h-10"/>
        </button>
      </div>

      {/* mobile dropdown menu  */}
      {mobileMenuOpen && (
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
          <Link to="/login" className="cursor-pointer">Login</Link>
          <Link to="/signup" className="cursor-pointer">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Header
