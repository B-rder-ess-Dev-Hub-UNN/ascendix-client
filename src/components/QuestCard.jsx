import cards from "../db/cards";
import ellipse from "../assets/images/ellipse.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Swiper modules
import { Autoplay } from "swiper/modules";

const QuestCard = () => {
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
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="border border-[#B6E63A] text-white rounded-2xl overflow-hidden w-full">
            <img
              src={card.img}
              alt={card.questName}
              className="h-40 object-cover w-full"
            />
            <div className="flex p-2 border-t border-t-[#B6E63A] justify-between items-center">
              <h3 className="text-sm font-bold">{card.questName}</h3>
              <span className="flex items-center space-x-1">
                <img src={ellipse} alt="" className="h-4" />
                <p className="text-sm">{card.token} ASC Token</p>
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default QuestCard;
