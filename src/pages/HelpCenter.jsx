import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Discord from "../assets/images/Discord.png";
import Github from "../assets/images/Github.png";
import Twitter from "../assets/images/Twitter.png";
import Reddits from "../assets/images/Reddits.png";

const HelpCenter = () => {
  return (
    <section className="min-h-screen flex flex-col  bg-[#1D1751] p-5 md:p-20 text-white space-y-10">
      <span className="flex space-x-2 items-center">
        <FaArrowLeft />
        <h1 className="font-extrabold text-xl">Help Center</h1>
      </span>
      <div className="flex items-center justify-between">
        <Link to=""><img src={Discord} alt="Discord" /></Link>
        <Link to=""><img src={Github} alt="Github" /></Link>
        <Link to=""><img src={Twitter} alt="Twitter" /></Link>
        <Link to=""><img src={Reddits} alt="Reddits" /></Link>
      </div>
      <ul className="flex flex-col">
        <Link to="" className=" p-3">
          <span className="text-xl">FAQ</span>
        </Link>
        <Link to="" className=" p-3 border-t border-[#B6E63A]">
          <span className="text-xl">Contact Us</span>
        </Link>
        <Link to="" className=" p-3 border-t border-[#B6E63A]">
          <span className="text-xl">Privacy Policy</span>
        </Link>
        <Link to="" className=" p-3 border-t border-[#B6E63A]">
          <span className="text-xl">About Us</span>
        </Link>
        <Link to="" className="p-3 border-t border-[#B6E63A]">
          <span className="text-xl">Term of use</span>
        </Link>
      </ul>
    </section>
  );
};

export default HelpCenter;
