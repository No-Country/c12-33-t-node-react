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


export const handleCheckboxChangeClick = (selectedAccessibility,setFilteredCards,option,salonesList) => {
  console.log("EN EL handleCheckboxChangeClick");

if(option == "estacionamiento"){
  console.log("estacionamiento");
  const filteredSalones = selectedAccessibility
  ? salonesList.filter((salon) => salon.estacionamiento)
  : salonesList;
} 
if(option == "entrada"){
  console.log("entrada");
  const filteredSalones = selectedAccessibility
  ? salonesList.filter((salon) => salon.entrada_accesibilidad)
  : salonesList;
} 
if(option == "baño"){
  console.log("baño");
  const filteredSalones = selectedAccessibility
  ? salonesList.filter((salon) => salon.baño_accesibilidad)
  : salonesList;
} 
if(option == "pasillos"){
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
