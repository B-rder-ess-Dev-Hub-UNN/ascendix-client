import { useState } from "react";

const Token = () => {
  // Initial task data (replace later with backend)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 2,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 3,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 4,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 5,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 6,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 7,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 8,
      uid: "UID: 290937846688",
      courseName: "AI Model Repair",
      uploadDate: "02/10/2025",
      startDate: "06/10/2025",
      completionDate: "21/10/2025",
      expires: "29/10/2025",
      completed: "80%",
      status: "waitlist",
    },
    {
      id: 9,
      uid: "UID: 290937846688",
      courseName: "Frontend Optimization",
      uploadDate: "03/10/2025",
      startDate: "05/10/2025",
      completionDate: "22/10/2025",
      expires: "30/10/2025",
      completed: "60%",
      status: "accepted",
    },
    {
      id: 10,
      uid: "UID: 290937846688",
      courseName: "Frontend Optimization",
      uploadDate: "03/10/2025",
      startDate: "05/10/2025",
      completionDate: "22/10/2025",
      expires: "30/10/2025",
      completed: "60%",
      status: "accepted",
    },
    {
      id: 11,
      uid: "UID: 290937846688",
      courseName: "Backend Integration",
      uploadDate: "04/10/2025",
      startDate: "06/10/2025",
      completionDate: "28/10/2025",
      expires: "31/10/2025",
      completed: "30%",
      status: "rejected",
    },
    {
      id: 12,
      uid: "UID: 290937846688",
      courseName: "Backend Integration",
      uploadDate: "04/10/2025",
      startDate: "06/10/2025",
      completionDate: "28/10/2025",
      expires: "31/10/2025",
      completed: "30%",
      status: "rejected",
    },
    {
      id: 13,
      uid: "UID: 290937846688",
      courseName: "Backend Integration",
      uploadDate: "04/10/2025",
      startDate: "06/10/2025",
      completionDate: "28/10/2025",
      expires: "31/10/2025",
      completed: "30%",
      status: "rejected",
    },
    {
      id: 14,
      uid: "UID: 290937846688",
      courseName: "Backend Integration",
      uploadDate: "04/10/2025",
      startDate: "06/10/2025",
      completionDate: "28/10/2025",
      expires: "31/10/2025",
      completed: "30%",
      status: "rejected",
    },
    {
      id: 15,
      uid: "UID: 290937846688",
      courseName: "Frontend Optimization",
      uploadDate: "03/10/2025",
      startDate: "05/10/2025",
      completionDate: "22/10/2025",
      expires: "30/10/2025",
      completed: "60%",
      status: "accepted",
    },
    {
      id: 16,
      uid: "UID: 290937846688",
      courseName: "Frontend Optimization",
      uploadDate: "03/10/2025",
      startDate: "05/10/2025",
      completionDate: "22/10/2025",
      expires: "30/10/2025",
      completed: "60%",
      status: "accepted",
    },
  ]);

  const [activeTab, setActiveTab] = useState("accepted");
  // Filtered tasks for the selected tab
  const filteredTasks = tasks.filter((task) => task.status === activeTab);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <section className="flex-1 space-y-10 border border-[#B6E63A80] rounded-lg m-5 p-3 min-h-screen">
      <section className=" space-y-5">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 bg-[#271D61] rounded-t-lg px-4 py-2 text-sm">
          {["accepted", "waitlist", "in progress", "rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab === "in progress" ? "waitlist" : tab)
              }
              className={`px-4 py-2 rounded-md font-medium transition cursor-pointer ${
                (tab === "in progress" ? "waitlist" : tab) === activeTab
                  ? " text-[#B6E63A]"
                  : " hover:bg-[#B6E63A]"
              }`}
            >
              {tab === "in progress"
                ? `In Progress (${
                    tasks.filter((t) => t.status === "waitlist").length
                  })`
                : `${tab.charAt(0).toUpperCase() + tab.slice(1)} (${
                    tasks.filter((t) => t.status === tab).length
                  })`}
            </button>
          ))}
        </div>

        {/* Task Grid */}
        <div className="grid grid-cols-4 gap-4 px-10">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="border border-[#B6E63A]/50 rounded-lg w-full"
              >
                <div className="flex justify-between items-center p-2">
                  <p className="text-sm font-medium">{task.uid}</p>
                  <div
                    className={`w-[43px] h-[25px] rounded-tr-md ${
                      task.status === "accepted"
                        ? "bg-[#67F88B]"
                        : task.status === "waitlist"
                        ? "bg-yellow-400"
                        : "bg-[#8E2D28]"
                    }`}
                  ></div>
                </div>
                <hr className="text-[#B6E63A]/50" />
                <div className="p-2">
                  <div className="text-sm grid grid-cols-2 gap-y-3">
                    <div className="text-start">
                      <p>Course Name</p>
                      <span>{task.courseName}</span>
                    </div>
                    <div className="text-end">
                      <p>Upload Date</p>
                      <span> {task.uploadDate}</span>
                    </div>
                    <div className="text-start">
                      <p>Start Date</p>
                      <span>{task.startDate}</span>
                    </div>
                    <div className="text-end">
                      <p>Completion Date</p>
                      <span> {task.completionDate}</span>
                    </div>
                    <div className="text-start">
                      <p>Status</p>
                      <span> {task.status}</span>
                    </div>
                    <div className="text-end">
                      <p>Expires</p>
                      <span> {task.expires}</span>
                    </div>
                  </div>

                  <div className="flex justify-between space-x-1 pt-3">
                    <button
                      onClick={() => handleStatusChange(task.id, "rejected")}
                      className="bg-[#FF450080] border border-[#B6E63A80] w-full text-sm px-4 py-1 rounded"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleStatusChange(task.id, "accepted")}
                      className="bg-[#8653EF1A] border border-[#B6E63A80] w-full text-sm px-4 py-1 rounded"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No tasks available in this category.
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default Token






