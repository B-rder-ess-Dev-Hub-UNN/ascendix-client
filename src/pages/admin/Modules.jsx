/**
 * Modules.jsx - Course Modules + Add Assessment Button
 * Route: /admin/modules/:courseId
 */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LibraryHeader from "../../components/admin/LibraryHeader";
import asc2 from "../../assets/images/asc2.jpg";
import ellipse from "../../assets/images/ellipse.png";

const STORAGE_KEY_PREFIX = "demo_course_modules_v1";

const Modules = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // ✅ DYNAMIC COURSE INFO
  const course = {
    id: Number(courseId),
    title:
      courseId == 1
        ? "Abstract Spaces"
        : courseId == 2
        ? "Topology Fundamentals"
        : courseId == 3
        ? "Algebraic Structures"
        : "Real Analysis",
    tutor: "Dr. Ada Smith",
    image: asc2,
    token:
      courseId == 1
        ? "0.5"
        : courseId == 2
        ? "0.8"
        : courseId == 3
        ? "0.6"
        : "0.7",
  };

  const [openModule, setOpenModule] = useState(null);
  const [modules, setModules] = useState([]);

  // ✅ LOAD MODULES
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${course.id}`);
      if (saved) {
        const parsedModules = JSON.parse(saved);
        setModules(parsedModules);
      } else {
        setModules([]);
      }
    } catch (error) {
      console.warn("Failed to load modules:", error);
      setModules([]);
    }
  }, [course.id]);

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  const handleUpdateModule = (moduleId) => {
    navigate(`/admin/modules/${course.id}/update-module/${moduleId}`);
  };

  const moduleCount = modules.length;

  return (
    <section className="flex-1 space-y-6 rounded-lg m-5 p-5 min-h-screen text-white">
      <LibraryHeader />

      <div className="flex justify-center items-center">
        <div className="w-full max-w-3xl border border-[#B6E63A80] rounded-xl p-6 space-y-6">
          {/* COURSE HEADER - YOUR EXACT DESIGN */}
          <div className="flex bg-[#271D61] p-3 rounded-xl justify-between items-center">
            <div className="flex space-x-4 items-center">
              <img
                src={course.image}
                alt="Course"
                className="w-36 h-20 rounded-md object-cover"
              />
              <div className="flex-1 space-y-8">
                <p className="font-medium">{course.title}</p>
                <span className="flex items-center space-x-1">
                  <img src={ellipse} alt="" className="h-4" />
                  <span className="text-sm">{course.token} ASC Token</span>
                </span>
              </div>
            </div>
            <div className="space-x-2">
              <button
                onClick={() =>
                  navigate(`/admin/modules/${course.id}/add-module`)
                }
                className="bg-[#8653EF1A] px-3 py-2 rounded-md border border-[#B6E63A80] text-sm"
              >
                Add Module
              </button>
              <button
                onClick={() =>
                  navigate(`/admin/modules/${course.id}/assessment`)
                }
                className="bg-[#8653EF1A] px-3 py-2 rounded-md border border-[#B6E63A80] text-sm"
              >
                Add Assessment
              </button>
            </div>
          </div>

          {/* MODULE COUNT - YOUR EXACT */}
          <p className="font-bold text-lg">
            {moduleCount} Module{moduleCount !== 1 ? "s" : ""} in this Course
            currently
          </p>

          {/* MODULES LIST - YOUR EXACT DESIGN */}
          <div className="space-y-2">
            {modules.length === 0 ? (
              <div className="bg-[#B6E63A] p-4 text-center">
                No modules yet.{" "}
                <button
                  onClick={() =>
                    navigate(`/admin/modules/${course.id}/add-module`)
                  }
                  className="underline font-medium"
                >
                  Create your first module
                </button>
              </div>
            ) : (
              modules.map((module) => (
                <div key={module.id} className="overflow-hidden">
                  <div
                    className="flex justify-between items-center px-6 py-3 bg-[#B6E63A] cursor-pointer"
                    onClick={() => toggleModule(module.id)}
                  >
                    <span className="font-medium text-lg">{module.title}</span>
                    <div className="space-x-2">
                      {/* <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/admin/modules/${course.id}/assessment`);
                        }}
                        className="bg-[#30226F] px-3 py-1 rounded-md text-xs border border-[#B6E63A80]"
                      >
                        Assessment
                      </button> */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateModule(module.id);
                        }}
                        className="bg-[#30226F] px-3 py-1 rounded-md text-xs border border-[#B6E63A80]"
                      >
                        Update
                      </button>
                    </div>
                  </div>

                  {openModule === module.id && (
                    <div className="px-6 py-4 space-y-2 bg-[#271D61]">
                      {module.lessons.length > 0 ? (
                        module.lessons.map((lesson) => (
                          <p
                            key={lesson.id}
                            className="text-sm font-medium rounded p-2 bg-[#271D61]"
                          >
                            {lesson.title || "Untitled Lesson"}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-[#FFFFFF99]">
                          No lessons yet.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
