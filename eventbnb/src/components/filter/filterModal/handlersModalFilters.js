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
