import { useState } from "react";
import LibraryHeader from "../../components/admin/LibraryHeader";
import { Link } from "react-router-dom";
import asc2 from "../../assets/images/asc2.jpg";

const AdminLib = () => {
  // Temporary static data (you can later fetch this from your backend)
  const [quests] = useState([
    {
      id: 1,
      name: "Survey on AI",
      limit: "100",
      image: asc2,
    },
    {
      id: 2,
      name: "Abstract Survey",
      limit: "0.5",
      image: asc2,
    },
    {
      id: 3,
      name: "Youtube Quiz",
      limit: "0.5",
      image: asc2,
    },
  ]);

  return (
    <section className="flex-1 space-y-10  rounded-lg m-5 p-5 min-h-screen">
      <LibraryHeader />
      <div className="min-h-screen p-6 space-y-8 border border-[#B6E63A80] rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Library</h2>
            <p className="text-sm">Hold courses in sections</p>
          </div>
          <Link
            to=""
            className="bg-[#8653EF1A] text-sm px-4 py-2 border border-[#B6E63A80] rounded-md"
          >
            Add Library
          </Link>
        </div>

        {/* Library Cards */}
        <div className="space-y-4">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="flex items-center justify-between border border-[#FFFFFF33] rounded-lg p-2 hover:bg-[#222256] transition"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={quest.image}
                  alt={quest.name}
                  className="w-20 h-16 rounded-sm object-cover"
                />
                <div>
                  <p className="text-md font-medium">{quest.name}</p>
                  <p className="text-sm">
                    {quest.limit}{" "}courses in this Library
                  </p>
                </div>
              </div>

              <Link
                to={`/admin/`}
                className="bg-[#8653EF1A] border border-[#B6E63A80] text-sm px-4 py-2 rounded-md cursor-pointer"
              >
                Edit Library
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminLib;
