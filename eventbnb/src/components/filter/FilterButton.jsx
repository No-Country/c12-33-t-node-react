"use client";
import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import Capacity from "./selection/CapacityFilter";
import Security from "./selection/SecurityFilter";
import Bath from "./selection/BathFilter";
import PriceFilter from "./selection/PriceFilter";
import { handlePriceRange } from "./selection/PriceFilter";

import style from "./Filter.module.css";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selected, setSelected] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSecurity = (value) => {
    setSelectedSecurity(value);
  };

  const handleBath = (value) => {
    setSelectedBath(value);
  };

  const handlePrice = async (priceRange) => {
    console.log("SI FILTRA PRECIO");
    try {
      const response = await axios.post("/api/filters", {
        precio: priceRange,
      });
      const { results } = response.data;
      console.log(results); // Puedes hacer algo con los resultados aquí
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
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
                <Bath selectedBath={selectedBath} handleBath={handleBath} />
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
    </div>
  );
}
