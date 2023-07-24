import React, { useState } from "react";
import style from "../../Filter.module.css";

export default function CapacityFilter() {
  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <h2 className={`text-m font-bold ${style.textCapacity}`}>
        Rango de Capacidad
      </h2>
      <div className={`flex flex-row ${style.priceRange}`}>
        <span className={` ${style.priceLabel}`}>
          Rango mínimo:
          <input
            type="text"
            className={` ${style.priceInput}`}
            placeholder="1"
          />
        </span>

        <span className={` ${style.priceLabel}`}>
          Rango máximo:
          <input
            type="text"
            className={` ${style.priceInput}`}
            placeholder="300"
          />
        </span>
      </div>
    </section>
  );
}
