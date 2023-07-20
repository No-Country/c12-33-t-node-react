import React from "react";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import CardsFiltered from "../../app/api/filters/route";
export default function SearchBar({ searchLounge, handleClearSearch }) {
  const handleSearch = () => {
    const filtro = document.getElementById("searchInput").value;
    console.log("EN EL handleSearch");
    const salones = CardsFiltered;
    console.log(salones);
  };

  return (
    <div className={style.searchBar}>
      <div className={style.searchBarAndList}>
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar Salón"
          value={searchLounge}
          onChange={handleSearch}
          onKeyPress={handleSearch}
          className={style.searchInput}
        />
      </div>
      <div className={style.searchIcons}>
        <div>
          <button
            type="button"
            id="searchButton"
            onClick={(e) => handleSearch(e)}
            className={`bg-pink-500 border-pink border-2 rounded-full cursor-pointer flex items-center justify-center ${style.searchButton}`}
          >
            <FaSearch className={`text-white text-l ${style.faSearch}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
