/**
 * LessonAccordion.jsx
 *
 * Professional collapsible lesson component
 * Features:
 * - Editable lesson title
 * - File upload integration
 * - File management (preview/remove)
 * - Collapsible content
 * - Professional styling & animations
 *
 * Props:
 * @param {Object} lesson - Lesson data {id, title, files[]}
 * @param {Function} onUpdate - (updates: {title}) => void
 * @param {Function} onDelete - () => void
 * @param {Function} onFilesComplete - (files: File[]) => void
 * @param {Function} onRemoveFile - (fileName: string) => void
 */

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FileUpload } from "./FileUpload";

export const LessonAccordion = ({
  lesson,
  onUpdate,
  onDelete,
  onFilesComplete,
  onRemoveFile,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Handles lesson title change
   * @param {Event} e - Input change event
   */
  const handleTitleChange = (e) => {
    onUpdate({ title: e.target.value });
  };

  /**
   * Handles file upload completion
   * @param {Array} files - Uploaded file objects
   */
  const handleFilesComplete = (files) => {
    onFilesComplete(files);
  };

  /**
   * Handles file removal
   * @param {string} fileName - Name of file to remove
   */
  const handleRemoveFile = (fileName) => {
    onRemoveFile(fileName);
  };

  /**
   * Renders file preview thumbnail
   * @param {Object} file - File object {url, type, name}
   * @returns {JSX.Element} - Image or type icon
   */
  const renderFilePreview = (file) => {
    if (file.type?.startsWith("image/")) {
      return (
        <img
          src={file.url}
          className="w-12 h-8 object-cover rounded"
          alt={file.name}
        />
      );
    }

    const typeLabel = file.type?.startsWith("video/") ? "VIDEO" : "PDF";
    return (
      <div className="w-12 h-8 flex items-center justify-center bg-[#2a254f] rounded text-xs font-medium">
        {typeLabel}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      {/* === LESSON HEADER (CLICK TO TOGGLE) === */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-[#271D61] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Left: Menu Icon + Title Input */}
        <div className="flex items-center gap-3 flex-1">
          <IoMenu size={20} className="flex-shrink-0" />
          <input
            type="text"
            value={lesson.title}
            onChange={handleTitleChange}
            placeholder="Enter lesson title"
            className="flex-1 text-sm font-medium outline-none text-white w-full"
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

      {/* === LESSON CONTENT (EXPANDED) === */}
      {isOpen && (
        <div className="p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* File Upload Section */}
          <div>
            <label className="block text-sm font-medium mb-3 text-white">
              Upload Files
            </label>
            <FileUpload onComplete={handleFilesComplete} />
          </div>

          {/* Uploaded Files List */}
          {lesson.files && lesson.files.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs mb-2">Uploaded Files:</p>
              {lesson.files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between bg-[#271D61] p-3 rounded-lg border border-[#2a254f]"
                >
                  {/* File Preview + Details */}
                  <div className="flex items-center gap-3 flex-1">
                    {renderFilePreview(file)}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-400">{file.type}</div>
                    </div>
                  </div>

                  {/* File Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1 border border-[#B6E63A80] rounded bg-transparent hover:bg-[#B6E63A] transition-colors whitespace-nowrap"
                    >
                      Preview
                    </a>
                    <button
                      onClick={() => handleRemoveFile(file.name)}
                      className="text-xs px-3 py-1 border border-[#B6E63A80] rounded bg-transparent hover:bg-[#B6E63A] transition-colors whitespace-nowrap"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
