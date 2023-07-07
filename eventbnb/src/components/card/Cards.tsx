import React from "react";
import Card from "./CardItem";
export default function Cards({ list }) {
  return (
    <div className="inline-flex justify-evenly items-center flex-wrap gap-5 py-12 px-4">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}
