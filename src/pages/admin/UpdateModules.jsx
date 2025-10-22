/**
 * UpdateModule.jsx - Edit Specific Module Lessons
 * Route: /admin/modules/:courseId/update-module/:moduleId
 * Design: SAME as AddModule but WITHOUT sidebar
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LessonAccordion } from "../../components/admin/LessonAccordion";

const STORAGE_KEY_PREFIX = "demo_course_modules_v1";

const UpdateModule = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();

  const course = { id: Number(courseId) };
  const targetModuleId = Number(moduleId);

  // State for THIS COURSE's modules
  const [modules, setModules] = useState([]);
  const nextLessonId = useRef(1);

  // ✅ LOAD THIS COURSE'S DATA
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${course.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setModules(parsed);

        // Update lesson ID counter
        const allLessonIds = parsed.flatMap((m) => m.lessons.map((l) => l.id));
        nextLessonId.current = Math.max(...allLessonIds, 0) + 1;
      }
    } catch (error) {
      console.warn("Failed to load modules:", error);
      setModules([]);
    }
  }, [course.id]);

  // Auto-save
  useEffect(() => {
    if (modules.length > 0) {
      localStorage.setItem(
        `${STORAGE_KEY_PREFIX}_${course.id}`,
        JSON.stringify(modules)
      );
    }
  }, [modules, course.id]);

  // ✅ GET TARGET MODULE
  const targetModule = modules.find((m) => m.id === targetModuleId) || null;

  // Lesson functions (same as AddModule)
  const addLessonToModule = () => {
    if (!targetModule) return;

    const lid = nextLessonId.current++;
    const newLesson = {
      id: lid,
      title: "",
      files: [],
    };
    setModules((p) =>
      p.map((m) =>
        m.id === targetModuleId
          ? { ...m, lessons: [...m.lessons, newLesson] }
          : m
      )
    );
  };

  const updateLesson = (lessonId, patch) => {
    if (!targetModule) return;
    setModules((p) =>
      p.map((m) =>
        m.id === targetModuleId
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

  const deleteLesson = (lessonId) => {
    if (!confirm("Delete this lesson?")) return;
    if (!targetModule) return;
    setModules((p) =>
      p.map((m) =>
        m.id === targetModuleId
          ? { ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) }
          : m
      )
    );
  };

  const addFilesToLesson = (lessonId, filePayloads) => {
    if (!targetModule) return;
    setModules((p) =>
      p.map((m) =>
        m.id === targetModuleId
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

  const removeFileFromLesson = (lessonId, fileName) => {
    if (!targetModule) return;
    setModules((p) =>
      p.map((m) =>
        m.id === targetModuleId
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

  // Save & go back to modules list
  const saveModule = () => {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}_${course.id}`,
      JSON.stringify(modules)
    );
    navigate(`/admin/modules/${course.id}`);
  };

  // If module not found
  if (!targetModule) {
    return (
      <section className="flex-1 space-y-6 rounded-lg m-4 p-4 min-h-screen text-white">
        <div className="flex items-center justify-between">
          <Link to={`/admin/modules/${course.id}`} className="text-lg">
            <FaArrowLeft />
          </Link>
          <button
            onClick={() => navigate(`/admin/modules/${course.id}`)}
            className="px-3 py-2 rounded-md border border-[#B6E63A]"
          >
            Back
          </button>
        </div>
        <div className="flex items-center justify-center h-full text-[#FFFFFF99]">
          Module not found
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 space-y-6 rounded-lg m-4 p-4 min-h-screen text-white">
      {/* === PAGE HEADER - SAME AS ADD MODULE === */}
      <div className="flex items-center justify-between">
        <Link to={`/admin/modules/${course.id}`} className="text-lg">
          <FaArrowLeft />
        </Link>

        <button
          onClick={saveModule}
          className="px-3 py-2 rounded-md border border-[#B6E63A]"
        >
          save modules
        </button>
      </div>

      {/* === FULL WIDTH LESSONS PANEL - NO SIDEBAR === */}
      <main className="flex-1 rounded-xl border border-[#B6E63A80]">
        {/* MODULE HEADER */}
        <div className="flex items-center justify-between p-4 mb-4 border-b border-[#B6E63A80]">
          <span className="text-lg font-medium">{targetModule.title}</span>

          <button
            onClick={saveModule}
            className="px-4 py-2 rounded-md border border-[#B6E63A] cursor-pointer"
          >
            Save lesson
          </button>
        </div>

        {/* LESSONS CONTENT */}
        <div className="p-4 space-y-4">
          <div className="space-y-3">
            {targetModule.lessons.length === 0 ? (
              <div className="p-4 rounded bg-[#271D61] text-[#FFFFFF99]">
                No lessons yet. Add one above.
              </div>
            ) : (
              targetModule.lessons.map((lesson) => (
                <LessonAccordion
                  key={lesson.id}
                  moduleId={targetModule.id}
                  lesson={lesson}
                  onUpdate={(patch) => updateLesson(lesson.id, patch)}
                  onDelete={() => deleteLesson(lesson.id)}
                  onFilesComplete={(payloads) =>
                    addFilesToLesson(lesson.id, payloads)
                  }
                  onRemoveFile={(fileName) =>
                    removeFileFromLesson(lesson.id, fileName)
                  }
                />
              ))
            )}
          </div>

          {/* ADD LESSON BUTTON */}
          <button
            onClick={addLessonToModule}
            className="text-sm px-3 py-2 rounded-md bg-[#8653EF1A] border border-[#B6E63A80]"
          >
            <FaPlus className="inline mr-2" />
            Add Lesson
          </button>
        </div>
      </main>
    </section>
  );
};

export default UpdateModule;
