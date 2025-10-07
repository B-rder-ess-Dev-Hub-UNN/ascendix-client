import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";

const Profile = () => {
  return (
    <section className="min-h-screen flex flex-col  bg-[#1D1751] p-5 md:p-20 text-white space-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-5">
          <img
            src="/src/assets/images/Avatar.png"
            alt=""
            className="h-10 md:h-30"
          />

          {/* make dynamic for username and id  */}
          <div className="flex flex-col">
            <span className="font-semibold md:font-bold">username</span>
            <span className="text-sm">UID: 290937864668</span>
          </div>
        </div>

        {/* wallet for destop  */}
        <div className="hidden md:flex space-x-1 md:space-x-3 items-center">
          <Link>
            <img src="/src/assets/images/Setting.png" alt="" className="h-5" />
          </Link>
          <button className="bg-gradient-to-r from-[#8653EF] to-[#B6E63A] p-1 md:px-8 md:py-5 rounded-2xl font-semibold md:font-bold">
            Connect Wallet
          </button>
        </div>

        {/* wallet for mobile  */}
        <button className="md:hidden bg-gradient-to-r from-[#8653EF] to-[#B6E63A] p-2 rounded ">
          <LuWallet size={20} />
        </button>
      </div>

      <div className="border p-3  flex flex-col  rounded-2xl md:p-6 md:flex-row md:items-center  md:justify-center  md:space-x-40 md:mx-40">
        <div className="flex justify-between items-center md:flex-col md:space-y-2">
          <p>Total coin earned</p>
          <span className="flex items-center space-x-1">
            <img src="/src/assets/images/ellipse.png" alt="" className="h-4" />
            <p className="text-sm">20k ASC Token</p>
          </span>
        </div>

        <div className="flex justify-between items-center md:flex-col md:space-y-2">
          <p>Pending coin</p>
          <span className="flex items-center space-x-1">
            <img src="/src/assets/images/ellipse.png" alt="" className="h-4" />
            <p className="text-sm">5k ASC Token</p>
          </span>
        </div>

        <div className="flex justify-between items-center md:flex-col md:space-y-2">
          <p>Coin withdrawn</p>
          <span className="flex items-center space-x-1">
            <img src="/src/assets/images/ellipse.png" alt="" className="h-4" />
            <p className="text-sm">15k ASC Token</p>
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        <div className="flex justify-between">
          <span className="font-bold">Ongoing courses (1)</span>
          <Link className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">Go to course</span>
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Pending Courses (5)</span>
          <Link
            to="/courses"
            className="flex items-center space-x-1 cursor-pointer"
          >
            <span className="font-medium">View courses</span>
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Ongoing Quests (6)</span>
          <Link className="flex items-center space-x-1 cursor-pointer">
            <span className="font-medium">Go to quests</span>
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Pending Quests (20)</span>
          <Link
            to="/quests"
            className="flex items-center space-x-1 cursor-pointer"
          >
            <span className="font-medium">View quests</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile
