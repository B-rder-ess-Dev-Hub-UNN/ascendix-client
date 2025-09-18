import { useState } from "react";
import QuestCard from "../../components/QuestCard";

const Quests = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", "Survey", "Social", "Video", "Research"];
  const statuses = ["All", "Ongoing", "New", "Completed"];

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedStatus("All");
  };

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold">Quests</h1>
        <p className="text-white/80">Pick a quest, earn ASC tokens, and climb the leaderboard.</p>
      </header>

      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="text-white/70">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/10 border border-white/30 rounded-lg px-3 py-1 text-white outline-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-white/70">Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-white/10 border border-white/30 rounded-lg px-3 py-1 text-white outline-none"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <button
          onClick={resetFilters}
          className="px-4 py-1 bg-[#B6E63A] text-black rounded-lg hover:opacity-90"
        >
          Reset all
        </button>
      </div>

      <QuestCard category={selectedCategory} status={selectedStatus} />
    </section>
  );
};

export default Quests;


