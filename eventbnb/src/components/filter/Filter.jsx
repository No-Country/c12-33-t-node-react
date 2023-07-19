import SearchBar from "../header/SearchBar";
import React, { useRef, useContext } from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import CardItem from "../card/CardItem";
import FilterButton from "./FilterButton";
import "swiper/css";
import style from "./Filter.module.css";
import {
  FaDollarSign,
  FaParking,
  FaWater,
  FaDog,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { FilterContext, FilterProvider } from "@/context/FilterContext";

SwiperCore.use([]);

export default function Filter() {
  const { filteredCards } = useContext(FilterContext);
  const swiperRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const headerHeight = document.getElementById("header")?.clientHeight || 0;

      if (scrollTop >= headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <SearchBar
        className="w-full"
        placeholder="Buscar..."
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div
        className={`w-full text-3xl pb-10 ${isFixed ? style.fixedFilter : ""} ${
          style.filterContainer
        } hover:border-gray-200 hover:border-b-2 hover:border-solid hover:z-50 `}
      >
        <Swiper
          slidesPerView={5}
          className={`w-4/5 ${style.swiperContainer}`}
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
              spaceBetween: 50,
              width: 400,
            },
          }}
          ref={swiperRef}
        >
          {filteredCards.map((card) => (
            <SwiperSlide key={card.id}>
              <CardItem card={card} />
            </SwiperSlide>
          ))}
          <div className={`flex ${style.swiper}`}>
            <SwiperSlide>
              <div className="color-white flex flex-col">
                <FaDollarSign className="mb-1" />
                <p className="text-xs">Precio</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <FaParking className="mb-1" />
                <p className="text-xs">Estacionamiento</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <FaWater className="mb-1" />
                <p className="text-xs">Pileta</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <FaCalendarAlt className="mb-1" />
                <p className="text-xs">Disponibilidad</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <FaStar className="mb-1" />
                <p className="text-xs">Puntuación</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <FaDog className="mb-1" />
                <p className="text-xs">Mascotas</p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className={style.filterButton}>
          <FilterButton />
        </div>
      </div>
    </div>
  );
}
