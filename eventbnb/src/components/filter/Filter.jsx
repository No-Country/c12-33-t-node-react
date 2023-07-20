"use client";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useContext } from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import CardItem from "../card/CardItem";
import FilterButton from "./FilterButton";
import "swiper/css";
import style from "./Filter.module.css";
import handlers from "./handlers";
import pool from "../../../public/images/icons/pileta.png";
import parking from "../../../public/images/icons/parking.png";
import available from "../../../public/images/icons/available.png";
import review from "../../../public/images/icons/review.png";
import pet from "../../../public/images/icons/pet.png";
import {
  handleParkingIconClick,
  handlePoolIconClick,
  handleAvailableIconClick,
} from "./handlers";

import {
  FaDollarSign,
  FaParking,
  FaWater,
  FaDog,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { FilterContext } from "@/context/FilterContext";

SwiperCore.use([]);
export let filteredCards = []; // Variable exportada
export let setFilteredCards = () => {}; // Variable exportada

export default function Filter({ list }) {
  const { filteredCards, setFilteredCards } = useContext(FilterContext);
  const swiperRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedPriceIcon, setSelectedPriceIcon] = useState("asc");
  const [selectedParkingIcon, setSelectedParkingIcon] = useState(false);
  const [selectedPoolIcon, setSelectedPoolIcon] = useState(false);
  const [isParkingFiltered, setIsParkingFiltered] = useState(false);
  const [isPoolFiltered, setIsPoolFiltered] = useState(false);
  const [isAvailableFiltered, setIsAvailableFiltered] = useState(false);

  const url = process.env.MICROSERVICIOS;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`${url}/salones`);
        const salonesList = data.data;
        setList(salonesList);
        setFilteredCards(salonesList); // Establecer las cards filtradas inicialmente como todas las cards
      } catch (error) {
        console.error("Error al obtener la lista de salones:", error);
      }
    };

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
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchFilteredSalones = async (selectedParkingIcon) => {
    try {
      const response = await axios.post("/api/filters", {
        estacionamiento: selectedParkingIcon,
        pileta: selectedPoolIcon,
        disponibilidad: isAvailableFiltered,
      });
      const { results } = response.data;
      setFilteredCards(results);
    } catch (error) {
      console.error("Error al obtener los salones filtrados:", error);
    }
  };
  //Estacionamiento
  const handleParkingIconClickHandler = () => {
    // Cambiar el estado de filtrado de estacionamiento
    setIsParkingFiltered(!isParkingFiltered);

    // Filtrar los salones según el estado actual de isParkingFiltered
    handleParkingIconClick(isParkingFiltered, setFilteredCards, list);
  };

  //Pileta
  const handlePoolIconClickHandler = () => {
    // Cambiar el estado de filtrado de estacionamiento
    setIsPoolFiltered(!isPoolFiltered);

    // Filtrar los salones según el estado actual de isParkingFiltered
    handlePoolIconClick(isPoolFiltered, setIsPoolFiltered, list);
  };

  //Disponibilidad
  const handleAvailableIconClickHandler = () => {
    // Cambiar el estado de filtrado de disponibilidad
    setIsAvailableFiltered(!isAvailableFiltered);

    // Filtrar los salones según el estado actual de isAvailableFiltered
    handleAvailableIconClick(isAvailableFiltered, setIsAvailableFiltered, list);
  };

  return (
    <div
      className={`w-full text-3xl pb-10 ${isFixed ? style.fixedFilter : ""} ${
        style.filterContainer
      } hover:border-gray-200 hover:border-b-2 hover:border-solid hover:z-50 `}
    >
      <Swiper
        slidesPerView={5}
        // // navigation={{
        // //   prevEl: `.${style.btnPrev}`,
        // //   nextEl: `.${style.btnNext}`,
        // // }}
        className={`w-4/5  ${style.swiperContainer}`}
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
        <div className={`flex  ${style.swiper}`}>
          {/* <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                selectedPriceIcon === "asc" ? "text-blue-500" : ""
              }`}
              onClick={handlePriceIconClickHandler}
            >
              <FaDollarSign className="mb-1" />
              <p className="text-sm">Precio</p>
            </div>
          </SwiperSlide> */}
          {/* Filtro de estacionamiento */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isParkingFiltered ? "text-blue-500" : "text-black"
              }`}
              onClick={handleParkingIconClickHandler}
            >
              <Image
                src={parking}
                alt="estacionamiento"
                width={50}
                height={50}
                className={`mb-1 bg-white border-neutral-600 ${style.iconWrapper}`}
              />
              <p className="text-sm">Estacionamiento</p>
            </div>
          </SwiperSlide>
          {/* Filtro de pileta */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isPoolFiltered ? "text-black" : "text-black"
              }`}
              onClick={handlePoolIconClickHandler}
            >
              <Image
                src={pool}
                alt="pileta"
                width={50}
                height={50}
                className={`mb-1 bg-white border-neutral-600 ${style.iconWrapper}`}
              />
              <p className="text-sm">Pileta</p>
            </div>
          </SwiperSlide>
          {/* Filtro por disponibilidad */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isAvailableFiltered ? "text-blue-500" : "text-black"
              }`}
              onClick={handleAvailableIconClickHandler}
            >
              <Image
                src={available}
                alt="disponibilidad"
                width={50}
                height={50}
                className={`mb-1 ${style.iconWrapper}`}
              />
              <p className="text-sm">Disponibilidad</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src={review}
                alt="reseña"
                width={50}
                height={50}
                className={`mb-1 ${style.iconWrapper}`}
              />
              <p className="text-sm">Reseña</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src={pet}
                alt="mascotas"
                width={50}
                height={50}
                className={`mb-1  ${style.iconWrapper}`}
              />
              <p className="text-sm">Mascotas</p>
            </div>
          </SwiperSlide>
        </div>
        <div className={style.filterButton}>
          <FilterButton />
        </div>
      </Swiper>
    </div>
  );
}
