import React from "react";
import Card from "./CardItem";
import Filters from "../filter/Filter";
import styles from "./Cards.module.css";

export default function Cards({ list }) {
  return (
    <div>
      <Filters />
      <div
        className={`inline-flex justify-evenly items-center flex-wrap gap-5 py-12 px-4 ${styles.card__container}`}
      >
        {list.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
    </div>
  );
}
