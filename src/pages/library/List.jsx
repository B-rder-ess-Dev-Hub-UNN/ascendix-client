import { useParams, Link } from "react-router-dom";
import libraryItems from "../../db/librarylist";
import { FaArrowLeft } from "react-icons/fa";

const LibraryList = () => {
  const { id: category } = useParams();
  const normalized = (s) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const titleize = (slug) => slug ? slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()) : "";
  const filtered = category ? libraryItems.filter(i => normalized(i.category) === normalized(category)) : libraryItems;

  return (
    <section className="bg-[#1D1751] min-h-screen text-white p-5 md:px-20 space-y-8">
      <header className="flex items-center space-y-2">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/library" className="flex items-center gap-3 text-white/70 hover:text-white">
            <FaArrowLeft />
          </Link>
           <span><h4 className="text-xl md:text-2xl font-bold">{titleize(category)} courses</h4></span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <Link key={item.id} to={`/library/${item.id}`} className="rounded-xl border border-white/15 bg-gradient-to-r from-white/25 to-white/15 hover:from-white/15 hover:to-white/10 transition-colors">
            <div className="relative">
              <img src={item.cover} alt={item.title} className="rounded-2xl h-40 w-full object-cover" />
              {item.badge && (
                <span className="absolute left-3 top-3 text-xs bg-white/25 text-white px-4 py-1 rounded-full">{item.badge}</span>
              )}
              {(item.badge === 'Ongoing' || item.badge === 'Completed') && (
                <div className="absolute left-3 right-3 bottom-3 h-2 bg-white/70">
                  <div className="h-full bg-[#B6E63A] rounded" style={{ width: item.badge === 'Completed' ? '100%' : '60%' }} />
                </div>
              )}
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-self-end gap-2">
                <img src="/src/assets/images/ellipse.png" alt="token logo" className="w-5"/>
                <span className="text-xs text-white/70">{item.token}</span>
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-white/80 line-clamp-3">{item.description}</p>
              <div className="flex items-center text-xs text-white/70">
                {item.modules} Modules
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LibraryList;


