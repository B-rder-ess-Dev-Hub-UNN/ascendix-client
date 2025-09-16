import { Link } from "react-router-dom";
import { useState } from "react";
import courses from "../../db/courses";

const CoursesList = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Ongoing", "New", "Completed"];

  const filteredCourses = selectedFilter === "All" ? courses : courses.filter(c => c.status === selectedFilter);
  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold">Courses</h1>
        <div className="flex items-center gap-3 text-xs">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-2 py-1 border rounded-lg ${selectedFilter === filter ? 'border-[#B6E63A] bg-[#B6E63A]/10' : 'border-[#B6E63A]'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map((c) => (
          <Link key={c.id} to={`/courses/${c.id}`} className="border border-[#B6E63A] rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-transform">
            <img src={c.cover} alt={c.title} className="h-40 w-full object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{c.title}</h3>
                {c.status && (
                  <span className="text-xs px-2 py-1 border border-[#B6E63A] rounded-lg">{c.status}</span>
                )}
              </div>
              <p className="text-sm text-white/80 line-clamp-3">{c.description}</p>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>{c.modules} Modules</span>
                <span>{c.token}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoursesList;


