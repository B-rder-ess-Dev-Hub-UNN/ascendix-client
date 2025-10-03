import leader from "../db/leader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const LeaderCard = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
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
      {leader.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-col space-x-4 p-4 border border-[#B6E63A] rounded-2xl space-y-4 text-white">
            <div className="flex items-center  space-x-2">
              <p className="rounded-full bg-[#BDBDA1] px-2.5 py-0.5 text-black">{item.id}</p>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full h-15 w-15 object-cover"
              />
              <span>{item.name}</span>
            </div>

            <div className="flex justify-between items-center space-x-2">
              <div className="flex flex-row items-center space-x-2 justify-between">
                <img src="/src/assets/images/ellipse.png" alt="" className="h-5" />
                <p>{item.token}k ASC Token</p>
              </div>
              <p className="bg-[#D9D9D930] px-3 py-1 rounded-2xl">
                ${item.amount}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LeaderCard;
