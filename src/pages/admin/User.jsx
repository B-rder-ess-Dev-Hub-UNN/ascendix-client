const User = () => {
  const users = [
    {
      name: "Yourguy",
      uid: "200378246098",
      ongoingCourses: 27,
      ongoingQuest: 204,
      completedQuests: 310,
      completedCourses: 15,
      pendingToken: "3,600",
      tokenEarned: "18,000",
      certificates: 15,
    },
    {
      name: "Peejay",
      uid: "200378246081",
      ongoingCourses: 21,
      ongoingQuest: 254,
      completedQuests: 380,
      completedCourses: 11,
      pendingToken: "1,700",
      tokenEarned: "11,500",
      certificates: 11,
    },
    {
      name: "Emma",
      uid: "200378246021",
      ongoingCourses: 7,
      ongoingQuest: 244,
      completedQuests: 340,
      completedCourses: 14,
      pendingToken: "2,700",
      tokenEarned: "15,000",
      certificates: 14,
    },
    {
      name: "Godswill",
      uid: "200378246044",
      ongoingCourses: 15,
      ongoingQuest: 294,
      completedQuests: 310,
      completedCourses: 10,
      pendingToken: "4,100",
      tokenEarned: "9,000",
      certificates: 10,
    },
    {
      name: "Bright",
      uid: "200378246013",
      ongoingCourses: 26,
      ongoingQuest: 214,
      completedQuests: 320,
      completedCourses: 13,
      pendingToken: "4,500",
      tokenEarned: "13,500",
      certificates: 13,
    },
  ];

  return (
    <section className="flex-1 space-y-10 border border-[#B6E63A80] rounded-lg m-5 p-5 min-h-screen">
      <div>
        <p className="text-xl font-semibold">User Metrics Overview</p>
        <p className="text-sm">User Identity and website usage analytics.</p>
      </div>

      <div className="space-y-5">
        {/* Header */}
        <div className="grid grid-cols-8 pb-2">
          <div>User Profile</div>
          <div className="text-center">Ongoing Courses</div>
          <div className="text-center">Ongoing Quest</div>
          <div className="text-center">Completed Quests</div>
          <div className="text-center">Completed Courses</div>
          <div className="text-center">Pending Token</div>
          <div className="text-center">Token Earned</div>
          <div className="text-center">Certificates</div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {users.map((user, i) => (
            <div
              key={i}
              className="grid grid-cols-8 items-center border border-[#FFFFFF]/20 rounded-lg p-3 hover:bg-[#16163a] transition"
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm">{user.name}</span>
                <div className="text-xs flex space-x-2">
                  <p>UID: </p>
                  <span>{user.uid}</span>
                </div>
              </div>
              <div className="text-center">{user.ongoingCourses}</div>
              <div className="text-center">{user.ongoingQuest}</div>
              <div className="text-center">{user.completedQuests}</div>
              <div className="text-center">{user.completedCourses}</div>
              <div className="text-center">{user.pendingToken}</div>
              <div className="text-center">{user.tokenEarned}</div>
              <div className="text-center">{user.certificates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default User;
