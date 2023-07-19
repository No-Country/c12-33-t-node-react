import React, { useState } from "react";
import style from "../Filter.module.css";

export default function SecurityFilter({
  selectedSecurity,
  handleSecuritySelection,
}) {
  const securityOptions = ["Cualquiera", "1", "2", "3", "4"];

  return (
    <section
      className={`flex flex-col items-center ${style.scrollableSection}`}
    >
      <h2 className={`text-m font-bold ${style.textSecurity}`}>
        Personal de Seguridad
      </h2>
      <div className={`flex items-center ${style.BathOptions}`}>
        {securityOptions.map((option) => (
          <div
            key={option}
            className={`${selectedSecurity === option ? "bg-blue-500" : ""} ${
              style.securityOption
            }`}
            onClick={() => handleSecuritySelection(option)}
          >
            <div className="border border-gray-300 rounded-md p-2">
              <p className={style.securityText}>{option}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
