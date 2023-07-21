export const handleSearch = (e) => {
  if (e?.target.value === "") {
    const searchTerm = e.target.value?.toLowerCase();
    setFilter(searchTerm);
    if (cards && Array.isArray(cards)) {
      // Filtrar las cards por el término de búsqueda en nombre, domicilio, localidad y ubicación
      const filtered = cards.filter(
        (card) =>
          card.nombre.toLowerCase().includes(searchTerm) ||
          card.domicilio.toLowerCase().includes(searchTerm) ||
          card.localidad.toLowerCase().includes(searchTerm) ||
          card.ubicacion.toLowerCase().includes(searchTerm)
      );

      // Actualizar los resultados filtrados en el estado
      setFilteredCards(filtered);
    }
  }
};

export const handleChange = (e) => {
  setSearchLounge(e.target.value);
};

export const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

export const handleClearSearch = () => {
  setSearchLounge("");
  setSearchBar([]);
};

//------------ Filtro para el precio ------------
export const handlePriceIconClick = (
  sortDirection,
  setSortDirection,
  selectedPriceIcon,
  setSelectedPriceIcon,
  filteredCards,
  setFilteredCards,
  cards // Agregar la lista completa de cards
) => {
  // Cambiar la dirección del ordenamiento
  const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
  setSortDirection(newSortDirection);

  // Actualizar el ícono de precio seleccionado
  const newSelectedPriceIcon = selectedPriceIcon === "asc" ? "desc" : "asc";
  setSelectedPriceIcon(newSelectedPriceIcon);

  // Ordenar los cards según la dirección del ordenamiento y el ícono de precio seleccionado
  const sortedCards = [...cards].sort((a, b) => {
    if (newSelectedPriceIcon === "asc") {
      return a.precio - b.precio;
    } else {
      return b.precio - a.precio;
    }
  });

  // Actualizar los cards filtrados en el estado
  setFilteredCards(sortedCards);
};
//--------------------------------------------------
//------------ Filtro Seguridad -------------
const handleSecuritySelection = (value) => {
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
    ? salonesList.filter((salon) => salon.estacionamiento)
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