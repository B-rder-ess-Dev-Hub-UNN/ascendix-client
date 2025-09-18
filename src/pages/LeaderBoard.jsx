import React, { useState } from "react";
import ellipse from "../assets/images/ellipse.png";


const LeaderBoard = () => {
  const [expanded, setExpanded] = useState(null);


//   to be replaced with actual user data
  const users = [
    {
      rank: 1,
      name: "Peejay",
      avatar: "bg-gradient-to-r from-gray-600 to-gray-300",
      asc: "30k ASC",
      usd: "$300",
      courses: 15,
      quests: 25,
    },
    {
      rank: 2,
      name: "Emma00",
      avatar: "bg-gradient-to-r from-purple-600 to-purple-400",
      asc: "27k ASC",
      usd: "$270",
      courses: 10,
      quests: 20,
    },
    {
      rank: 3,
      name: "Devdanny",
      avatar: "bg-gradient-to-r from-purple-900 to-purple-600",
      asc: "25k ASC",
      usd: "$250",
      courses: 8,
      quests: 15,
    },
    {
      rank: 4,
      name: "Youruiguy",
      avatar: "bg-gradient-to-r from-purple-700 to-lime-400",
      asc: "20k ASC",
      usd: "$200",
      courses: 12,
      quests: 18,
    },
  ];

  const toggleExpand = (rank) => {
    setExpanded(expanded === rank ? null : rank);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1D1751] text-white md:p-6">
      <div className="w-full max-w-3xl bg-gradient-to-r from-[#FFFFFF33] to-[#99999933] border-2 border-[#99999933] rounded-4xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Leaderboard</h2>
          <span className="text-xl">Top 10 rankers</span>
        </div>

        {/* Highlight Current User */}
        <div className="border border-[#FFFFFF24] p-4 flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            {/* to be replaced with user image and data */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-700 to-lime-400"></div>
            <span className="font-semibold">4 Youruiguy</span>
          </div>
          <div className="flex flex-col items-start space-x-2 md:items-center md:flex-row ">
            <div className="flex items-center space-x-1">
              <img src={ellipse} alt="" className="h-4" />
              <span className="font-semibold">20k ASC</span>
            </div>
            <span className="bg-gradient-to-r from-[#FFFFFF33] to-[#99999933] px-3 py-1 rounded-lg font-semibold">
              $200
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="divide-y divide-[#99999933]">
          {/* table header */}
          <div className="flex justify-between items-center md:p-4">
            <div className="flex space-x-10 font-semibold">
              <span>#</span>
              <span className="font-semibold">Users</span>
            </div>
            <span className="font-semibold">Earnings</span>
          </div>
          {users.map((u) => (
            <div key={u.rank} className="py-4">
              {/* Row */}
              <div className="flex justify-between items-center">
                {/* Rank + User */}
                <div className="flex items-center space-x-4">
                  <span className="w-6 text-center font-bold">{u.rank}</span>
                  <div className={`w-10 h-10 rounded-full ${u.avatar}`}></div>
                  <span>{u.name}</span>
                </div>

                {/* Earnings + Toggle */}
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex flex-col md:flex-row space-x-1">
                    <div className="flex items-center space-x-1">
                      <img src={ellipse} alt="" className="h-4" />
                      <span>{u.asc}</span>
                    </div>
                    <span className="bg-gradient-to-r from-[#FFFFFF33] to-[#99999933] px-3 py-1 rounded-lg text-sm">
                      {u.usd}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleExpand(u.rank)}
                    className="text-[#B6E63A] text-xs"
                  >
                    {expanded === u.rank ? "▲" : "See more info"}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expanded === u.rank && (
                <div className="mt-3 ml-12 text-sm text-gray-300 space-y-1">
                  <p>Courses completed ({u.courses})</p>
                  <p>Quest completed ({u.quests})</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
