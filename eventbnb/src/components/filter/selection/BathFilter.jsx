import React, { useState } from "react";
import style from "../Filter.module.css";

export default function BathFilter({ selectedBath, handleBathSelection }) {
  const bathOptions = ["Cualquiera", "1", "2", "3", "4"];

  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <h2 className={`text-m font-bold ${style.textBath}`}>Baños</h2>
      <div className={`flex items-center ${style.BathOptions}`}>
        {bathOptions.map((option) => (
          <div
            key={option}
            className={`${
              selectedBath === option ? "bg-black text-white" : ""
            } ${style.BathOption}`}
            onClick={() => handleBathSelection(option)}
          >
            <div className="border border-gray-300 rounded-md p-2">
              <p className={style.textBath}>{option}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
