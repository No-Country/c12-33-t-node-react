"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import style from "./Filter.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaUserFriends,
  FaExpand,
  FaDollarSign,
  FaParking,
  FaWheelchair,
  FaDog,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
SwiperCore.use([Navigation, Pagination]);

export default function Filter() {
  useEffect(() => {
    const loadSwiper = async () => {
      await import("swiper");
    };

    loadSwiper();
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div
      className={`flex justify-center items-center text-3xl text-gray-500 ${style.filterContainer}`}
    >
      <Swiper
        slidesPerView={4}
        // navigation
        className={`w-96 ${style.swiperContainer}`}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
            width: 500,
          },
        }}
      >
        {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className={`swiper-button-prev ${style.btnPrev}`} />
        </div> */}
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaUserFriends className="mb-1" />
            <p className="text-xs">Capacidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaExpand className="mb-1" /> {/* Icono de metros cuadrados */}
            <p className="text-xs">Metros2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaDollarSign className="mb-1" /> {/* Icono de precio */}
            <p className="text-xs">Precio</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaParking className="mb-1" /> {/* Icono de estacionamiento */}
            <p className="text-xs">Estacionamiento</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaWheelchair className="mb-1" /> {/* Icono de accesibilidad */}
            <p className="text-xs">Accesibilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaDog className="mb-1" /> {/* Icono de mascotas */}
            <p className="text-xs">Mascotas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="mb-1" /> {/* Icono de disponibilidad */}
            <p className="text-xs">Disponibilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaStar className="mb-1" /> {/* Icono de puntuación */}
            <p className="text-xs">Puntuación</p>
          </div>
        </SwiperSlide>
        {/* <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <div className={`swiper-button-next ${style.btnNext}`} />
        </div> */}
      </Swiper>

      <div className={`flex flex-col items-center ${style.filterButton}`}>
        <button className={`text-s ${style.filterButton1}`}>Filtros</button>
      </div>
    </div>
  );
}
