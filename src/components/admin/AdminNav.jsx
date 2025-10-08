import { CiSearch } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import notification from "../../assets/images/notification.png"
import Avatar from "../../assets/images/Avatar.png";

import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="p-5 text-white bg-[#1D1751]">
      <div className="flex justify-between">
        <div className="relative border border-[#B6E63A80] rounded-lg w-2/3">
          <CiSearch
            size={20}
            className="absolute left-2 top-2.5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full px-8 py-2 outline-none placeholder:text-[#d4d4d4] placeholder:text-sm"
          />
        </div>
        <div className="flex items-center space-x-3">
          <IoSunny />
          <Link>
            <img src={notification} alt="Notifications" className="h-5" />
          </Link>
          <div className="flex items-center space-x-2">
            <button>
              <img
                src={Avatar}
                alt="User avatar"
                className="h-10 rounded-full"
              />
            </button>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
