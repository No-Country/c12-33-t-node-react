import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import style from "../../Filter.module.css";
import { handleCheckboxChangeClick } from "../handlersModalFilters";

import { FilterContext, FilterProvider } from "@/context/FilterProvider";

export default function ServiceFilter({ list }) {
  // State array to store selected checkbox options
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedService, setSelectedService] = useState(false);
  const { filteredCards, setFilteredCards } = useContext(FilterContext);

  // Function to handle checkbox selection
  const handleCheckboxChange = (option) => {
    console.log("handleCheckboxChange");
    setSelectedService(!selectedService);
    handleCheckboxChangeClick(selectedService, setFilteredCards, option, list);
  };

  const filterSalonesByOption = async (option) => {
    try {
      const response = await axios.post("/api/filters", {
        accesibilidad: [option],
      });
      const { results } = response.data;
      console.log(`Salones filtrados por ${option}:`, results);
    } catch (error) {
      console.error(`Error filtering salones by ${option}:`, error);
    }
  };

  // Function to filter salones for all selected accessibility options
  const filterByService = async () => {
    try {
      for (const option of selectedOptions) {
        await filterSalonesByOption(option);
      }
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  // Call the filterByService function whenever the selected options change
  React.useEffect(() => {
    filterByService();
  }, [selectedOptions]);

  return (
    <section className="flex flex-col items-center">
      <h2 className={`text-m font-bold ${style.textAccesibility}`}>
        Accesibilidad
      </h2>
      <div className={`flex items-center mt-4 ${style.AccesibilityOptions}`}>
        {/* Checkboxes on the left */}
        <div className="flex flex-col mr-8">
          {accessibilityOptions.slice(0, 2).map((option) => (
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
          {accessibilityOptions.slice(2).map((option) => (
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
