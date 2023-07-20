import React, { useState } from "react";
import style from "../Filter.module.css";
import axios from "axios";

export default function PriceFilter() {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  // const handlePriceRange = async () => {
  //   // setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
  //   try {
  //     const response = await axios.post("/api/filters", {
  //       price,
  //     });
  //     const { results } = response.data;
  //     console.log("Price range filter", priceRange);
  //   } catch (error) {
  //     return error;
  //   }
  // };

  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <h2 className={`text-m font-bold ${style.textPrice}`}>
        Rango de Precios
      </h2>
      <div className={`flex flex-row ${style.priceRange}`}>
        {/* <span className={` ${style.priceLabel}`}>
          Precio mínimo:
          <input
            type="text"
            placeholder="$0"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: e.target.value })
            }
            className={` ${style.priceInput}`}
          />
        </span>

        <span className={` ${style.priceLabel}`}>
          Precio máximo:
          <input
            type="text"
            className={` ${style.priceInput}`}
            placeholder="$1000"
          />
        </span> */}
      </div>
    </section>
  );
}
