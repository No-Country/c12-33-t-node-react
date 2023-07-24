import React, { useState } from "react";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Card from "../card/CardItem";

export default function SearchBar({ handleClearSearch }) {
  const [searchLounge, setSearchLounge] = useState(""); // Estado para el valor del campo de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

  const handleSearch = async () => {
    const filtro = document.getElementById("searchInput").value;
    setSearchLounge(filtro);

    try {
      const response = await axios.get(`/api/search/${filtro}`, {
        params: { input: filtro },
      });
      console.log("EN RESPONSE:", response);
      const data = response.data;
      setSearchResults(data.message);
    } catch (error) {
      console.error("Error al obtener los resultados:", error);
    }
  };

  return (
    <div className={style.searchBar}>
      <div className={style.searchBarAndList}>
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar Salón"
          value={searchLounge}
          onChange={(e) => setSearchLounge(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className={style.searchInput}
        />
      </div>
      <div className={style.searchIcons}>
        <div>
          <button
            type="button"
            id="searchButton"
            onClick={handleSearch}
            className={`bg-pink-500 border-pink border-2 rounded-full cursor-pointer flex items-center justify-center ${style.searchButton}`}
          >
            <FaSearch className={`text-white text-l ${style.faSearch}`} />
          </button>
        </div>
      </div>
      {/* Mostrar los resultados de búsqueda
      {searchResults.length > 0 && (
        <div className={style.searchResults}>
          <p>Resultados:</p>
          <ul>
            {searchResults.map((salon) => (
              <li key={salon.id}>
                <p>Domicilio: {salon.domicilio}</p>
                <p>Localidad: {salon.localidad}</p>
                <p>Ubicación: {salon.ubicacion}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleClearSearch}>Limpiar búsqueda</button>
        </div>
      )} */}
              {searchResults.map((card, i) => (
          <Card card={card} key={i} />
        ))}
    </div>
  );
}
