//------------ Filtro Seguridad -------------
export const handleSecuritySelection = (value) => {
  setSelectedSecurity(value);
};

//------------ Filtro Estacionamiento ------------
export const handleParkingIconClick = (
  isParkingFiltered,
  setFilteredCards,
  salonesList
) => {
  // Filtrar los salones según el estado de isParkingFiltered
  const filteredSalones = isParkingFiltered
    ? salonesList.filter((salon) => salon.estacionamiento)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por estacionamiento:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};

//------------ Filtro Pileta ------------
export const handlePoolIconClick = (
  isPoolFiltered,
  setFilteredCards,
  salonesList
) => {
  // Filtrar los salones según el estado de isPoolFiltered
  const filteredSalones = isPoolFiltered
    ? salonesList.filter((salon) => salon.pileta)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por pileta:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};
//------------ Filtro Disponibilidad ------------
export const handleAvailableIconClick = (
  isAvailableFiltered,
  setFilteredCards,
  salonesList
) => {
  // Filtrar los salones según el estado de isAvailableFiltered
  const filteredSalones = isAvailableFiltered
    ? salonesList.filter((salon) => salon.disponibilidad)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por disponibiliidad:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};

//------------ Filtro Mascotas ------------
export const handlePetIconClick = (
  isPetFiltered,
  setFilteredCards,
  salonesList
) => {
  // Filtrar los salones según el estado de isPoolFiltered
  const filteredSalones = isPetFiltered
    ? salonesList.filter((salon) => salon.mascotas)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por mascotas:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};

//--------------------------------------------------
