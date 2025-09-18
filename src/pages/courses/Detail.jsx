import { useParams, Link } from "react-router-dom";
import courses from "../../db/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20">
        <p className="text-white/80">Course not found.</p>
        <Link to="/courses" className="text-[#B6E63A] underline">Back to Courses</Link>
      </section>
    );
  }

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:p-20 space-y-6">
      <Link to="/courses" className="text-[#B6E63A] underline">Back to Courses</Link>
      <div className="border border-[#B6E63A] rounded-2xl overflow-hidden">
        <img src={course.cover} alt={course.title} className="h-60 w-full object-cover" />
        <div className="p-5 space-y-3">
          <h1 className="text-2xl md:text-4xl font-extrabold">{course.title}</h1>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <span>{course.modules} Modules</span>
            <span>•</span>
            <span>{course.token}</span>
            {course.status && (
              <>
                <span>•</span>
                <span>{course.status}</span>
              </>
            )}
          </div>
          <p className="text-white/80 md:text-lg">{course.description}</p>
          {Array.isArray(course.skills) && course.skills.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-white/80 flex-wrap">
              <span className="text-white/60">Skills you gain</span>
              {course.skills.map((s) => (
                <span key={s} className="px-2 py-1 border border-[#B6E63A] rounded-lg">{s}</span>
              ))}
            </div>
          )}
          <div className="mt-4">
            <p className="text-white/70 text-sm">Modules</p>
            <ul className="list-disc pl-6 text-white/80 text-sm space-y-1">
              {Array.from({ length: course.modules }, (_, i) => (
                <li key={i}>Module {i + 1}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <Link to={`/courses/${course.id}/nav`} className="inline-block px-4 py-2 rounded-lg bg-[#7C6BF2] hover:opacity-90 text-sm">Take Course</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;


