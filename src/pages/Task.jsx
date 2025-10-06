// to be replaced with actual data from backend
import ellipse from "../assets/images/ellipse.png";
import asc2 from "../assets/images/asc2.jpg";

const task = {
  title: "Watch youtube video on blockchain",
  image: asc2,
  token: "0.5",
  link: "https://youtube.com//blockchain_basis",
};

const Task = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1D1751] text-white p-3 md:p-6">
      <div className="w-full max-w-2xl bg-gradient-to-r from-[#FFFFFF33] to-[#99999933] border-2 border-[#99999933] rounded-3xl p-5 md:p-10 shadow-lg">
        {/* image + detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image */}
          <div className="">
            <img
              src={task.image}
              alt={task.title}
              className="rounded-lg object-cover h-28 w-full"
            />
          </div>

          {/* Title & Reward */}
          <div className="flex flex-col space-y-5">
            <h2 className="text-lg">{task.title}</h2>
            <div className="flex flex-row items-center space-x-1">
              <img src={ellipse} alt="" className="h-4" />
              <span className="text-sm">{task.token} ASC Token</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-10 font-medium">
          <h3 className="">Instructions</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Use the link to access the video{" "}
              <a
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B6E63A] underline"
              >
                {task.link}
              </a>
            </li>
            <li>
              Watch through the video there will be a code that will appear on
              the screen — write down the code and continue the video.
            </li>
            <li>
              At the end of the video there will be a tag write down the tag
            </li>
            <li>Both the tag and code will be needed to get your tokens</li>
            <li>Finally paste the code and tag in the boxes below</li>
          </ol>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-6">
          <div className="flex-1 space-y-3">
            <input
              type="text"
              id="tag-input"
              className="w-full px-4 py-3 border border-[#99999933] focus:outline-none focus:ring-2 focus:ring-[#B6E63A]"
            />
            <label htmlFor="tag-input" className="text-sm">
              Enter the tag above
            </label>
          </div>
          <div className="flex-1 space-y-3">
            <input
              type="text"
              id="code-input"
              className="w-full px-4 py-3 border border-[#99999933] focus:outline-none focus:ring-2 focus:ring-[#B6E63A]"
            />
            <label htmlFor="code-input" className="text-sm">
              Enter the code above
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#B6E63A] font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task;
