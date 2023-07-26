"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/card/CardItem";
import axios from "axios";
import { useRouter } from "next/navigation";
import Price from "./selection/PriceRange";
import Services from "./selection/ServicesFilters";
import style from "../Filter.module.css";
import {
  handleCheckboxChangeClick,
  handleSortByPrice,
} from "./handlersModalFilters";
// import { handlePriceRange } from "./selection/PriceRange";
import ShowSalonButton from "./showSalonButton";

export default function FilterModal({ list }) {
  const [filteredCardsLocal, setFilteredCardsLocal] = useState();
  const [isPriceFiltered, setIsPriceFiltered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isSelectedServices, setIsSelectedServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [shouldShowSalones, setShouldShowSalones] = useState(false);
  const [areFiltersSelected, setAreFiltersSelected] = useState(false);
  const [numSalonesEncontrados, setNumSalonesEncontrados] = useState(0);
  const [salonesList, setSalonesList] = useState([]);

  const router = useRouter();
  const url = process.env.MICROSERVICIOS;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`/api/salones`);
        const salonesList = data.data;
        setList(salonesList);
        setFilteredCardsLocal(salonesList);
      } catch (error) {
        console.error("Error al obtener la lista de salones:", error);
      }
    };
    fetchData();
  }, [selectedOptions]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSecurity = () => {
    setSelectedSecurity(!selectedSecurity);
    setAreFiltersSelected(true);
  };

  const handleBath = () => {
    setSelectedBath(!selectedBath);
    setAreFiltersSelected(true);
  };

  //---------  FILTROS DE PRECIO ----------------
  const fetchFilteredSalones = async () => {
    console.log("SI FILTRA PRECIO Y ACCESIBILIDAD");

    //   const filteredByPrice = handlePriceRange(
    //     isPriceFiltered,
    //     setFilteredCardsLocal,
    //     salonesList,
    //     precioMax
    //   );

    //   const filteredByAccesibility = handleAccesibility(
    //     isSelectedServices,
    //     filteredByPrice
    //   );
    //   setNumSalonesEncontrados(filteredByAccesibility.length);
    //   setFilteredCardsLocal(filteredByAccesibility);
    // };
    // const handlePrice = (priceRange) => {
    //   console.log("EN EL handlePrice");
    //   setSelectedPrice(!selectedPrice);
    //   setAreFiltersSelected(true);
    //   fetchFilteredSalones();
  };

  //---------  FILTROS DE SERVICIOS ----------------
  const handleServices = () => {
    setIsSelectedServices(!isSelectedServices);
    fetchFilteredSalones();
  };
  //--------- FIN FILTROS DE SERVICIOS ----------------

  //---------  LIMPIAR FILTROS ----------------
  const handleClearAll = () => {
    setSelectedPrice(false);
    setIsSelectedServices(false);
    setSelectedOptions([]);
    setAreFiltersSelected(false);
    setFilteredCardsLocal(list);
  };

  const handleShowSalones = (option) => {
    console.log("handleShowSalones");
    setShouldShowSalones(true);
    setShowModal(false);
  };

  return (
    <div className={`flex flex-col items-center ${style.filterButton}`}>
      <div>
        <button
          style={{
            marginTop: "40px",
            marginRight: "140px",
            width: "100px",
            fontSize: "20px",
          }}
          className={`text-sm ${style.filterButton1} `}
          onClick={toggleModal}
        >
          Filtros
        </button>
      </div>

      <div
        className={` absolute z-50 flex flex-col items-center right-full ${style.showModal}`}
      >
        {showModal && (
          <div className={`top-5 ${style.filterModal}`}>
            <div className={`${style.modalContent}`}>
              <div
                className={`flex flex-grow my-4 bg-white ${style.filterTitleTop}`}
              >
                <h2 className={`${style.filterTitle}`}>Filtros</h2>
              </div>
              <div
                className={style.scroll}
                style={{ maxHeight: "400px", overflow: "auto" }}
              >
                <Price
                  selectedPrice={selectedPrice}
                  handlePrice={handlePrice}
                  list={list}
                />
                <Services
                  selectedServices={selectedServices}
                  handleServices={handleServices}
                  list={list}
                />
              </div>
              <div
                className={`flex flex-grow my-4 bg-white ${style.filterBottom}`}
              >
                <div className="bg-white">
                  <button
                    onClick={handleClearAll}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Quitar todos
                  </button>
                </div>
                <div className="bg-white">
                  <button
                    onClick={toggleModal}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Cerrar
                  </button>
                </div>
                <div className="bg-white">
                  {areFiltersSelected && (
                    <ShowSalonButton
                      showSalon={shouldShowSalones}
                      handleShowSalon={handleShowSalones}
                      filteredCardsLocal={filteredCardsLocal}
                      list={list}
                    />
                  )}
                  <button
                    onClick={fetchFilteredSalones}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Mostrar <span>{numSalonesEncontrados}</span> salones
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
