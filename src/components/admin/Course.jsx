import { useState } from "react";
import LibraryHeader from "../../components/admin/LibraryHeader";
import { Link } from "react-router-dom";
import asc2 from "../../assets/images/asc2.jpg";
import ellipse from "../../assets/images/ellipse.png";


const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Abstract Spaces",
      token: "0.5",
      description:
        "Abstract space is a fascinating concept that transcends physical reality, diving into the realms of mathematics, philosophy, and art. It refers to spaces that exist in theory or imagination rather than in the tangible world.",
      image: asc2,
      module: "",
    },
    // Duplicate for demo
    ...Array(11).fill({
      id: Math.random(),
      title: "Abstract Spaces",
      token: "0.5",
      description:
        "Abstract space is a fascinating concept that transcends physical reality, diving into the realms of mathematics, philosophy, and art. It refers to spaces that exist in theory or imagination rather than in the tangible world.",
      image: asc2,
      module: "",
    }),
  ];

  return (
    <div className="flex-1 space-y-10  rounded-lg m-5 p-5 min-h-screen">
      <LibraryHeader />
      <div className="min-h-screen p-6 space-y-8 border border-[#B6E63A80] rounded-xl">
        {/* Header Section */}

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

        {/* Courses Grid */}
        <div className="grid gap-2 grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex-1 p-2 border border-[#B6E63A80] space-y-2 rounded-xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover rounded-md"
              />

              <div className="flex justify-between">
                <p className="font-medium">{course.title}</p>
                <span className="flex items-center space-x-1">
                  <img src={ellipse} alt="" className="h-4" />
                  <span className="text-sm">{course.token} ASC Token</span>
                </span>
              </div>

              <div>
                <p className="text-xs">{course.description}</p>
              </div>

              <div className="flex justify-between">
                <button className="bg-[#271D61] px-3 py-1 rounded-md text-sm border border-[#B6E63A80]">
                  Edit Course
                </button>
                <button className="bg-[#FF450080] px-3 py-1 rounded-md text-sm border border-[#B6E63A80]">
                  Delete Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;

