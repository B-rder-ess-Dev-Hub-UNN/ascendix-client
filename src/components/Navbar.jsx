import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-5 text-white bg-[#1D1751] border-b border-b-[#FFFFFF66] md:px-20">
      {/* desktop nav */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-6 ">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src="/src/assets/images/ascendix.png" alt="Ascendix Logo" className="h-7" />
            <span className="text-2xl font-semibold">ascendix</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/quests" className="text-[#B6E63A] cursor-pointer">
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

        <div className="flex space-x-4 items-center relative" ref={dropdownRef}>
          <Link>
            <img src="/src/assets/images/notification.png" alt="Notifications" className="h-5" />
          </Link>
          <button
            onClick={() => setMenuOpen(!MenuOpen)}
            className="cursor-pointer relative"
            aria-label="User menu"
            aria-expanded={MenuOpen}
          >
            <img src="/src/assets/images/Avatar.png" alt="User avatar" className="h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors" />
            <img
              src={avatar}
              alt="User avatar"
              className="h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors"
            />
          </button>

          {/* Desktop Dropdown Menu */}
          {MenuOpen && (
            <div className="absolute right-0 top-12 w-48 bg-[#1D1751] border border-white/20 rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95">
              <div className="py-2">
                <Link
                  to="/quests"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Earn
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm bg-gradient-to-r from-[#8653EF] to-[#B6E63A] text-transparent bg-clip-text hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Web3Mission
                </Link>
                <hr className="border-white/10 my-2" />
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Settings
                </Link>
                <hr className="border-white/10 my-2" />
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-[#B6E63A] hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* mobile nav  */}
      <div className="flex justify-between md:hidden">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <img src="/src/assets/images/ascendix.png" alt="Ascendix Logo" className="h-7" />
          <span className="text-2xl font-semibold">ascendix</span>
        </Link>

        <div className="flex items-center space-x-1 relative" ref={dropdownRef}>
          <Link>
            <img src="/src/assets/images/notification.png" alt="Notifications" className="h-5" />
          </Link>
        <div className="flex items-center relative" ref={dropdownRef}>
          <button
            onClick={() => setMenuOpen(!MenuOpen)}
            className="cursor-pointer"
            aria-label="User menu"
            aria-expanded={MenuOpen}
          >
            <img src="/src/assets/images/Avatar.png" alt="User avatar" className="h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors" />
            <IoMenu className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {MenuOpen && (
        <div className="md:hidden mt-4 bg-[#1D1751] border border-white/20 rounded-lg shadow-xl overflow-hidden animate-in fade-in-0 slide-in-from-top-2">
          <div className="text-sm">
            <Link
              to="/quests"
              className="block px-4 py-3 text-sm text-[#B6E63A] hover:bg-white/10 transition-colors font-medium border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Earn
            </Link>
            <Link
              to="#"
              className="block px-4 py-3 hover:bg-white/10 transition-colors font-medium border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Web3Mission
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Settings
            </Link>
            <Link
              to="/login"
              className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-3 text-[#B6E63A] hover:bg-white/10 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
