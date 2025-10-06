import { useState } from "react";
import { PiSidebarSimpleThin } from "react-icons/pi";
import { RiChatNewLine, RiDeleteBin4Line } from "react-icons/ri";

import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { library, quest, tokens } from "../../assets/a_icons/icons";
import logo from "../../assets/images/ascendix.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);



  return (
    <div
      className={`flex flex-col justify-between space-y-5 bg-[#1D1751] text-white border-r border-[#404040] min-h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Header */}

      <div className="border-b border-[#B6E63A80] flex-1 p-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 rounded-lg transition"
        >
          <img src={logo} className="h-7 object-contain" alt="" />
          {isOpen && <span className="text-lg font-bold">Acendix</span>}
        </button>
      </div>

      <ul className="flex-1 space-y-8 p-3">
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg transition">
          <TbLayoutDashboard size={20} />
          {isOpen && <span className="font-medium text-lg">Dashboard</span>}
        </li>
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg transition">
          <img src={quest} alt="" />
          {isOpen && <span className="font-medium text-lg">Quest</span>}
        </li>
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg text-sm transition">
          <img src={library} alt="" />
          {isOpen && <span className="font-medium text-lg">Library</span>}
        </li>
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg text-sm transition">
          <FaRegUser size={20} />
          {isOpen && <span className="font-medium text-lg">Users</span>}
        </li>
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg text-sm transition">
          <img src={tokens} alt="" />
          {isOpen && <span className="font-medium text-lg">Token</span>}
        </li>
      </ul>


      {/* Footer */}
      <ul className="border-t border-[#B6E63A80] p-3">
        <li className="w-full flex items-center gap-2 hover:bg-[#271D61] px-3 py-2 rounded-lg text-sm transition">
          <FiSettings size={20} />
          {isOpen && <span className="font-medium text-lg">Settings</span>}
        </li>
        <li className="w-full flex items-center gap-2 text-[#FF4500] hover:bg-[#271D61] px-3 py-2 rounded-lg text-sm transition">
          <TbLogout size={20} />
          {isOpen && <span className="font-medium text-lg">Logout</span>}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;