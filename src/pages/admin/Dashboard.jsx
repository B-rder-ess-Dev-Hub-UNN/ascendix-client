import { useNavigate } from "react-router-dom";
import asc2 from "../../assets/images/asc2.jpg";
import ellipse from "../../assets/images/ellipse.png";


const Dashboard = () => {

      const navigate = useNavigate();

    // Fake quest data (you can replace this with props or API later)
  const quests = [
    {
      id: 1,
      title: "Survey on AI",
      token: "0.5",
      bio: "Quick survey on the benefit of AI and how it will impact the growth of our ecosystem.",
      instructions:
        "Do not use AI-generated answers. We need your sincere view. Answer all questions carefully.",
      questions: [
        "Rate the course from 1–10 and explain why.",
        "What benefit does AI bring to modern learning?",
      ],
      image: asc2,
    },
    {
      id: 2,
      title: "Abstract Survey",
      token: "0.5",
      bio: "Exploring abstract ideas and concepts.",
      instructions:
        "Answer with your own understanding. No generated content allowed.",
      questions: ["How do abstract ideas shape innovation?"],
      image: asc2,
    },
    {
      id: 3,
      title: "Youtube Quiz",
      token: "0.5",
      bio: "Quick quiz about YouTube content creation and engagement strategies.",
      instructions:
        "Answer sincerely. Each question tests your understanding of the topic.",
      questions: [
        "What makes YouTube a great learning platform?",
        "Rate YouTube’s role in digital marketing (1–10).",
      ],
      image: asc2,
    },
  ];

    // Fake user data
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
    <section className="min-h-screen p-6 space-y-6">
      <div className="flex justify-between items-center space-x-4">
        {/* Notice Board */}
        {/* get more details concerning this page  */}
        <div className="border border-[#B6E63A80] rounded-lg p-4 w-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-medium">Notice Board</h2>
              <p className="text-sm">New updates for Ascendix</p>
            </div>
            <button className="border border-[#B6E63A80] px-3 py-1 rounded-md text-sm hover:bg-[#8653EF1A]">
              Edit Notice
            </button>
          </div>
          <div className="flex-1 space-y-2">
            <div className="border border-dashed border-[#FFFFFF33] flex justify-center items-center py-3 cursor-pointer hover:bg-[#8653EF1A]">
              <span className="text-3xl text-[#FFFFFFB2]">+</span>
            </div>

            {/* notice  */}
            <div className="flex-1 space-y-2">
              <div className="border border-[#FFFFFF33] rounded-md p-3">
                <p className="text-sm font-medium">Notice Board</p>
                <p className="text-xs text-gray-400">
                  New updates for Ascendix
                </p>
              </div>
              <div className="border border-[#FFFFFF33] rounded-md p-3">
                <p className="text-sm font-medium">Notice Board</p>
                <p className="text-xs text-gray-400">
                  New updates for Ascendix
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quest Section */}
        <div className="border border-[#B6E63A80] rounded-lg p-4 w-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-sm font-semibold">Quest</h2>
              <p className="text-xs">Quizzes for Ascendix</p>
            </div>
            <button
              onClick={() => navigate("/admin/quest")}
              className="border border-[#B6E63A80] px-3 py-1 rounded-md text-sm hover:bg-[#8653EF1A]"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {quests.slice(0, 3).map((quest) => (
              <div
                key={quest.id}
                className="flex items-center justify-between border border-[#FFFFFF33] rounded-md p-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={quest.image}
                    alt={quest.title}
                    className="w-20 h-12 rounded object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-3">
                      <p className="text-sm">{quest.title}</p>
                      <span className="flex items-center space-x-1">
                        <img src={ellipse} alt="" className="h-4" />
                        <span className="text-xs">{quest.token} ASC Token</span>
                      </span>
                    </div>
                    <p className="text-sm">{quest.bio}</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/admin/quest/${quest.id}`)}
                  className="text-xs border border-[#B6E63A80] px-3 py-1 rounded-md hover:bg-[#8653EF1A]"
                >
                  Edit Quest
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Metrics */}
      <div className="border border-[#B6E63A80] rounded-lg p-4 space-y-4">
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
            {users.slice(0, 10).map((user, i) => (
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
      </div>
    </section>
  );
}

export default Dashboard

