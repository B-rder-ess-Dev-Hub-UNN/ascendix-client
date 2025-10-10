import { useState } from "react";
import ellipse from "../assets/images/ellipse.png";
import asc2 from "../assets/images/asc2.jpg";


const surveys = {
  ai: {
    title: "Survey on AI",
    image: asc2,
    token: "0.5",
    description:
      "Answer this quick survey and questions on the abstract course you study.",
    questions: [
      "Would you recommend the course to someone else*",
      "Outline 5 keypoints you got from the course*",
      "From your point of view is the course a profession one *",
      "Can it get you a job and why*",
    ],
  },
  blockchain: {
    title: "Survey on Blockchain",
    image: asc2,
    token: "1",
    description:
      "Share your thoughts on blockchain technology and its future in global industries.",
    questions: [
      "What industries will benefit most from blockchain adoption*",
      "How secure do you think blockchain is compared to traditional systems*",
      "Do you believe blockchain can replace banks*",
    ],
  },
};

const Survey = ({ selectedSurvey = "ai" }) => {
  const survey = surveys[selectedSurvey];

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1D1751] text-white p-6">
      <div className="w-full max-w-5xl flex-1 space-y-10 bg-gradient-to-r from-[#FFFFFF33] to-[#99999933] border-2 border-[#99999933] rounded-4xl p-6 shadow-lg">
        {/* Progress bar */}
        {/* <div className="w-40 h-2 bg-gray-600 rounded-full overflow-hidden">
          <div className="h-full bg-lime-400 w-3/4"></div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* survey info */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={survey.image}
              alt="Survey"
              className="w-40 h-28 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{survey.title}</h2>
                <div className="flex flex-row items-center space-x-1">
                  <img src={ellipse} alt="" className="h-4" />
                  <span className="font-semibold">
                    {survey.token} ASC Token
                  </span>
                </div>
              </div>
              <p className="mt-2">{survey.description}</p>
            </div>
          </div>

          {/* Instructions + Progress + Submit */}
          <div className="flex">
            <div>
              <h3 className="font-bold">Instructions</h3>
              <p className="text-sm">
                Do not use AI generated answer we need your sincere view, answer
                all questions you can go back to the course to refresh your
                memory, you can decide to pause and resume whenever you like but
                note that there’s a deadline for each quest.
              </p>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="mt-8 space-y-6">
          {survey.questions.map((q, idx) => (
            <div key={idx}>
              <label className="block mb-2 text-sm font-medium">{q}</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#99999933] focus:outline-none focus:ring-2 focus:ring-[#B6E63A]"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#B6E63A]  font-semibold py-2 px-6 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
