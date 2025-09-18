import CourseImage from "../assets/images/CourseImage.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDeveloperBoard } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseOutline = () => {
  const modules = [
    { name: "Module 1", status: "Completed", percent: "10%", grade: "100%" },
    { name: "Module 2", status: "Completed", percent: "20%", grade: "80%" },
    { name: "Module 3", status: "Retry", percent: "10%", grade: "40%" },
    { name: "Module 4", status: "----", percent: "20%", grade: "------" },
    {
      name: "Final assessment",
      status: "----",
      percent: "40%",
      grade: "------",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#1D1751] text-white p-5 md:p-20">
      {/* Sidebar */}
      <div className="w-1/4 space-y-4 text-white">
        <FaArrowLeftLong className="text-xl" />
        <img src={CourseImage} alt="Course Thumbnail" className="rounded-lg" />
        <h2 className="text-lg font-bold">Abstract Space</h2>
        <p className="text-sm">
          Abstract space is a fascinating concept that transcends physical
          reality, diving into the realms of mathematics, philosophy, and art.
          It refers to spaces that exist in theory or imagination rather than in
          the tangible world.
        </p>
        <div className="space-y-2">
          <button className="w-full bg-[#B6E63A] py-2 font-medium">
            Module
          </button>
          <button className="w-full bg-gray-600 py-2 font-medium">Grade</button>
          <button className="w-full bg-[#B6E63A] py-2 font-medium">
            Certification
          </button>
          <button className="w-full bg-[#B6E63A] py-2 font-medium">
            Course info
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-6 p-6">
        {/* Info banner */}
        <div className="flex space-x-2 border items-center border-[#B6E63A] p-3 mb-6 text-sm">
          <MdDeveloperBoard className="text-4xl" />
          <p>
            Like this course? Become an expert by taking the second part it
            explains further on how abstract space works and the implications.
            See course{" "}
            <span className="underline cursor-pointer text-[#B6E63A]">
              v Abstract Space 2
            </span>
          </p>
        </div>

        {/* Modules Table */}
        <div className="border border-[#B6E63A]">
          <div className="grid grid-cols-4 text-white border-[#B6E63A] p-3 font-bold">
            <span>Modules</span>
            <span>Status</span>
            <span>Percent</span>
            <span>Grades</span>
          </div>
          {modules.map((m, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 p-3 border-t border-gray-700 space-y-5 items-center ${
                m.status === "Retry" ? "bg-[#FF000040]" : ""
              }`}
            >
              <span>
                <p className="font-medium">{m.name}</p>{" "}
                <p className="text-sm">Graded assesment</p>
              </span>
              <span>{m.status}</span>
              <span>{m.percent}</span>
              <span>{m.grade}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-between text-sm">
          <Link to="#" className="underline">
            Do this assignment
          </Link>
          <Link to="#" className="text-[#B6E63A] underline">
            Submit your assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
