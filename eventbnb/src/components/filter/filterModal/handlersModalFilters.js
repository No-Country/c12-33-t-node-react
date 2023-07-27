export const handleModalActionsFilter = (
  isAvailableFiltered,
  setFilteredList,
  filteredList,
  optionsSelected,
  setNumSalonesEncontrados
) => {
  console.log("handleModalActionsFilter");
  console.log(filteredList);
  let filteredSalones = filteredList;
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
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.wifi)
          : filteredList;
        setFilteredList(filteredSalones);
      case "calefaccion":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.calefaccion)
          : filteredList;
        setFilteredList(filteredSalones);
      case "aire_acondicionado":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.aire_acondicionado)
          : filteredList;
        setFilteredList(filteredSalones);
      case "parrilla":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.parrilla)
          : filteredList;
        setFilteredList(filteredSalones);
      case "pantalla":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.pantalla)
          : filteredList;
        setFilteredList(filteredSalones);
      case "catering":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.catering)
          : filteredList;
        setFilteredList(filteredSalones);
      case "bar":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.bar)
          : filteredList;
        setFilteredList(filteredSalones);
      case "mesas_sillas":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.mesas_sillas)
          : filteredList;
        setFilteredList(filteredSalones);
      case "escenario":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.escenario)
          : filteredList;
        setFilteredList(filteredSalones);
      case "luces":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.luces)
          : filteredList;
        setFilteredList(filteredSalones);
      case "sonido":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.sonido)
          : filteredList;
        setFilteredList(filteredSalones);
      case "fotografia":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.fotografia)
          : filteredList;
        setFilteredList(filteredSalones);
      case "decoracion":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.decoracion)
          : filteredList;
        setFilteredList(filteredSalones);
      case "baño":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.baño)
          : filteredList;
        setFilteredList(filteredSalones);
      case "cocina":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.cocina)
          : filteredList;
        setFilteredList(filteredSalones);
      case "area_infantil":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.area_infantil)
          : filteredList;
        setFilteredList(filteredSalones);
      case "personal_seguridad":
        filteredSalones = isAvailableFiltered
          ? filteredList.filter((salon) => salon.personal_seguridad)
          : filteredList;
        setFilteredList(filteredSalones);
        break;
    }
  });

  setFilteredList(filteredSalones);
  setNumSalonesEncontrados(filteredSalones.length);
};

//RESPALDO
// export const handleModalActionsFilter = (
//   isAvailableFiltered,
//   setFilteredList,
//   filteredList,
//   optionsSelected
// ) => {
//   console.log("handleModalActionsFilter");
//   console.log(filteredList);
//   let filteredSalones;
//   optionsSelected.forEach((element) => {
//     switch (element) {
//       case "accesibilidad":
//         console.log("Case accesibilidad");
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.accesibilidad)
//           : filteredList;
//         setFilteredList(filteredSalones);
//         break;
//       case "estacionamiento":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.estacionamiento)
//           : filteredList;
//         setFilteredList(filteredSalones);
//         break;
//       case "wifi":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.wifi)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "calefaccion":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.calefaccion)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "aire_acondicionado":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.aire_acondicionado)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "parrilla":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.parrilla)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "pantalla":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.pantalla)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "catering":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.catering)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "bar":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.bar)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "mesas_sillas":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.mesas_sillas)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "escenario":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.escenario)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "luces":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.luces)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "sonido":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.sonido)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "fotografia":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.fotografia)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "decoracion":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.decoracion)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "baño":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.baño)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "cocina":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.cocina)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "area_infantil":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.area_infantil)
//           : filteredList;
//         setFilteredList(filteredSalones);
//       case "personal_seguridad":
//         filteredSalones = isAvailableFiltered
//           ? filteredList.filter((salon) => salon.personal_seguridad)
//           : filteredList;
//         setFilteredList(filteredSalones);
//         break;
//     }
//   });

//   setFilteredList(filteredSalones);
// };
