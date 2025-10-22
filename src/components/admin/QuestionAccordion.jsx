import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export const QuestionAccordion = ({ question, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const updateOption = (index, patch) => {
    onUpdate({
      options: question.options.map((opt, i) =>
        i === index ? { ...opt, ...patch } : opt
      ),
    });
  };

  const setCorrectOption = (index) => {
    onUpdate({
      options: question.options.map((opt, i) =>
        i === index ? { ...opt, isCorrect: true } : { ...opt, isCorrect: false }
      ),
    });
  };

  const addOption = () => {
    onUpdate({
      options: [...question.options, { text: "", isCorrect: false }],
    });
  };

  return (
    <div className="overflow-hidden">
      {/* HEADER - YOUR EXACT DESIGN */}
      <div
        className="flex justify-between items-center p-4 bg-[#271D61] cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-3 flex-1">
          <IoMenu size={20} className="flex-shrink-0" />
          <input
            type="text"
            value={question.question}
            onChange={(e) => onUpdate({ question: e.target.value })}
            placeholder="Enter question title..."
            className="flex-1 text-sm font-medium outline-none bg-transparent text-white w-full"
          />
        </div>

        {/* Right: Expand/Collapse Icon */}
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          {isOpen ? (
            <IoMdArrowDropup size={20} />
          ) : (
            <IoMdArrowDropdown size={20} />
          )}
        </div>
      </div>

      {/* CONTENT - YOUR EXACT DESIGN + CORRECT LOGIC */}
      {isOpen && (
        <div className="p-4 flex flex-row justify-between">
          <div className="flex flex-col space-y-8">
            {/* STEP 1: CREATE OPTIONS - YOUR GRID */}
            <div className="grid grid-cols-2 gap-5">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex w-30 border border-[#99999933] p-2 space-x-2 overflow-hidden"
                >
                  <input
                    type="radio"
                    checked={option.isCorrect}
                    onChange={() => setCorrectOption(index)}
                    className="text-[#B6E63A]"
                  />
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) =>
                      updateOption(index, { text: e.target.value })
                    }
                    placeholder={`Option ${index + 1}`}
                    className="focus:outline-none bg-transparent text-white flex-1"
                  />
                </div>
              ))}
            </div>

            {/* STEP 2: SET CORRECT OPTION - SHOWS ALL OPTIONS */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Right Answer</span>
              <div className="border border-[#99999933] p-2 space-y-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={option.isCorrect}
                      onChange={() => setCorrectOption(index)}
                      className="text-[#B6E63A]"
                    />
                    <span className="text-xs text-white">
                      {option.text || `Option ${index + 1}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3: ADD MARKS */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Marks</span>
              <input
                type="number"
                value={question.marks}
                onChange={(e) => onUpdate({ marks: Number(e.target.value) })}
                className="w-30 border border-[#99999933] p-2 bg-transparent text-white"
                min="1"
              />
            </div>
          </div>

          {/* ADD OPTION BUTTON - YOUR EXACT */}
          <div>
            <button
              onClick={addOption}
              className="bg-[#8653EF1A] text-sm p-2 flex items-center rounded border border-[#B6E63A80] cursor-pointer"
            >
              Add Option
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
