import DashHeader from "../../components/admin/DashHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

import asc2 from "../../assets/images/asc2.jpg"
import ellipse from "../../assets/images/ellipse.png";

const Quest = () => {
  // Temporary static data (you can later fetch this from your backend)
  const [quests] = useState([
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
  ]);

  return (
    <section className="flex-1 space-y-10  rounded-lg m-5 p-5 min-h-screen">
      <DashHeader />
      <div className="min-h-screen p-6 space-y-8 border border-[#B6E63A80] rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Quest</h2>
            <p className="text-sm">Quizzes for Ascendix</p>
          </div>
          <Link
            to=""
            className="bg-[#8653EF1A] text-sm px-4 py-2 border border-[#B6E63A80] rounded-md"
          >
            Add Quest
          </Link>
        </div>

        {/* Quest Cards */}
        <div className="space-y-4">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="flex items-center justify-between border border-[#FFFFFF33] rounded-lg p-2 hover:bg-[#222256] transition"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-20 h-16 rounded-sm object-cover"
                />
                <div>
                  <div className="flex items-center space-x-3">
                    <p className="font-semibold text-white">{quest.title}</p>
                    <span className="flex items-center space-x-1">
                      <img src={ellipse} alt="" className="h-4" />
                      <span className="text-sm">{quest.token} ASC Token</span>
                    </span>
                  </div>
                  <p className="text-sm">{quest.bio}</p>
                </div>
              </div>

              <Link
                to={`/admin/quest/${quest.id}`}
                className="bg-[#8653EF1A] border border-[#B6E63A80] text-sm px-4 py-2 rounded-md cursor-pointer"
              >
                Edit Quest
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quest;

