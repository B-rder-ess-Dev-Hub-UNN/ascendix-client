import { NavLink } from "react-router-dom";

const LibraryHeader = () => {
  const baseClass =
    "border border-[#B6E63A80] rounded-md py-3 px-6 transition-colors duration-200";
  const inactiveClass =
    "bg-[#271D61] text-white hover:bg-[#B6E63A] hover:text-black";
  const activeClass = "bg-[#B6E63A] text-black";

  return (
    <div className="flex space-x-5">
      <NavLink
        to="/admin/library"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        Library Overview
      </NavLink>

      <NavLink
        to="/admin/courses"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        Courses
      </NavLink>

      <NavLink
        to="/admin/modules"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        Modules
      </NavLink>

      <NavLink
        to="/admin/grading"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        Grading & Assessment
      </NavLink>
    </div>
  );
};

export default LibraryHeader;
