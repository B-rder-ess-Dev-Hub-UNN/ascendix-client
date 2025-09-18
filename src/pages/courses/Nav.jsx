import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import courses from "../../db/courses";

const CourseNav = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [currentModule, setCurrentModule] = useState(1);

  if (!course) {
    return (
      <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20">
        <p className="text-white/80">Course not found.</p>
        <Link to="/courses" className="text-[#B6E63A] underline">Back to Courses</Link>
      </section>
    );
  }

  const progress = course.status === 'Completed' ? 100 : 60; // Example progress

  const moduleContent = [
    "Introduction to the course topic.",
    "Detailed explanation of core concepts.",
    "Practical examples and applications.",
    "Advanced topics and case studies.",
    "Review and summary of key points.",
    "Final assessment and conclusion."
  ];

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      {/* Mobile Module Selector */}
      <div className="md:hidden">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Module</label>
          <select
            value={currentModule}
            onChange={(e) => setCurrentModule(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white outline-none focus:border-[#B6E63A]"
          >
            {Array.from({ length: course.modules }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Module {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3 h-fit">
          <h2 className="font-semibold text-sm">{course.title}</h2>
          <nav className="space-y-1 text-sm">
            {Array.from({ length: course.modules }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentModule(i + 1)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentModule === i + 1
                    ? 'bg-[#B6E63A] text-black'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                Module {i + 1}
              </button>
            ))}
          </nav>
        </aside>

        <main className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2">
              <div className="bg-[#B6E63A] h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <header className="flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold">{course.title} - Module {currentModule}</h1>
            <Link to={`/courses/${course.id}`} className="text-xs underline text-white/70 hover:text-white transition-colors">Course info</Link>
          </header>
          <div className="text-sm text-white/80 leading-relaxed">
            {moduleContent[currentModule - 1] || "Content for this module."}
          </div>
        </main>
      </div>
    </section>
  );
};

export default CourseNav;


