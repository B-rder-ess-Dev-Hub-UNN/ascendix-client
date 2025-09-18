import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import cards from "../../db/cards";

const QuestDetail = () => {
  const { id } = useParams();
  const quest = cards.find(c => c.id === id);
  const [answers, setAnswers] = useState({});
  const [code, setCode] = useState("");
  const [tag, setTag] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  if (!quest) {
    return (
      <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20">
        <p className="text-white/80">Quest not found.</p>
        <Link to="/quests" className="text-[#B6E63A] underline">Back to Quests</Link>
      </section>
    );
  }

  const handleSubmit = () => {
    // Handle submission logic here
    setIsCompleted(true);
  };

  const renderQuestContent = () => {
    switch (quest.type) {
      case "survey":
        return (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-white/80">{quest.instructions}</p>
            </div>

            <div className="space-y-4">
              {quest.questions.map((question, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <label className="block text-sm font-medium mb-2">{question}</label>
                  <textarea
                    value={answers[index] || ""}
                    onChange={(e) => setAnswers({...answers, [index]: e.target.value})}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none focus:border-[#B6E63A]"
                    rows="3"
                    placeholder="Your answer..."
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case "video":
        return (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-white/80">{quest.instructions}</p>
              <a href={quest.videoLink} target="_blank" rel="noopener noreferrer" className="text-[#B6E63A] underline mt-2 inline-block">
                Watch Video
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <label className="block text-sm font-medium mb-2">Enter the code from the video:</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none focus:border-[#B6E63A]"
                  placeholder="Video code..."
                />
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <label className="block text-sm font-medium mb-2">Enter the tag from the video:</label>
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white placeholder:text-white/50 outline-none focus:border-[#B6E63A]"
                  placeholder="Video tag..."
                />
              </div>
            </div>
          </div>
        );

      case "social":
        return (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-white/80">{quest.instructions}</p>
              <a href={quest.link} target="_blank" rel="noopener noreferrer" className="text-[#B6E63A] underline mt-2 inline-block">
                Follow on X
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-white/80">{quest.instructions}</p>
          </div>
        );
    }
  };

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      <Link to="/quests" className="text-[#B6E63A] underline">← Back to Quests</Link>

      <div className="border border-[#B6E63A] rounded-2xl overflow-hidden">
        <img src={quest.img} alt={quest.questName} className="h-60 w-full object-cover" />
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-extrabold">{quest.questName}</h1>
            <span className={`px-3 py-1 rounded-full text-sm ${
              quest.status === 'Ongoing' ? 'bg-blue-500' :
              quest.status === 'Completed' ? 'bg-green-500' :
              'bg-yellow-500'
            } text-white`}>
              {quest.status}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/70">
            <span>{quest.category}</span>
            <span>•</span>
            <span>{quest.token} ASC Token</span>
            {quest.deadline && (
              <>
                <span>•</span>
                <span>Deadline: {quest.deadline}</span>
              </>
            )}
          </div>

          {renderQuestContent()}

          {!isCompleted && quest.status !== 'Completed' && (
            <div className="pt-4 space-y-3">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-3 bg-[#B6E63A] text-black rounded-lg hover:opacity-90 font-semibold"
              >
                Submit Quest
              </button>
              <button className="w-full px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10">
                Pause Quest
              </button>
            </div>
          )}

          {isCompleted && (
            <div className="pt-4">
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Quest Completed!</h3>
                <p className="text-white/80">You have earned {quest.token} ASC Tokens</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestDetail;