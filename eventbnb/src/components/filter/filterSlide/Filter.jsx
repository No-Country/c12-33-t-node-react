"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Card from "../../card/CardItem";
import FilterButton from "../filterModal/FilterModal";
import "swiper/css";
import style from "../Filter.module.css";
import pool from "../../../../public/images/icons/pileta.png";
import parking from "../../../../public/images/icons/parking.png";
import available from "../../../../public/images/icons/available.png";
import review from "../../../../public/images/icons/review.png";
import pet from "../../../../public/images/icons/pet.png";
import price from "../../../../public/images/icons/price.png";
import {
  handleParkingIconClick,
  handlePoolIconClick,
  handleAvailableIconClick,
  handlePetIconClick,
} from "./handlersSliderFilter";

SwiperCore.use([]);

export default function Filter({ list }) {
  const swiperRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isParkingFiltered, setIsParkingFiltered] = useState(false);
  const [isPoolFiltered, setIsPoolFiltered] = useState(false);
  const [isAvailableFiltered, setIsAvailableFiltered] = useState(false);
  const [isPetFiltered, setIsPetFiltered] = useState(false);
  const [isPriceFiltered, setIsPriceFiltered] = useState(false);
  const [selectedPriceIcon, setSelectedPriceIcon] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentSort, setCurrentSort] = useState("");
  const [showSortButtons, setShowSortButtons] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);

  const router = useRouter();
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

  //Estacionamiento
  const handleParkingIconClickHandler = () => {
    console.log("handleParkingIconClickHandler");
    // Cambiar el estado de filtrado de estacionamiento
    setIsParkingFiltered(!isParkingFiltered);

    // Filtrar los salones según el estado actual de isParkingFiltered
    handleParkingIconClick(isParkingFiltered, setFilteredCards, list);
  };

  //Pileta
  const handlePoolIconClickHandler = () => {
    // Cambiar el estado de filtrado de estacionamiento
    setIsPoolFiltered(!isPoolFiltered);

    // Filtrar los salones según el estado actual de isPoolFiltered
    handlePoolIconClick(isPoolFiltered, setFilteredCards, list);
  };

  //Disponibilidad
  const handleAvailableIconClickHandler = () => {
    console.log("handleAvailableIconClickHandler");
    // Cambiar el estado de filtrado de disponibilidad
    setIsAvailableFiltered(!isAvailableFiltered);

    // Filtrar los salones según el estado actual de isAvailableFiltered
    handleAvailableIconClick(isAvailableFiltered, setFilteredCards, list);
  };

  //Mascotas
  const handlePetIconClickHandler = () => {
    // Cambiar el estado de filtrado de disponibilidad
    setIsPetFiltered(!isPetFiltered);

    // Filtrar los salones según el estado actual de isPetFiltered
    handlePetIconClick(isPetFiltered, setFilteredCards, list);
  };

  //Precio
  const handleSortByPrice = (sortOrder) => {
    setSortDirection(sortOrder);
    setCurrentSort("price");
    // Filtrar las tarjetas según el orden de clasificación
    const sortedCards = [...filteredCards].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
    // Actualizar las tarjetas filtradas en el estado
    setFilteredCards(sortedCards);
  };

  // Manejador para mostrar los botones de ordenamiento al hacer clic en el icono de precio
  const handleSortButtonsToggle = () => {
    setShowSortButtons(!showSortButtons);
  };

  return (
    <div
      className={` relative w-full text-3xl pb-10 ${
        isFixed ? style.fixedFilter : ""
      } ${
        style.filterContainer
      } hover:border-gray-200 hover:border-b-2 hover:border-solid hover:z-50 `}
    >
      <span
        className="absolute top-0 left-0 cursor-pointer"
        onClick={() => {
          // Función para retroceder un slide en el Swiper
          swiperRef.current.swiper.slidePrev();
        }}
      >
        &lt;
      </span>
      <span
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => {
          // Función para avanzar un slide en el Swiper
          swiperRef.current.swiper.slideNext();
        }}
      >
        &gt;
      </span>
      <Swiper
        slidesPerView={1}
        className={`w-4/5 ${style.swiperContainer}`}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: 200,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            width: 400,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            width: 600,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 60,
            width: 800,
          },
        }}
        ref={swiperRef}
      >
        {/* {filteredCards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))} */}
        <div className={`flex  ${style.swiper}`}>
          {/* Filtro de price */}
          <SwiperSlide>
            <div className={`relative`}>
              <div
                className={`flex flex-col items-center ${
                  isPriceFiltered ? "text-dark font-semibold" : ""
                }`}
                onClick={handleSortButtonsToggle}
              >
                <Image
                  src={price}
                  alt="precio"
                  width={50}
                  height={50}
                  className={`mb-1 ${style.iconWrapper}`}
                />
              </div>

              {/* Botones de ordenamiento */}
              <div
                className={` z-999 flex items-center ${
                  showSortButtons ? "mt-2" : "mt-0"
                }`}
              >
                {showSortButtons && (
                  <div
                    className={`  flex absolute items-center justify-center mt-2 `}
                  >
                    <button
                      onClick={() => handleSortByPrice("asc")}
                      className={` px-2 py-1 rounded-lg border text-xs ${
                        currentSort === "price" && sortDirection === "asc"
                          ? "bg-black text-white"
                          : "bg-white font-medium"
                      }`}
                    >
                      Menor a Mayor
                    </button>
                    <button
                      onClick={() => handleSortByPrice("desc")}
                      className={` px-2 py-1 rounded-lg border text-xs ${
                        currentSort === "price" && sortDirection === "desc"
                          ? "bg-black text-white"
                          : "bg-white font-medium"
                      }`}
                    >
                      Mayor a Menor
                    </button>
                  </div>
                )}
              </div>
              <p className="text-sm text-center">Precio</p>
            </div>
          </SwiperSlide>
          {/* Filtro de estacionamiento */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isParkingFiltered ? "" : "text-dark font-semibold"
              }`}
              onClick={handleParkingIconClickHandler}
            >
              <Image
                src={parking}
                alt="estacionamiento"
                width={50}
                height={50}
                className={`mb-1  ${style.iconWrapper}`}
              />
              <p className="text-sm">Estacionamiento</p>
            </div>
          </SwiperSlide>
          {/* Filtro de pileta */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isPoolFiltered ? "" : "text-dark font-semibold"
              }`}
              onClick={handlePoolIconClickHandler}
            >
              <Image
                src={pool}
                alt="pileta"
                width={50}
                height={50}
                className={`mb-1  ${style.iconWrapper}`}
              />
              <p className="text-sm">Pileta</p>
            </div>
          </SwiperSlide>
          {/* Filtro por disponibilidad */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isAvailableFiltered ? "" : "text-dark font-semibold"
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
          {/* Filtro por reseñas */}
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
          {/* Filtro de mascotas */}
          <SwiperSlide>
            <div
              className={`flex flex-col items-center ${
                isPetFiltered ? "" : "text-dark font-semibold"
              }`}
              onClick={handlePetIconClickHandler}
            >
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
      </Swiper>

      <div className={`align-center ${style.filterButton}`}>
        <FilterButton list={list} />
      </div>
      {/* Rendering filtered cards */}

      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
