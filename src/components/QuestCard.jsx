import { Link } from "react-router-dom";
import cards from "../db/cards";
import ellipse from "../assets/images/ellipse.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Swiper modules
import { Autoplay } from "swiper/modules";

const QuestCard = ({ category, status }) => {
  const filteredCards = cards.filter(card => {
    const categoryMatch = category === "All" || card.category === category;
    const statusMatch = status === "All" || card.status === status;
    return categoryMatch && statusMatch;
  });

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="w-full"
    >
      {filteredCards.map((card) => (
        <SwiperSlide key={card.id}>
          <Link to={`/quests/${card.id}`} className="block">
            <div className="border border-[#B6E63A] text-white rounded-2xl overflow-hidden w-full hover:scale-105 transition-transform">
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.questName}
                  className="h-40 object-cover w-full"
                />
                <span className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
                  card.status === 'Ongoing' ? 'bg-blue-500' :
                  card.status === 'Completed' ? 'bg-green-500' :
                  'bg-yellow-500'
                } text-white`}>
                  {card.status}
                </span>
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-sm font-bold">{card.questName}</h3>
                <p className="text-xs text-white/70">{card.category}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-1">
                    <img src={ellipse} alt="" className="h-4" />
                    <p className="text-sm">{card.token} ASC Token</p>
                  </span>
                  {card.status === 'Ongoing' && (
                    <button className="text-xs px-2 py-1 bg-[#B6E63A] text-black rounded">Continue</button>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default QuestCard;
