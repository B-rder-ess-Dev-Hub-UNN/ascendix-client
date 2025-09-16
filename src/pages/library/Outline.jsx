import { useParams, Link } from "react-router-dom";
import libraryItems from "../../db/librarylist";

const CourseOutline = () => {
  const { id } = useParams();
  const item = libraryItems.find((i) => i.id === id);

  if (!item) {
    return (
      <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20">
        <p className="text-white/80">Item not found.</p>
        <Link to="/library" className="text-[#B6E63A] underline">Back to Library</Link>
      </section>
    );
  }

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      <Link to="/library" className="text-[#B6E63A] underline">Back to Library</Link>
      <div className="border border-[#B6E63A] rounded-2xl overflow-hidden">
        <img src={item.cover} alt={item.title} className="h-60 w-full object-cover" />
        <div className="p-5 space-y-3">
          <h1 className="text-2xl md:text-4xl font-extrabold">{item.title}</h1>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <span>{item.badge}</span>
            <span>•</span>
            <span>{item.token}</span>
          </div>
          <p className="text-white/80 md:text-lg">{item.description}</p>
          <div className="mt-4">
            <p className="text-white/70 text-sm">Modules</p>
            <ul className="list-disc pl-6 text-white/80 text-sm space-y-1">
              {Array.from({ length: item.modules }, (_, i) => (
                <li key={i}>Module {i + 1}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <Link to={`/courses/${item.id}/nav`} className="inline-block px-4 py-2 rounded-lg bg-[#7C6BF2] hover:opacity-90 text-sm">Take Course</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;


