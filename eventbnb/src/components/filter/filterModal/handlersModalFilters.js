export const handleModalActionsFilter = (
  isAvailableFiltered,
  setFilteredList,
  filteredList,
  optionsSelected
) => {
  console.log("handleModalActionsFilter");
  console.log(filteredList);
  let filteredSalones;
  optionsSelected.forEach((element) => {
    switch (element) {
      case "accesibilidad":
        console.log("Case accesibilidad");
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.accesibilidad)
          : filteredList;
        setFilteredList(filteredSalones);
        break;
      case "estacionamiento":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.estacionamiento)
          : filteredList;
        setFilteredList(filteredSalones);
        break;
      case "wifi":
      case "calefaccion":
      case "aire_acondicionado":
      case "parrilla":
      case "pantalla":
      case "catering":
      case "bar":
      case "mesas_sillas":
      case "escenario":
      case "luces":
      case "sonido":
      case "fotografia":
      case "decoracion":
      case "baño":
      case "cocina":
      case "area_infantil":
      case "personal_seguridad":
        break;
    }
  });

  setFilteredList(filteredSalones);
};
