import React from "react";
import style from "./Filter.module.css";

export default function FilterButton() {
  return (
    <div className={`flex flex-col items-center ${style.filterButton}`}>
      <button
        style={{
          marginTop: "40px",
          marginRight: "140px",
          width: "100px",
          fontSize: "20px",
        }}
        className={`text-sm ${style.filterButton1} `}
      >
        Filtros
      </button>
    </div>
  );
}
