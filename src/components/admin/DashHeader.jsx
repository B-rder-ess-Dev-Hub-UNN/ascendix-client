import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { library, quest } from "../../assets/a_icons/icons";

const DashHeader = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <div className="flex-1 border border-[#B6E63A80] rounded-xl">
        <div className="flex-1 p-3 space-y-5">
          <div className="flex justify-between">
            <span className="font-medium items-center">Total Users</span>
            <FaRegUser size={20} />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-3xl">645</span>
            <div className="bg-[#67F88BB2] rounded text-sm py-1 px-3">
              +<span>2.4%</span>
            </div>
          </div>
        </div>
        <hr className="text-[#B6E63A80]" />
        <div className="flex justify-between p-3 items-center">
          <span className="text-xs font-medium">+16 from last month</span>
          <Link
            to="/admin/user"
            className="bg-[#8653EF1A] border border-[#B6E63A80] rounded text-xs font-medium py-2 px-5 cursor-pointer"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="flex-1 border border-[#B6E63A80] rounded-xl">
        <div className="flex-1 p-3 space-y-5">
          <div className="flex justify-between">
            <span className="font-medium items-center">Total Courses</span>
            <RiGraduationCapLine size={20} />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-3xl">10645</span>
            <div className="bg-[#67F88BB2] rounded text-sm py-1 px-3">
              +<span>2.4%</span>
            </div>
          </div>
        </div>
        <hr className="text-[#B6E63A80]" />
        <div className="flex justify-between p-3 items-center">
          <span className="text-xs font-medium">+16 from last month</span>
          <Link
            to=""
            className="bg-[#8653EF1A] border border-[#B6E63A80] rounded text-xs font-medium py-2 px-5 cursor-pointer"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="flex-1 border border-[#B6E63A80] rounded-xl">
        <div className="flex-1 p-3 space-y-5">
          <div className="flex justify-between">
            <span className="font-medium items-center">Total Libraries</span>
            <img src={library} alt="" className="h-5" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-3xl">2045</span>
            <div className="bg-[#67F88BB2] rounded text-sm py-1 px-3">
              +<span>5.4%</span>
            </div>
          </div>
        </div>
        <hr className="text-[#B6E63A80]" />
        <div className="flex justify-between p-3 items-center">
          <span className="text-xs font-medium">+16 from last month</span>
          <Link
            to=""
            className="bg-[#8653EF1A] border border-[#B6E63A80] rounded text-xs font-medium py-2 px-5 cursor-pointer"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="flex-1 border border-[#B6E63A80] rounded-xl">
        <div className="flex-1 p-3 space-y-5">
          <div className="flex justify-between">
            <span className="font-medium items-center">Total Quests</span>
            <img src={quest} alt="" className="h-5" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-3xl">24645</span>
            <div className="bg-[#67F88BB2] rounded text-sm py-1 px-3">
              +<span>4.4%</span>
            </div>
          </div>
        </div>
        <hr className="text-[#B6E63A80]" />
        <div className="flex justify-between p-3 items-center">
          <span className="text-xs font-medium">+16 from last month</span>
          <Link
            to="/admin/quest"
            className="bg-[#8653EF1A] border border-[#B6E63A80] rounded text-xs font-medium py-2 px-5 cursor-pointer"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
