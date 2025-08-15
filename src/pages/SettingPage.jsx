import { FaArrowLeft } from "react-icons/fa";
import avatar from "../assets/images/Avatar.png";
import { Link } from "react-router-dom";
import Help from "../assets/images/Help.png"
import Logout from "../assets/images/Logout.png";
import User from "../assets/images/User.png";
import Wallet from "../assets/images/Wallet.png";

const SettingPage = () => {
  return (
    <section className="min-h-screen flex flex-col  bg-[#1D1751] p-5 md:p-20 text-white space-y-10">
      <span className="flex space-x-2 items-center">
        <FaArrowLeft />
        <h1 className="font-extrabold text-xl">Settings </h1>
      </span>
      <div className="flex items-center space-x-2 md:space-x-5">
        <img src={avatar} alt="" className="h-10 md:h-30" />

        {/* make dynamic for username and id  */}
        <div className="flex flex-col space-y-3">
          <span className="font-semibold md:font-bold">username</span>
          <span className="text-sm">UID: 290937864668</span>
        </div>
      </div>
      <ul className="">
        <Link
          to=""
          className="flex items-center space-x-10 p-3 border-t border-[#B6E63A]"
        >
          <img src={User} alt="" />
          <span className="font-bold">Edit Profile</span>
        </Link>
        <Link
          to=""
          className="flex items-center space-x-10 p-3 border-t border-[#B6E63A]"
        >
          <img src={Wallet} alt="" />
          <span className="font-bold">Reward History</span>
        </Link>
        <Link
          to=""
          className="flex items-center space-x-10 p-3 border-t border-[#B6E63A]"
        >
          <img src={Wallet} alt="" />
          <span className="font-bold">Change wallet</span>
        </Link>
        <Link
          to=""
          className="flex items-center space-x-10 p-3 border-t border-[#B6E63A]"
        >
          <img src={Help} alt="" />
          <span className="font-bold">Help Center</span>
        </Link>
        <Link
          to=""
          className="flex items-center space-x-10 p-3 border-t border-b border-[#B6E63A]"
        >
          <img src={Logout} alt="" />
          <span className="font-bold">Log out</span>
        </Link>
      </ul>
    </section>
  );
};

export default SettingPage;
