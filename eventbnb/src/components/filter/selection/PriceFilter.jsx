import React, { useState } from "react";
import style from "../Filter.module.css";
import axios from "axios";

export default function PriceFilter({ selectedPrice, handlePrice }) {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  const handlePriceRange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
  };

  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <p className={`text-m font-bold ${style.textPrice}`}>Rango de Precios</p>
      <div className={`flex flex-row ${style.priceRange}`}>
        <span className={` ${style.priceLabel}`}>
          Precio mínimo:
          <input
            type="text"
            name="min"
            placeholder="$0"
            value={priceRange.min}
            onChange={handlePriceRange}
            className={` ${style.priceInput}`}
          />
        </span>

        <span className={` ${style.priceLabel}`}>
          Precio máximo:
          <input
            type="text"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRange}
            className={` ${style.priceInput}`}
            placeholder="$1000"
          />
        </span>
      </div>
      <button onClick={() => handlePrice(priceRange)}>Aplicar Filtro</button>
    </section>
  );
}