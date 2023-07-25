export const handleCheckboxChangeClick = (
  selectedService,
  setFilteredCardsLocal,
  option,
  salonesList
) => {
  console.log("EN EL handleCheckboxChangeClick");

  let filteredSalones;

  switch (option) {
    case "services":
      console.log("services");
      filteredSalones = selectedService
        ? salonesList.filter(
            (salon) =>
              salon.accesibilidad ||
              salon.wifi ||
              salon.calefaccion ||
              salon.aire_acondicionado ||
              salon.parrilla ||
              salon.pantalla ||
              salon.catering ||
              salon.bar ||
              salon.mesas_sillas ||
              salon.escenario ||
              salon.luces ||
              salon.sonido ||
              salon.fotografia ||
              salon.decoracion ||
              salon.baño ||
              salon.cocina ||
              salon.area_infantil ||
              salon.personal_seguridad
          )
        : salonesList;
      break;
    // Add more cases for other options if needed
    default:
      // If none of the specific options match, do not filter (return the original list)
      filteredSalones = salonesList;
  }

  // Mostrar los resultados en la consola
  console.log("Salones filtrados: ", filteredSalones);

  // Actualizar el estado con los salones filtrados
  // setFilteredCardsLocal(filteredSalones);
};

//------------ Filtro para el precio de Rango ------------
export const handleSortByPrice = (
  sortDirection,
  setIsPriceFiltered,
  setFilteredCardsLocal,
  list
) => {
  // setSelectedPriceIcon(sortDirection);

  // Filtrar los salones sesalonesListgún la dirección del ordenamiento y el ícono de precio seleccionado
  const sortedCards = [...list].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.precio - b.precio;
    } else {
      return b.precio - a.precio;
    }
  });

  // Actualizar los cards filtrados en el estado
  setFilteredCardsLocal(sortedCards);

  setIsPriceFiltered(true);
};
//--------------------------------------------------

//------------ Filtro Precio del Rango en el Modal ------------
