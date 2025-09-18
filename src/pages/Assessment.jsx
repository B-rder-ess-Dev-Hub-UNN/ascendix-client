import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import CourseImage from "../assets/images/CourseImage.png";

const questions = [
  {
    id: 1,
    question: "An abstract is a representation?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: 2,
    question: "Is Computer Science among quote of phases in abstract spaces?",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: 3,
    question: "What’s Abstract?",
    options: [
      "Your on-ramp to Cisco Packet Tracer. Get familiar with the simulation environment and download the latest version.",
      "A representation or a stroke of combined illustrations of any substances",
      "A girl going to visit another girl",
      "I no know",
    ],
    answer:
      "A representation or a stroke of combined illustrations of any substances",
  },
  {
    id: 4,
    question: "Abstract space is mainly related to?",
    options: ["Mathematics", "Cooking", "Traveling", "Sports"],
    answer: "Mathematics",
  },
  {
    id: 5,
    question: "Which of these best describes abstract thinking?",
    options: [
      "Solving equations",
      "Imagining possibilities beyond physical reality",
      "Playing football",
      "Shopping online",
    ],
    answer: "Imagining possibilities beyond physical reality",
  },
];

const Assessment = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (qId, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  return (
    <div className="min-h-screen bg-[#1D1751] text-white px-20 flex">
      {/* Left Sidebar - fixed */}
      <div className="w-1/4 flex flex-col pr-5 py-10 border-r border-gray-600">
        {/* Back button */}
        <button className="flex items-center w-full mb-6 text-left">
          <FaArrowLeft className="mr-2" /> Back
        </button>

        {/* Course Image */}
        <img
          src={CourseImage}
          alt="Abstract Space"
          className="rounded-md w-full h-48 object-cover mb-4"
        />

        {/* Course Info */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg">Abstract Space</h2>
          <p className="text-sm text-gray-300 mt-2">
            Abstract space is a fascinating concept that transcends physical
            reality, diving into the realms of mathematics, philosophy, and art.
            It refers to spaces that exist in theory or imagination rather than
            in the tangible world.
          </p>
        </div>

        {/* Sidebar Buttons */}
        <div className="space-y-2 w-full">
          <button className="w-full bg-lime-400 text-black py-2 font-semibold">
            Module
          </button>
          <button className="w-full bg-gray-600 py-2 font-semibold">
            Grade
          </button>
          <button className="w-full bg-lime-400 text-black py-2 font-semibold">
            Certification
          </button>
          <button className="w-full bg-lime-400 text-black py-2 font-semibold">
            Course info
          </button>
        </div>
      </div>

      {/* Right Content - scrollable */}
      <div className="flex-1 p-10 overflow-y-auto h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Module 3 Graded assessments</h1>
          <p className="text-sm">
            You must get a score of 80% and above to complete this section
          </p>
        </div>

        {/* Dynamic Questions */}
        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.id}>
              <p className="mb-3 text-lg font-medium">
                {q.id}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={selectedAnswers[q.id] === opt}
                      onChange={() => handleOptionChange(q.id, opt)}
                      className="accent-lime-400"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
