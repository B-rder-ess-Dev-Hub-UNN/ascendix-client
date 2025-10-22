/**
 * AddModule.jsx - Professional Module & Lesson Creator
 * SAVES TO COURSE-SPECIFIC STORAGE
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LessonAccordion } from "../../components/admin/LessonAccordion";

const STORAGE_KEY_PREFIX = "demo_course_modules_v1";

const AddModule = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = { id: Number(courseId) };

  // ✅ LOAD THIS COURSE'S MODULES
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const nextModuleId = useRef(1);
  const nextLessonId = useRef(1);

  // ✅ LOAD COURSE-SPECIFIC DATA ON MOUNT
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${course.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setModules(parsed);

        // Update ID counters from saved data
        nextModuleId.current = Math.max(...parsed.map((m) => m.id), 0) + 1;
        const allLessonIds = parsed.flatMap((m) => m.lessons.map((l) => l.id));
        nextLessonId.current = Math.max(...allLessonIds, 0) + 1;
      }
    } catch (error) {
      console.warn("Failed to load modules:", error);
      setModules([]);
    }
  }, [course.id]);

  // Auto-save to COURSE-SPECIFIC storage
  useEffect(() => {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}_${course.id}`,
      JSON.stringify(modules)
    );
  }, [modules, course.id]);

  const selectedModule = modules.find((m) => m.id === selectedModuleId) || null;

  // ALL OTHER FUNCTIONS - UNCHANGED
  const addModule = () => {
    const id = nextModuleId.current++;
    const newModule = {
      id,
      title: `Module ${id}`,
      lessons: [],
    };
    setModules((p) => [...p, newModule]);
  };

  const addLessonToModule = (moduleId) => {
    const lid = nextLessonId.current++;
    const newLesson = {
      id: lid,
      title: "",
      files: [],
    };
    setModules((p) =>
      p.map((m) =>
        m.id === moduleId ? { ...m, lessons: [...m.lessons, newLesson] } : m
      )
    );
  };

  const updateLesson = (moduleId, lessonId, patch) => {
    setModules((p) =>
      p.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l) =>
                l.id === lessonId ? { ...l, ...patch } : l
              ),
            }
          : m
      )
    );
  };

  const deleteLesson = (moduleId, lessonId) => {
    if (!confirm("Delete this lesson?")) return;
    setModules((p) =>
      p.map((m) =>
        m.id === moduleId
          ? { ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) }
          : m
      )
    );
  };

  const addFilesToLesson = (moduleId, lessonId, filePayloads) => {
    setModules((p) =>
      p.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l) =>
                l.id === lessonId
                  ? { ...l, files: [...l.files, ...filePayloads] }
                  : l
              ),
            }
          : m
      )
    );
  };

  const removeFileFromLesson = (moduleId, lessonId, fileName) => {
    setModules((p) =>
      p.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l) =>
                l.id === lessonId
                  ? { ...l, files: l.files.filter((f) => f.name !== fileName) }
                  : l
              ),
            }
          : m
      )
    );
  };

  const saveLesson = () => {
    setSelectedModuleId(null);
  };

  const saveModules = () => {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}_${course.id}`,
      JSON.stringify(modules)
    );
    navigate(`/admin/modules/${course.id}`);
  };

  // ✅ SAME EXACT DESIGN - NO CHANGES
  return (
    <section className="flex-1 space-y-6 rounded-lg m-4 p-4 min-h-screen text-white">
      <div className="flex items-center justify-between">
        <Link to={`/admin/modules/${course.id}`} className="text-lg">
          <FaArrowLeft />
        </Link>

        <button
          onClick={saveModules}
          className="px-3 py-2 rounded-md border border-[#B6E63A]"
        >
          save modules
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <aside className="w-1/3">
          <div className="flex items-start justify-between p-3 mb-4 bg-[#B6E63A]">
            <p className="">Modules</p>
            <button onClick={addModule} className="bg-[#271D61] px-3 py-1">
              + Add Module
            </button>
          </div>

          <div className="max-h-[60vh] overflow-auto space-y-2 pr-2">
            {modules.length === 0 ? (
              <div className="text-sm text-gray-300 p-4">
                No modules yet. Add one to get started.
              </div>
            ) : (
              modules.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-center justify-between p-3 cursor-pointer ${
                    selectedModuleId === m.id
                      ? "border-[#B6E63A]"
                      : "border-transparent"
                  } bg-[#271D61]`}
                >
                  <div
                    className="flex justify-between items-center w-full"
                    onClick={() => {
                      setSelectedModuleId(
                        selectedModuleId === m.id ? null : m.id
                      );
                    }}
                  >
                    <span className="text-sm font-medium">{m.title}</span>
                    <div className="text-xs flex space-x-1">
                      <span>{m.lessons.length}</span> <span>lesson(s)</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>

        <main className="flex-1 rounded-xl border border-[#B6E63A80]">
          {!selectedModule ? (
            <div className="flex items-center justify-center h-full text-[#FFFFFF99]">
              Select a module to create lessons
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between p-4 mb-4 border-b border-[#B6E63A80]">
                <span className="text-lg font-medium">
                  {selectedModule.title}
                </span>

                <button
                  onClick={saveLesson}
                  className="px-4 py-2 rounded-md border border-[#B6E63A] cursor-pointer"
                >
                  Save lesson
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  {selectedModule.lessons.length === 0 ? (
                    <div className="p-4 rounded bg-[#271D61] text-[#FFFFFF99]">
                      No lessons yet. Add one above.
                    </div>
                  ) : (
                    selectedModule.lessons.map((lesson) => (
                      <LessonAccordion
                        key={lesson.id}
                        moduleId={selectedModule.id}
                        lesson={lesson}
                        onUpdate={(patch) =>
                          updateLesson(selectedModule.id, lesson.id, patch)
                        }
                        onDelete={() =>
                          deleteLesson(selectedModule.id, lesson.id)
                        }
                        onFilesComplete={(payloads) =>
                          addFilesToLesson(
                            selectedModule.id,
                            lesson.id,
                            payloads
                          )
                        }
                        onRemoveFile={(fileName) =>
                          removeFileFromLesson(
                            selectedModule.id,
                            lesson.id,
                            fileName
                          )
                        }
                      />
                    ))
                  )}
                </div>

                <button
                  onClick={() => addLessonToModule(selectedModule.id)}
                  className="text-sm px-3 py-2 rounded-md bg-[#8653EF1A] border border-[#B6E63A80]"
                >
                  <FaPlus className="inline mr-2" />
                  Add Lesson
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default AddModule;
