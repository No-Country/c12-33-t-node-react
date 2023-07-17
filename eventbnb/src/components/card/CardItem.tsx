"use client";
import React, { useState } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
      className={`max-w-[300px] rounded-t-xl bg-white group transition-all duration-300 transform hover:scale-105`}
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="absolute z-0 rounded-xl w-[300px] h-[285px]  hidden"
        >
          {card.imagenes.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={'https://img.freepik.com/foto-gratis/elegante-sala-estar-escandinava-muebles-sofa-menta-diseno-que-burlan-plantas-mapa-cartel-eleg_1258-152143.jpg?w=1800&t=st=1689529429~exp=1689530029~hmac=5f578ef931ad91f46988dd7b0bf5963bcb7a69fb4fa754dbb2bc9dd13cbb34c8'} className="w-[300px] h-[285px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-10 top-3 right-3 flex items-center justify-center"
          onClick={handleButtonClick}
        >
          <FaHeart
            className={`text-xl  ${isFavorite ? "text-pink-600" : "text-black opacity-50"
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
      <div className="flex flex-row justify-between items-start mt-4 pb-4 px-4">
        <div>
          {card.nombre ? (
            <p className="text-base text-black font-bold">{card.nombre}</p>
          ) : null}
          <p className="text-sm text-black font-bold">
            {card.domicilio ? card.domicilio : card.localidad ? card.localidad : null}
            {card.domicilio && card.localidad ? `, ${card.localidad}` : null}
          </p>
          {card.localidad ? (
            <p className="text-sm text-slate-600">{card.localidad}</p>
          ) : null}
          {/* <p className="text-sm text-slate-600">{`${card.startDate} - ${card.endDate} de ${card.month}`}</p> */}
          <p className="text-sm text-black mt-2">
            <strong>{`S/${card.precio}`}</strong> noche
          </p>
        </div>
        {card.rating ? (
          <div className="flex items-center justify-center space-x-1 text-black">
            <FaStar />
            <p className="text-sm">{card.rating}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}