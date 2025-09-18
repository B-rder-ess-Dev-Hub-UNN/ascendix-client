import { Link } from "react-router-dom";
import courses from "../../db/courses";

const OngoingCourses = () => {
  const ongoing = courses.filter((c) => (c.status || "").toLowerCase() === "ongoing");
  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Ongoing courses</h1>
      </header>

      <div className="space-y-4">
        {ongoing.map((c) => (
          <div key={c.id} className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <img src={c.cover} alt={c.title} className="h-20 w-28 md:h-24 md:w-36 object-cover rounded-xl" />
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-xs md:text-sm text-white/80 line-clamp-2">{c.description}</p>
              <div className="text-xs text-white/60 flex items-center gap-3">
                <span>{c.modules} Modules</span>
                <span>•</span>
                <span>{c.token}</span>
              </div>
            </div>
            <Link to={`/courses/${c.id}/nav`} className="ml-auto px-4 py-2 rounded-lg bg-[#7C6BF2] hover:opacity-90 text-sm">Continue</Link>
          </div>
        ))}
        {ongoing.length === 0 && (
          <p className="text-white/70 text-sm">No ongoing courses yet.</p>
        )}
      </div>
    </section>
  );
};

export default OngoingCourses;


