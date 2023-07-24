export const handleCheckboxChangeClick = (
  selectedService,
  setFilteredCards,
  option,
  salonesList
) => {
  console.log("EN EL handleCheckboxChangeClick");

  let filteredSalones;

  switch (option) {
    case "accesibilidad":
      console.log("accesibilidad");
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
              salon.area_fumadores
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
  setFilteredCards(filteredSalones);
};

// export const handleService = (isSelectedServiceFiltered, salonesList) => {
//   // Filtrar los salones según el estado de isSelectedServiceFiltered
//   const filteredSalones = isSelectedServiceFiltered
//     ? salonesList.filter(
//         (salon) =>
//           salon.accesibilidad ||
//           salon.wifi ||
//           salon.calefaccion ||
//           salon.aire_acondicionado ||
//           salon.parrilla ||
//           salon.pantalla ||
//           salon.catering ||
//           salon.bar ||
//           salon.mesas_sillas ||
//           salon.escenario ||
//           salon.luces ||
//           salon.sonido ||
//           salon.fotografia ||
//           salon.decoracion ||
//           salon.baño ||
//           salon.cocina ||
//           salon.area_infantil ||
//           salon.area_fumadores
//       )
//     : salonesList;
//   // Mostrar los resultados en la consola
//   console.log("Salones filtrados:", filteredSalones);

//   // Actualizar el estado con los salones filtrados
//   setFilteredCards(filteredSalones);
// };

// export const handleCheckboxChangeClick = (
//   selectedService,
//   setFilteredCards,
//   option,
//   salonesList
// ) => {
// console.log("EN EL handleCheckboxChangeClick");

// if (option == "estacionamiento_accesibilidad") {
//   console.log("estacionamiento_accesibilidad");
//   const filteredSalones = selectedService
//     ? salonesList.filter((salon) => salon.estacionamiento_accesibilidad)
//     : salonesList;
// }
// console.log("option: ", option);

// if (option == "entrada_accesibilidad") {
//   console.log("entrada_accesibilidad");
//   const filteredSalones = selectedService
//     ? salonesList.filter((salon) => salon.entrada_accesibilidad)
//     : salonesList;
// }
// console.log("option: ", option);
// if (option == "baño_accesibilidad") {
//   console.log("baño_accesibilidad");
//   const filteredSalones = selectedService
//     ? salonesList.filter((salon) => salon.baño_accesibilidad)
//     : salonesList;
// }
// console.log("option: ", option);
// if (option == "pasillos_accesibilidad") {
//   console.log("pasillos_accesibilidad");
//   const filteredSalones = selectedService
//     ? salonesList.filter((salon) => salon.pasillo_accesibilidad)
//     : salonesList;
// }
// console.log("option: ", option);
// // Filtrar los salones según el estado de isParkingFiltered
// const filteredSalones = selectedService
//   ? salonesList.filter((salon) => {
//       salon.estacionamiento_accesibilidad,
//         salon.entrada_accesibilidad,
//         salon.baño_accesibilidad,
//         salon.pasillo_accesibilidad;
//     })
//   : salonesList;

// Mostrar los resultados en la consola
// console.log("Salones filtrados: ", filteredSalones);

// Actualizar el estado con los salones filtrados
// setFilteredCards(filteredSalones);
// };

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
