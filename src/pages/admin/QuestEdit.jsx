import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPlus, FaArrowLeft } from "react-icons/fa6";
import asc2 from "../../assets/images/asc2.jpg";

const QuestEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary static quests (later you’ll fetch this from backend)
    const sampleQuests = [
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

  const [quest, setQuest] = useState(null);

  // Load the quest data by ID
  useEffect(() => {
    const found = sampleQuests.find((q) => q.id === parseInt(id));
    setQuest(found);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuest((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (index, value) => {
    const updated = [...quest.questions];
    updated[index] = value;
    setQuest((prev) => ({ ...prev, questions: updated }));
  };

  const addQuestion = () => {
    setQuest((prev) => ({
      ...prev,
      questions: [...prev.questions, ""],
    }));
  };

  const handleUpload = () => {
    alert("Quest updated successfully (connect backend later).");
    navigate("/admin/quest");
  };

  const handleDelete = () => {
    alert("Quest deleted (connect backend later).");
    navigate("/admin/quest");
  };

  if (!quest) {
    return (
      <section className="flex-1 min-h-screen p-6 flex items-center justify-center">
        <p className="text-sm text-gray-400">Loading quest data...</p>
      </section>
    );
  }

  return (
    <section className="flex-1 min-h-screen p-6">
      <div className="border border-[#B6E63A80] rounded-lg p-6 ">
        <Link to="/admin/quest">
          <FaArrowLeft className="mb-2 cursor-pointer" />
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl">Quest</h2>
            <p className="text-sm">Quest for Ascendix</p>
          </div>
          <div className="space-x-3">
            <button
              onClick={handleDelete}
              className="bg-[#FF450094] px-4 py-2 rounded-md text-sm cursor-pointer border border-[#A03222]"
            >
              Delete Quest
            </button>
            <button
              onClick={handleUpload}
              className="bg-[#8653EF1A] px-4 py-2 rounded-md text-sm cursor-pointer border border-[#B6E63A80]"
            >
              Upload Quest
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-2">Quest Name</label>
              <input
                name="title"
                value={quest.title}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#FFFFFF33] rounded-md px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Quest Price</label>
              <input
                name="token"
                value={quest.token}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#FFFFFF33] rounded-md px-3 py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm block mb-2 mt-4">Quest Bio</label>
            <textarea
              name="bio"
              value={quest.bio}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#FFFFFF33] rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="text-sm block mb-2 mt-4">
              Quest Instructions
            </label>
            <textarea
              name="instructions"
              value={quest.instructions}
              onChange={handleChange}
              className="w-full border border-[#FFFFFF33] rounded-md px-3 py-2 outline-none"
            />
          </div>

          {/* Questions */}
          <div className="mt-4">
            <label className="text-sm block mb-2">Quest Questions</label>
            <div className="space-y-3">
              {quest.questions.map((q, index) => (
                <input
                  key={index}
                  value={q}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="w-full border border-[#FFFFFF33] rounded-md px-3 py-2 outline-none"
                />
              ))}
            </div>
            <button
              onClick={addQuestion}
              className="border border-dashed border-[#FFFFFFB2] mt-3 py-2 text-center cursor-pointer w-full"
            >
              + Add a new question
            </button>
          </div>

          {/* Image Upload Section */}
          <div className="mt-8">
            <p className="text-sm mb-3 text-center">Add a quest image</p>

            <div className="flex justify-center">
              <input
                type="file"
                accept="image/*"
                id="quest-image-upload"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setQuest({ ...quest, image: imageUrl });
                  }
                }}
              />

              <div
                onClick={() =>
                  document.getElementById("quest-image-upload").click()
                }
                className="w-96 h-40 flex items-center justify-center border border-[#FFFFFF33] rounded-md cursor-pointer"
              >
                {quest.image ? (
                  <img
                    src={quest.image}
                    alt="Quest"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <FaPlus className="text-center" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestEdit;
