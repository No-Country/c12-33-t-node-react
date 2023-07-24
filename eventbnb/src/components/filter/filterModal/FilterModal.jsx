"use client";
import React, { useState, useEffect, useContext } from "react";
import CardItem from "@/components/card/CardItem";
import axios from "axios";
import { useRouter } from "next/navigation";
import Price from "../filterSlide/selection/PriceFilter";
import Services from "./selection/AccesicibiliidadFilters";
import style from "../Filter.module.css";
import { FilterContext, FilterProvider } from "@/context/FilterProvider";
import { handleAccesibility, handlePriceRange } from "./handlersModalFilters";

export let filteredCards = []; // Variable exportada
export let setFilteredCards = () => {}; // Variable exportada

export default function FilterModal({ list }) {
  const { filteredCards, setFilteredCards } = useContext(FilterContext);
  const [isPriceFiltered, setIsPriceFiltered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedAccessibility, setSelectedAccessibility] = useState(false);
  const [isSelectedAccessibility, setIsSelectedAccessibility] = useState(false);
  const [isSelectedServices, setIsSelectedServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState(false);

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

      fetchData();
    };
  }, []);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSecurity = () => {
    setSelectedSecurity(!selectedSecurity);
  };

  const handleBath = () => {
    setSelectedBath(!selectedBath);
  };

  //---------  FILTROS DE PRECIO ----------------
  const fetchFilteredSalones = async () => {
    console.log("SI FILTRA PRECIO");
    handlePriceRange(isPriceFiltered, setFilteredCards, list);
  };
  const handlePrice = (priceRange) => {
    console.log("EN EL handlePrice");
    setSelectedPrice(!selectedPrice);
    fetchFilteredSalones();
  };
  //--------- FIN FILTROS DE PRECIO ----------------

  //---------  FILTROS DE ACCESIBIIDAD ----------------
  const handleAccessibility = () => {
    setIsSelectedAccessibility(!isSelectedAccessibility);
    handleAccesibility(isSelectedAccessibility, setFilteredCards, list);
  };
  //--------- FIN FILTROS DE ACCESIBIIDAD ----------------

  //---------  FILTROS DE SERVICIOS ----------------
  const handleServices = () => {
    setIsSelectedServices(!isSelectedServices);
    handleServices(isSelectedServices, setFilteredCards, list);
  };
  //--------- FIN FILTROS DE SERVICIOS ----------------

  return (
    <FilterProvider>
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
                  {/* <Capacity /> */}
                  {/* <Security
                    selectedSecurity={selectedSecurity}
                    handleSecurity={handleSecurity}
                    list={list}
                  /> */}
                  {/* <Bath selectedBath={selectedBath} handleBath={handleBath} /> */}
                  {/* <Accessibility
                    selectedAccessibility={selectedAccessibility}
                    handleAccessibility={handleAccessibility}
                    list={list}
                  /> */}
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
                      onClick={toggleModal}
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
                    <button
                      onClick={toggleModal}
                      className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                    >
                      Mostrar <span>#</span> salones
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {filteredCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </FilterProvider>
  );
}
