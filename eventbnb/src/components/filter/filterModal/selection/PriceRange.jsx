import React, { useState } from "react";
import { FilterProvider } from "../../../../context/FilterProvider";
import { useContext } from "../../../../context/FilterProvider";
import style from "../../Filter.module.css";
import axios from "axios";

const url = process.env.MICROSERVICIOS;

export default function PriceFilter({ selectedPrice, handlePrice }) {
  const [priceRange, setPriceRange] = useState({});

  const handlePriceRange = (e) => {
    setPriceRange({ ...priceRange, [e.target?.name]: e.target?.value });
  };

  return (
    <FilterProvider>
      <section
        className={`flex flex-col items-center ${style.scrollableSection}`}
      >
        <p className={`text-m font-bold ${style.textPrice}`}>
          Rango de Precios
        </p>
        <div className={`flex flex-row ${style.priceRange}`}>
          <span className={`${style.priceLabel}`}>
            Precio Estimado:
            <input
              type="text"
              name="max"
              placeholder="$0"
              value={priceRange.max}
              onChange={handlePriceRange}
              className={` ${style.priceInput}`}
            />
          </span>
        </div>
        <button onClick={() => handlePrice()}>Aplicar Filtro</button>
      </section>
    </FilterProvider>
  );
}
