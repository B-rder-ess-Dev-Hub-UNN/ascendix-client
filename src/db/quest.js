import asc1 from "../assets/images/asc1.jpg";
import asc2 from "../assets/images/asc2.jpg";
import asc3 from "../assets/images/asc3.jpg";
import asc4 from "../assets/images/asc4.jpg";
import asc5 from "../assets/images/asc5.jpg";

const cards = [
  {
    id: "1",
    img: asc1,
    questName: "Survey on AI",
    token: "0.5",
    status: "Ongoing",
    category: "Survey",
    type: "survey",
    instructions: "Answer this quick survey on the benefit of AI and how it will impact the growth of our ecosystem. Do not use AI generated answer we need your sincere view, answer all questions.",
    questions: [
      "How would you say AI is affecting the growth of the economy?",
      "Rate the course from 1-10 and why did you give it such rating?",
      "Life with AI and life without which would you choose and why?",
      "Would you recommend the course to someone else?"
    ]
  },
  {
    id: "2",
    img: asc2,
    questName: "Follow on X",
    token: "0.5",
    status: "New",
    category: "Social",
    type: "social",
    instructions: "Follow us on X (Twitter) to stay updated with the latest in Web3 and blockchain technology.",
    link: "https://twitter.com/ascendix"
  },
  {
    id: "3",
    img: asc3,
    questName: "Watch Youtube Video",
    token: "1.5",
    status: "Ongoing",
    category: "Video",
    type: "video",
    instructions: "Watch through the video there will be a code that will appear on the screen write down the code and continue the video. At the end of the video there will be a tag write down the tag. Both the tag and code will be needed to get your tokens.",
    videoLink: "https://youtube.com/watch?v=blockchain-basics",
    deadline: "2025-12-31"
  },
  {
    id: "4",
    img: asc4,
    questName: "Technology Arises",
    token: "0.5",
    status: "Completed",
    category: "Survey",
    type: "survey",
    instructions: "Survey on Humans and Technology.",
    questions: [
      "Is AI a curse?",
      "Outline 5 keypoints you got from the course?",
      "Is AI declining the wisdom of mankind?",
      "From your point of view is the course a profession one?"
    ]
  },
  {
    id: "5",
    img: asc5,
    questName: "Find Galaxy Fossils",
    token: "0.3",
    status: "New",
    category: "Research",
    type: "research",
    instructions: "Research and document findings on galaxy fossils.",
    deadline: "2025-11-30"
  },
];

export default cards;
