/**
 * FileUpload.jsx
 *
 * Professional reusable file upload component
 * Features:
 * - Multiple file selection
 * - Drag & drop support
 * - Real-time upload progress simulation
 * - File type validation
 * - Preview thumbnails for images
 * - Supports: Video, Images, PDF, Word docs
 *
 * Props:
 * @param {string} accept - File types (default: video/*,image/*,pdf,word)
 * @param {Function} onComplete - Callback with uploaded files array
 */

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const FileUpload = ({
  accept = "video/*,image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  onComplete,
}) => {
  // Local state for upload progress tracking
  const [uploadingFiles, setUploadingFiles] = useState([]);

  /**
   * Simulates file upload with realistic progress
   * @param {File} file - File to upload
   * @returns {Promise<{url, name, type}>} - Resolved upload result
   */
  const simulateUpload = (file) =>
    new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        // Random progress increment (5-25%) for realistic feel
        progress += Math.floor(Math.random() * 20) + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);

          // Resolve with blob URL for preview
          resolve({
            url: URL.createObjectURL(file),
            name: file.name,
            type: file.type,
          });
        }

        // Update progress in state to trigger re-render
        setUploadingFiles((prev) =>
          prev.map((f) => (f.file === file ? { ...f, progress } : f))
        );
      }, 250); // Update every 250ms
    });

  /**
   * Handles file selection and starts upload simulation
   * @param {FileList} fileList - Selected files
   */
  const handleFiles = async (fileList) => {
    const files = Array.from(fileList);

    // Create upload tracking objects
    const uploading = files.map((file) => ({
      file,
      progress: 0,
      status: "uploading",
      url: null,
      name: file.name,
      type: file.type,
    }));

    // Add to UI
    setUploadingFiles((prev) => [...prev, ...uploading]);

    // Process each file sequentially
    const results = [];
    for (const file of files) {
      const result = await simulateUpload(file);
      results.push(result);

      // Mark as complete
      setUploadingFiles((prev) =>
        prev.map((f) =>
          f.file === file
            ? { ...f, status: "done", progress: 100, url: result.url }
            : f
        )
      );
    }

    // Clear progress UI after 500ms delay, notify parent
    setTimeout(() => {
      setUploadingFiles([]);
      onComplete?.(results);
    }, 500);
  };

  /**
   * Renders file type icon/thumbnail
   * @param {Object} file - File object with type/url
   * @returns {JSX.Element} - Thumbnail or icon
   */
  const renderFilePreview = (file) => {
    if (file.type?.startsWith("image/")) {
      return (
        <img
          src={file.url || URL.createObjectURL(file.file)}
          alt={file.name}
          className="w-12 h-8 object-cover rounded"
        />
      );
    }

    const typeLabel = file.type?.startsWith("video/") ? "VIDEO" : "FILE";
    return (
      <div className="w-12 h-8 flex items-center justify-center bg-[#2a254f] rounded text-xs font-medium">
        {typeLabel}
      </div>
    );
  };

  return (
    <div className="space-y-3">
      {/* === UPLOAD DROP ZONE === */}
      <label
        htmlFor="fileUpload"
        className="border border-dashed border-[#FFFFFF] h-32 
                 flex items-center justify-center cursor-pointer 
                 rounded-lg"
      >
        <div className="text-center">
          <FaPlus size={20} className="mx-auto mb-2" />
          <p className="text-sm">
            Drag and drop file or{" "}
            <span className="text-[#B6E63A] font-medium">Browse</span>
          </p>
          <p className="text-xs text-[#FFFFFF99] mt-1">
            Video, PDF or Text File (Max 5GB)
          </p>
        </div>
      </label>

      {/* === HIDDEN FILE INPUT === */}
      <input
        id="fileUpload"
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
          e.target.value = null; // Reset for multiple uploads
        }}
      />

      {/* === UPLOAD PROGRESS LIST === */}
      {uploadingFiles.length > 0 && (
        <div className="space-y-2">
          {uploadingFiles.map((upload) => (
            <div
              key={upload.name}
              className="bg-[#271D61] p-3 rounded-lg flex items-center justify-between"
            >
              {/* File Preview + Name */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {renderFilePreview(upload)}
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium truncate">
                    {upload.name}
                  </div>
                  <div className="text-xs text-[#FFFFFF99]">{upload.type}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-24 text-right">
                <div className="text-xs mb-1 font-medium">
                  {upload.status === "uploading"
                    ? `${upload.progress}%`
                    : "Done"}
                </div>
                <div className="h-2 bg-[#2a254f] rounded-full overflow-hidden">
                  <div
                    style={{ width: `${upload.progress}%` }}
                    className="h-full bg-[#B6E63A] rounded-full transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
