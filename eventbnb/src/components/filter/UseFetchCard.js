export const fetchCards = async (setCards, setFilteredCards) => {
  const response = await fetch("/api/salones");
  const data = await response.json();
  setCards(data);
  setFilteredCards(data);
};

export const fetchLounge = async (setLounge) => {
  const response = await fetch("/api/salones");
  const data = await response.json();
  const lounge = data.map((lounge) => lounge.localidad);
  setLounge(lounge);
};

export const handleSearch = (e, cards, setFilteredCards) => {
  if (e?.target.value === "") {
    const searchTerm = e.target.value?.toLowerCase();
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

export const handleChange = (e, setSearchLounge) => {
  setSearchLounge(e.target.value);
};

export const handleKeyPress = (e, handleSearch) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

export const handleClearSearch = (setSearchLounge, setSearchBar) => {
  setSearchLounge("");
  setSearchBar([]);
};
