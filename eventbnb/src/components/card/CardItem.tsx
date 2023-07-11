"use client";
import React, { useState } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import style from "./Cards.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Card({ card }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleButtonClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div
      className={`max-w-[300px] rounded-t-xl bg-white group transition-all duration-300 transform hover:scale-105 ${style.group}`}
    >
      <div className="flex items-center space-x-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="px-1 flex items-center justify-center"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <FaStar
              className={`text-black ${
                index < Math.floor(card.rating) ? "" : "text-white border-black"
              }`}
            />
          </span>
        ))}
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="absolute z-0 rounded-xl w-[300px] h-[285px]  hidden"
        >
          {card.imgSrc.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} className="w-[300px] h-[285px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 top-3 right-3 flex items-center justify-center"
          onClick={handleButtonClick}
        >
          <FaHeart
            className={`text-xl  ${
              isFavorite ? "text-pink-600" : "text-black opacity-50"
            }`}
          />
          <FaRegHeart className="text-2xl text-white absolute" />
        </button>
        {card.imgProfile ? (
          <Image
            className="rounded-full w-10 h-10 object-cover absolute z-10 bottom-3 left-3"
            src={card.imgProfile}
            alt="Picture of the author"
            width={40}
            height={40}
          />
        ) : null}
      </div>
      <div className="flex flex-row justify-between items-start mt-4 py-6 px-4">
        <div>
          <p className="text-base text-black font-bold">{card.name}</p>
          <p className="text-sm text-black font-bold">{`${card.city},${card.country}`}</p>
          <p className="text-sm text-slate-600">{card.location}</p>
          <p className="text-sm text-slate-600">{`${card.startDate} - ${card.endDate} de ${card.month}`}</p>
          <p className="text-sm text-black mt-2">
            {" "}
            <strong>{`S/${card.price}`}</strong> noche
          </p>
        </div>
      </div>
    </div>
  );
}
