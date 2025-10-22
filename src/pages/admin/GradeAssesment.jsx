/**
 * Assessment.jsx - EXACT AddModule Right Side Clone
 * LEFT: Modules | RIGHT: Question Accordions
 * Route: /admin/modules/:courseId/assessment
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { QuestionAccordion } from "../../components/admin/QuestionAccordion";

const STORAGE_KEY_PREFIX = "demo_course_assessments_v1";

const GradeAssessment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = { id: Number(courseId) };


  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const [questions, setQuestions] = useState([]);

  const nextQuestionId = useRef(1);


  useEffect(() => {
    try {
      const saved = localStorage.getItem(`demo_course_modules_v1_${course.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setModules(parsed);
        if (parsed.length > 0) {
          setSelectedModuleId(parsed[0].id);
        }
      }
    } catch (error) {
      console.warn("Failed to load modules:", error);
      setModules([]);
    }
  }, [course.id]);

  useEffect(() => {
    if (selectedModuleId) {
      try {
        const saved = localStorage.getItem(
          `${STORAGE_KEY_PREFIX}_${course.id}_${selectedModuleId}`
        );
        if (saved) {
          const parsed = JSON.parse(saved);
          setQuestions(parsed);
          nextQuestionId.current = Math.max(...parsed.map((q) => q.id), 0) + 1;
        } else {
          setQuestions([]);
        }
      } catch (error) {
        console.warn("Failed to load questions:", error);
        setQuestions([]);
      }
    }
  }, [selectedModuleId, course.id]);

  useEffect(() => {
    if (selectedModuleId) {
      localStorage.setItem(
        `${STORAGE_KEY_PREFIX}_${course.id}_${selectedModuleId}`,
        JSON.stringify(questions)
      );
    }
  }, [questions, selectedModuleId, course.id]);

  const selectedModule = modules.find((m) => m.id === selectedModuleId) || null;

  const addQuestion = () => {
    if (!selectedModuleId) return;
    const id = nextQuestionId.current++;
    const newQuestion = {
      id,
      question: "",
      options: [{ text: "", isCorrect: false }],
      marks: 1,
    };
    setQuestions((p) => [...p, newQuestion]);
  };

  const updateQuestion = (questionId, patch) => {
    setQuestions((p) =>
      p.map((q) => (q.id === questionId ? { ...q, ...patch } : q))
    );
  };

  const deleteQuestion = (questionId) => {
    if (!confirm("Delete this question?")) return;
    setQuestions((p) => p.filter((q) => q.id !== questionId));
  };

  const saveAssessments = () => {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}_${course.id}`,
      JSON.stringify(questions)
    );
    navigate(`/admin/modules/${course.id}`);
  };

  return (
    <section className="flex-1 space-y-6 rounded-lg m-4 p-4 min-h-screen text-white">
      <div className="flex items-center justify-between">
        <Link to={`/admin/modules/${course.id}`} className="text-lg">
          <FaArrowLeft />
        </Link>

        <button
          onClick={saveAssessments}
          className="px-3 py-2 rounded border border-[#B6E63A80]"
        >
          save assessments
        </button>
      </div>

      <div className="flex flex-row gap-4">
        {/* LEFT - MODULES (EXACT SAME) */}
        <aside className="w-1/3">
          <div className="flex items-start justify-between p-3 mb-4 bg-[#B6E63A]">
            <p className="">Modules</p>
          </div>

          <div className="max-h-[60vh] overflow-auto space-y-2 pr-2">
            {modules.length === 0 ? (
              <div className="text-sm p-4">
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
                      <span>{questions.length}</span> <span>question(s)</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>

        {/* RIGHT - EXACT ADD MODULE DESIGN */}
        <main className="flex-1 rounded-xl border border-[#B6E63A80]">
          {!selectedModule ? (
            <div className="flex items-center justify-center h-full text-[#FFFFFF99]">
              Select a module to create questions
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between p-4 mb-4 border-b border-[#B6E63A80]">
                <span className="text-lg font-medium">
                  {selectedModule.title} Assessment
                </span>

                <button
                  onClick={() => setSelectedModuleId(null)}
                  className="px-4 py-2 rounded border border-[#B6E63A80] cursor-pointer"
                >
                  Save questions
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  {questions.length === 0 ? (
                    <div className="p-4 bg-[#271D61]">
                      No questions yet. Add one below.
                    </div>
                  ) : (
                    questions.map((question) => (
                      <QuestionAccordion
                        key={question.id}
                        moduleId={selectedModule.id}
                        question={question}
                        onUpdate={(patch) => updateQuestion(question.id, patch)}
                        onDelete={() => deleteQuestion(question.id)}
                      />
                    ))
                  )}
                </div>

                <button
                  onClick={addQuestion}
                  className="text-sm px-3 py-2 border border-[#B6E63A80] rounded"
                >
                  Add Question
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default GradeAssessment;
