import React, { useState } from "react";
import style from "../../Filter.module.css";
import axios from "axios";

const url = process.env.MICROSERVICIOS;

export default function PriceFilter({ selectedPrice, handlePrice }) {
  const [priceRange, setPriceRange] = useState({});

  const handlePriceRange = (e) => {
    const { name, value } = e.target;
    const formattedValue = value.replace(/[^0-9]/g, "");
    const formattedPrice = formatPrice(formattedValue);
    setPriceRange({ ...priceRange, [name]: formattedPrice });
  };

  const formatPrice = (value) => {
    const parts = value.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const decimalPart = parts[1] ? "." + parts[1] : "";
    return "$" + integerPart + decimalPart;
  };

  return (
    <section
      className={`flex flex-col items-center mb-7 ${style.scrollableSection}`}
    >
      <p className={`text-m font-bold ${style.textPrice}`}>Rango de Precios</p>
      <div className={`flex flex-row ${style.priceRange}`}>
        <span className={`${style.priceLabel}`}>
          Precio Estimado:
          <input
            type="text"
            name="max"
            placeholder="$0"
            value={priceRange.max}
            onChange={handlePriceRange}
            pattern="^\$?\d{1,3}(,\d{3})*(\.\d+)?$"
            title="Ingrese un número válido en formato de dólar (por ejemplo, $1,000.00)"
            className={` ${style.priceInput}`}
          />
        </span>
      </div>
      <button onClick={() => handlePrice()}>Aplicar Filtro</button>
    </section>
  );
}
