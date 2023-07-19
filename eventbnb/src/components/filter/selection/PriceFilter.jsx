import React, { useState } from "react";
import style from "../Filter.module.css";

export default function PriceFilter() {
  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <h2 className={`text-m font-bold ${style.textPrice}`}>
        Rango de Precios
      </h2>
      <div className={`flex flex-row ${style.priceRange}`}>
        <span className={` ${style.priceLabel}`}>
          Precio mínimo:
          <input
            type="text"
            className={` ${style.priceInput}`}
            placeholder="$0"
          />
        </span>

        <span className={` ${style.priceLabel}`}>
          Precio máximo:
          <input
            type="text"
            className={` ${style.priceInput}`}
            placeholder="$1000"
          />
        </span>
      </div>
    </section>
  );
}
