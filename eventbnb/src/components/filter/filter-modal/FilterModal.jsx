"use client";
import React, { useState, useEffect, useContext } from "react";
import CardItem from "@/components/card/CardItem";
import axios from "axios";
import Capacity from "../filter-slide/selection/CapacityFilter";
import Security from "../filter-slide/selection/SecurityFilter";
import Bath from "../filter-slide/selection/BathFilter";
import PriceFilter from "../filter-slide/selection/PriceFilter";
import Accessibility from "../filter-slide/selection/AccesibilityFilter";
import style from "../Filter.module.css";
import { FilterContext, FilterProvider } from "@/context/FilterProvider";
import { handleAccesibility } from "./handlersModalFilters";

// SwiperCore.use([]);
// export let filteredCards = []; // Variable exportada
// export let setFilteredCards = () => {}; // Variable exportada

export default function FilterModal({ list }) {
  const { filteredCards, setFilteredCards } = useContext(FilterContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedAccessibility, setSelectedAccessibility] = useState(false);
  const [selectedBathAccessibility, setSelectedBathAccessibility] =
    useState(false);
  const [selectedHallAccessibility, setSelectedHallAccessibility] =
    useState(false);
  const [selectedEntranceAccessibility, setSelectedEntranceAccessibility] =
    useState(false);
  const [selectedParkingAccessibility, setSelectedParkingAccessibility] =
    useState(false);
  const [isAccessibilityFiltered, setIsAccessibilityFiltered] = useState(false);
  const [isBathAccessibilityFiltered, setIsBathAccessibilityFiltered] =
    useState(false);
  const [isHallAccessibilityFiltered, setIsHallAccessibilityFiltered] =
    useState(false);
  const [isEntranceAccessibilityFiltered, setIsEntranceAccessibilityFiltered] =
    useState(false);
  const [isParkingAccessibilityFiltered, setIsParkingAccessibilityFiltered] =
    useState(false);

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

  const fetchFilteredSalones = async () => {
    console.log("SI FILTRA PRECIO");
    try {
      console.log("Before Axios request");
      const response = await axios.post("/api/filters", {
        precio: selectedPrice,
        accesibilidad: selectedAccessibility,
        baño_accesibilidad: isBathAccessibility,
        pasillo_accesibilidad: isHallAccessibility,
        entrada_accesibilidad: isEntranceAccessibility,
        estacionamiento_accesibilidad: isParkingAccessibility,
      });
      console.log("After Axios request");
      const { results } = response.data;
      setFilteredCards(results);
      console.log(results);
    } catch (error) {
      console.error("Error al obtener los salones filtrados:", error);
    }
  };

  const handlePrice = () => {
    setSelectedPrice(!selectedPrice);
    fetchFilteredSalones();
  };

  const handleAccessibility = () => {
    setIsSelectedAccessibility(!isSelectedAccessibility);
    handleAccesibility(isSelectedAccessibility, setFilteredCards, list);
  };

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
            <div className={`top-10 ${style.filterModal}`}>
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
                  <PriceFilter
                    selectedPrice={selectedPrice}
                    handlePrice={handlePrice}
                  />
                  <Capacity />
                  <Security
                    selectedSecurity={selectedSecurity}
                    handleSecurity={handleSecurity}
                  />
                  <Bath selectedBath={selectedBath} handleBath={handleBath} />
                  <Accessibility
                    selectedAccessibility={selectedAccessibility}
                    handleAccessibility={handleAccessibility}
                  />
                  <Bath selectedBath={selectedBath} handleBath={handleBath} />
                  <Bath selectedBath={selectedBath} handleBath={handleBath} />
                  {/* <Accessibility /> */}
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
