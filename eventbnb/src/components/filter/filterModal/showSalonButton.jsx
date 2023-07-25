"use client";
import React from "react";
import CardItem from "@/components/card/CardItem";

// Componente ShowSalonButton para el botón "Mostrar salones"
const ShowSalonButton = ({
  showSalon,
  handleShowSalon,
  filteredCardsLocal,
  list,
}) => {
  return (
    <div>
      {/* Mostrar salones filtrados o la lista completa según el estado de showSalon */}
      {showSalon
        ? filteredCardsLocal?.map((card) => (
            <CardItem key={card.id} card={card} />
          ))
        : list?.map((card) => <CardItem key={card.id} card={card} />)}
    </div>
  );
};

export default ShowSalonButton;
