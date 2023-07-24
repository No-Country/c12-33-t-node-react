export const handleAccessibility = (
  isSelectedAccessibilityFiltered,
  salonesList
) => {
  // Filtrar los salones según el estado de isSelectedAccessibilityFiltered
  const filteredSalones = isSelectedAccessibilityFiltered
    ? salonesList.filter(
        (salon) =>
          salon.baño_accesibilidad ||
          salon.pasillo_accesibilidad ||
          salon.entrada_accesibilidad ||
          salon.estacionamiento_accesibilidad
      )
    : salonesList;
  // Mostrar los resultados en la consola
  console.log("Salones filtrados por accesibilidad:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};

export const handleCheckboxChangeClick = (
  selectedAccessibility,
  setFilteredCards,
  option,
  salonesList
) => {
  console.log("EN EL handleCheckboxChangeClick");

  if (option == "estacionamiento") {
    console.log("estacionamiento");
    const filteredSalones = selectedAccessibility
      ? salonesList.filter((salon) => salon.estacionamiento)
      : salonesList;
  }
  if (option == "entrada") {
    console.log("entrada");
    const filteredSalones = selectedAccessibility
      ? salonesList.filter((salon) => salon.entrada_accesibilidad)
      : salonesList;
  }
  if (option == "baño") {
    console.log("baño");
    const filteredSalones = selectedAccessibility
      ? salonesList.filter((salon) => salon.baño_accesibilidad)
      : salonesList;
  }
  if (option == "pasillos") {
    console.log("pasillos");
    const filteredSalones = selectedAccessibility
      ? salonesList.filter((salon) => salon.pasillo_accesibilidad)
      : salonesList;
  }
  // Filtrar los salones según el estado de isParkingFiltered
  const filteredSalones = selectedAccessibility
    ? salonesList.filter((salon) => salon.estacionamiento)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por estacionamiento:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};

//------------ Filtro para el precio de Rango ------------
export const handleSortByPrice = (
  sortDirection,
  setIsPriceFiltered,
  setFilteredCards,
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
  setFilteredCards(sortedCards);

  setIsPriceFiltered(true);
};
//--------------------------------------------------

//------------ Filtro Precio del Rango en el Modal ------------

export const handlePriceRange = (
  isPriceFiltered,
  setFilteredCards,
  salonesList,
  precioMin,
  PrecioMax
) => {
  // Filtrar los salones según el estado de isPriceFiltered
  const filteredSalones = isPriceFiltered
    ? salonesList.sort((a, b) => a.precio - b.precio)
    : salonesList;

  // // Mostrar los resultados en la consola
  console.log("Salones filtrados por precio:", filteredSalones);
  setFilteredCards(filteredSalones);
};
