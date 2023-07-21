import React, { useState } from "react";
import style from "../Filter.module.css";

export default function AccessibilityFilter() {
  return (
    <section className="flex flex-col items-center">
      <h2 className={`text-m font-bold ${style.textAccesibility}`}>
        Accesibilidad
      </h2>
    </section>
  );
}
