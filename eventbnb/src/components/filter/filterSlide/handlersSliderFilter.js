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

//------------ Filtro Seguridad -------------
export const handleSecuritySelection = (value) => {
  setSelectedSecurity(value);
};

//------------ Filtro Estacionamiento ------------
export const handleParkingIconClick = (isParkingFiltered,setFilteredCards,salonesList) => {
  // Filtrar los salones según el estado de isParkingFiltered
  const filteredSalones = isParkingFiltered
    ? salonesList.filter((salon) => salon.estacionamiento)
    : salonesList;

  // Mostrar los resultados en la consola
  console.log("Salones filtrados por estacionamiento:", filteredSalones);

  // Actualizar el estado con los salones filtrados
  setFilteredCards(filteredSalones);
};



export const handlePriceIconClick = (isPriceFiltered,setFilteredCards,salonesList, precioMin, PrecioMax) => {
  // Filtrar los salones según el estado de isPriceFiltered
  // const filteredSalones = isPriceFiltered
  //   ? salonesList.sort((a, b) => a.precio - b.precio)
  //   : salonesList;

  // // Mostrar los resultados en la consola
  console.log("Salones filtrados por precio:", filteredSalones);

  // Actualizar el estado con los salones filtrados
//  const filteredSalones = [
//   {
//     "imagenes": [],
//     "borrado": false,
//     "id": "64b738c2dc0dd5e6a81690fcerwerwe",
//     "nombre": "Salon Las Palmerasfdssdf",
//     "domicilio": "Av Derecha 321",
//     "localidad": "Santiago Del Estero",
//     "ubicacion": "String",
//     "telefono": 2515422565,
//     "precio": 600000,
//     "capacidad_max": 200,
//     "superficie": 50,
//     "aire_acondicionado": 3,
//     "parrilla": 2,
//     "pantalla": 1,
//     "personal_seguridad": 7,
//     "baño": 5,
//     "baño_accesibilidad": true,
//     "accesibilidad": true,
//     "estacionamiento": true,
//     "catering": false,
//     "mesas_sillas": true,
//     "luces": false,
//     "sonido": true,
//     "fotografia": true,
//     "decoracion": true,
//     "pileta": true,
//     "wifi": false,
//     "cocina": false,
//     "escenario": true,
//     "descripcion": "String",
//     "propietario": {
//         "_id": "64a6b0a9c2715a1a93c84eda",
//         "nombre": "Edgardo",
//         "apellido": "Lucero"
//     },
//     "reviews": [],
//     "eventos": [],
//     "__v": 0,
//     "fechaCreacion": "2023-07-23T16:27:47.456Z"
// },
// ];
// console.log("Salones filtrados por precio:", filteredSalones, precioMin);
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
//---------------- Filtros del MODAL ---------------
//PRECIO
