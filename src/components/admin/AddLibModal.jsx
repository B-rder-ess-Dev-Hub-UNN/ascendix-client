import { useState } from "react";

const AddLibModal = ({ isOpen, onClose }) => {
  const [libraryName, setLibraryName] = useState("");
  const [courseLimit, setCourseLimit] = useState("");
  const [image, setImage] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#1B1152] border border-[#B6E63A80] rounded-lg p-6 w-[90%] max-w-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* Form */}
        <form className="space-y-5">
          <div className="flex space-x-4">
            <div className="w-2/3">
              <label className="block text-sm mb-1 font-bold">
                Library Name
              </label>
              <input
                type="text"
                value={libraryName}
                onChange={(e) => setLibraryName(e.target.value)}
                className="w-full border border-[#FFFFFF4D] rounded-md p-2 focus:outline-none"
              />
            </div>

            <div className="w-1/3">
              <label className="block text-sm mb-1 font-bold">
                Course Limit
              </label>
              <input
                type="number"
                value={courseLimit}
                onChange={(e) => setCourseLimit(e.target.value)}
                className="w-full border border-[#FFFFFF4D] rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm mb-1 text-center font-bold">
              Add an Image
            </label>
            <div
              className="border border-[#FFFFFF4D] rounded-md h-40 flex items-center justify-center cursor-pointer hover:bg-[#222256]"
              onClick={() => document.getElementById("imageInput").click()}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <span className="text-2xl text-[#FFFFFF4D]">+</span>
              )}
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#B6E63A] text-black py-2 rounded font-semibold"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLibModal;
