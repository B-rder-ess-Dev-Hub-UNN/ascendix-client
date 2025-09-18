import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { useState } from "react";

const categories = [
  "Topology",
  "AI for beginners",
  "Javascripts",
  "Operating systems",
  "Research writing",
  "Content marketing",
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:px-20 space-y-6">
      {/* Header: back + search */}
      <div className="flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-3 text-white/90 hover:text-white">
          <FaArrowLeft />
          <span><h4 className="font-bold">Library</h4></span>
        </Link>

        <div className="relative w-56 md:w-72">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          <input
            placeholder="Search library"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-white/30 rounded-xl pl-9 pr-3 py-2 placeholder:text-white/60 outline-none focus:border-white/60"
          />
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {filteredCategories.map((name) => {
          const slug = name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <Link
              key={name}
              to={`/librarylist/${slug}`}
              className="block rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-colors"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="font-medium">{name}</span>
                <FaArrowRight className="text-white/80" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Library;


