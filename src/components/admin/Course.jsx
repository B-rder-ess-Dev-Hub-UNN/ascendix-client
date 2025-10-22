import { Link } from "react-router-dom";
import asc2 from "../../assets/images/asc2.jpg";
import ellipse from "../../assets/images/ellipse.png";
import LibraryHeader from "../../components/admin/LibraryHeader";

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Abstract Spaces",
      token: "0.5",
      description:
        "Abstract space is a fascinating concept that transcends physical reality, diving into the realms of mathematics, philosophy, and art.",
      image: asc2,
    },
    {
      id: 2,
      title: "Topology Fundamentals",
      token: "0.8",
      description:
        "Master the principles of topological spaces, continuity, and connectedness.",
      image: asc2,
    },
    {
      id: 3,
      title: "Algebraic Structures",
      token: "0.6",
      description:
        "Explore groups, rings, fields, and their applications in modern mathematics.",
      image: asc2,
    },
    {
      id: 4,
      title: "Real Analysis",
      token: "0.7",
      description:
        "Rigorous foundations of calculus, limits, sequences, and series.",
      image: asc2,
    },
  ];

  return (
    <div className="flex-1 space-y-10 rounded-lg m-5 p-5 min-h-screen">
      <LibraryHeader />

      <div className="min-h-screen p-6 space-y-8 border border-[#B6E63A80] rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Topology</h2>
            <p className="text-sm">{courses.length} courses in this Library</p>
          </div>
          <Link
            to=""
            className="bg-[#8653EF1A] text-sm px-4 py-2 border border-[#B6E63A80] rounded-md"
          >
            Add Course
          </Link>
        </div>

        {/* ✅ FIXED LAYOUT - SAME COLORS */}
        <div className="grid gap-2 grid-cols-4">
          {courses.map((course) => (
            <Link
              to={`/admin/modules/${course.id}`}
              key={course.id}
              className="flex flex-col h-[380px] border border-[#B6E63A80] rounded-xl p-2 space-y-2 hover:shadow-lg transition cursor-pointer"
            >
              {/* Image - Fixed Height */}
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover rounded-md flex-shrink-0"
              />

              {/* Content - Flex Grow */}
              <div className="flex-1 flex flex-col justify-between space-y-2">
                {/* Title & Token Row - Fixed Height */}
                <div className="flex justify-between items-start h-12">
                  <p className="font-medium text-sm line-clamp-2 flex-1 pr-2">
                    {course.title}
                  </p>
                  <span className="flex items-center space-x-1 flex-shrink-0">
                    <img src={ellipse} alt="" className="h-4" />
                    <span className="text-sm">{course.token} ASC Token</span>
                  </span>
                </div>

                {/* Description - Fixed Height */}
                <p className="text-xs line-clamp-3 flex-1">
                  {course.description}
                </p>

                {/* Buttons - ALWAYS BOTTOM - Fixed Height */}
                <div className="flex justify-between h-8 mt-auto">
                  <button className="bg-[#FF450080] px-8 py-1 rounded-md text-sm border border-[#B6E63A80] flex-1 mr-1">
                    Delete
                  </button>
                  <button className="bg-[#271D61] px-8 py-1 rounded-md text-sm border border-[#B6E63A80] flex-1 ml-1">
                    Edit
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
