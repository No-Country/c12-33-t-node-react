import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import style from "../../Filter.module.css";
import { handleCheckboxChangeClick } from "../handlersModalFilters";

import { FilterContext, FilterProvider } from "@/context/FilterProvider";

export default function ServicesFilter({ list }) {
  // State array to store selected checkbox options
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedServices, setSelectedServices] = useState(false);
  const { filteredCards, setFilteredCards } = useContext(FilterContext);

  // Function to handle checkbox selection
  const handleCheckboxChange = (option) => {
    console.log("handleCheckboxChange");
    setSelectedServices(!selectedServices);
    handleCheckboxChangeClick(selectedServices, setFilteredCards, option, list);
  };

  const filterSalonesByOption = async (option) => {
    try {
      const response = await axios.post("/api/filters", {
        accesibilidad: [option],
        wifi: [option],
        calefaccion: [option],
        aire_acondicionado: [option],
        parrilla: [option],
        pantalla: [option],
        catering: [option],
        bar: [option],
        mesas_sillas: [option],
        escenario: [option],
        luces: [option],
        sonido: [option],
        fotografia: [option],
        decoracion: [option],
        baño: [option],
        cocina: [option],
        area_infantil: [option],
        area_fumadores: [option],
      });
      const { results } = response.data;
      console.log(`Salones filtrados por ${option}:`, results);
    } catch (error) {
      console.error(`Error filtering salones by ${option}:`, error);
    }
  };

  // Function to filter salones for all selected accessibility options
  const filterByServices = async () => {
    try {
      for (const option of selectedOptions) {
        await filterSalonesByOption(option);
      }
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  // Call the filterByServices function whenever the selected options change
  React.useEffect(() => {
    filterByServices();
  }, [selectedOptions]);

  // Define the array of accessibility options
  const serviceOptions = [
    "accesibilidad",
    "wifi",
    "calefaccion",
    "aire_acondicionado",
    "parrilla",
    "pantalla",
    "catering",
    "bar",
    "mesas_sillas",
    "escenario",
    "luces",
    "sonido",
    "fotografia",
    "decoracion",
    "baño",
    "cocina",
    "area_infantil",
    "area_fumadores",
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className={`text-m font-bold ${style.textService}`}>Servicios</h2>
      <div className={`flex items-center mt-4 ${style.serviceOptions}`}>
        {/* Checkboxes on the left */}
        <div className="flex flex-col mr-8">
          {serviceOptions.slice(0, 6).map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2"
              onClick={() => handleCheckboxChange(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => {}}
                className="h-6 w-6 rounded border-gray-300 "
              />
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </label>
          ))}
        </div>
        {/* Checkboxes on the center */}
        <div className="flex flex-col mr-8">
          {serviceOptions.slice(6, 12).map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2"
              onClick={() => handleCheckboxChange(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => {}}
                className="h-6 w-6 rounded border-gray-300 "
              />
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </label>
          ))}
        </div>
        {/* Checkboxes on the right */}
        <div className="flex flex-col ">
          {serviceOptions.slice(12, 18).map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 "
              onClick={() => handleCheckboxChange(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => {}}
                className="h-6 w-6 rounded border-gray-300 "
              />
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
