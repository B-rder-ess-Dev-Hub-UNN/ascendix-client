import { FaGithub, FaDiscord, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#1D1751] border-t border-t-[#FFFFFF66] p-5 md:p-0 md:px-20 md:py-5 text-white">
      {/* desktop footer  */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="text-xl">ascendix</span>
          <div className="flex space-x-4">
            <Link to="#" className="cursor-pointer">
              Term of use
            </Link>
            <Link to="#" className="cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="#" className="cursor-pointer">
              Help center
            </Link>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <Link to="#" target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaDiscord className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaXTwitter className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaTelegram className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* mobile footer  */}
      <div className="flex justify-between items-center md:hidden">
        <span className="text-xl font-bold">ascendix</span>

        <div className="flex space-x-4">
          <Link to="#" target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaDiscord className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaXTwitter className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaTelegram className="text-2xl" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Footer;
