import course from "../assets/images/Frame 8.png";
import library from "../assets/images/Frame 9.png";
import quest from "../assets/images/Frame 10.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import QuestCard from "../components/QuestCard";
import LeaderCard from "../components/LeaderCard";

const HomePage = () => {
  return (
    <section className="bg-[#1D1751] min-h-screen flex flex-col text-white p-5 md:p-20 space-y-10">
      {/* Hero section  */}
      <div className=" flex flex-col items-center text-center justify-center space-y-4 md:px-50">
        <h1 className="font-extrabold text-3xl md:text-6xl">
          <span className="text-[#B6E63A]">Earn</span> money in Web3: Learn
          while you earn.
        </h1>
        <p className="font-semibold text-xl md:text-3xl">
          "Learn, Earn, Conquer quests!"
        </p>
        <Link
          to=""
          className="border border-[#B6E63A] py-3 px-8 rounded-2xl font-medium"
        >
          Start Earning Now
        </Link>
      </div>

      {/* quest section  */}
      <div className="flex flex-col space-y-5">
        <div className="flex items-center space-x-8">
          <p className="font-medium text-xl">Top Quest Picked</p>
          <Link to="/quests" className="flex items-center space-x-2">
            <span className="font-medium text-[#B6E63A]">View all</span>
            <FaArrowRight className="" />
          </Link>
        </div>

        <QuestCard />
      </div>

      {/* Leaderboard section */}
      <div className="flex flex-col space-y-5">
        <div className="flex items-center space-x-8">
          <p className="font-medium text-xl">Leaderboard</p>
          <Link to="/leaderboard" className="flex items-center space-x-2">
            <span className="font-medium text-[#B6E63A]">View all</span>
            <FaArrowRight className="" />
          </Link>
        </div>

        <LeaderCard />
      </div>

      {/* earn section  */}
      <div className="space-y-5">
        <div>
          <h2 className="font-semibold text-2xl">Have a minute?</h2>
          <p className="font-semibold text-2xl text-[#B6E63A]">Earn now!</p>
        </div>

        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <Link to="/courses">
            <img src={course} alt="" />
          </Link>
          <Link to="/library">
            <img src={library} alt="" />
          </Link>
          <Link to="/quests">
            <img src={quest} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
