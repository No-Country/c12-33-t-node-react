"use client";
import React, { useState } from "react";
import style from "./Header.module.css";
import { FaTimes, FaSearch, FaUser } from "react-icons/fa";
import SearchResults from "./SearchResults";

const loungeData = [
  { name: "Cumpleaños", price: 100 },
  { name: "Bautizo", price: 200 },
  { name: "Boda", price: 300 },
  { name: "Temática", price: 400 },
  { name: "Quinciañera", price: 500 },
];

export default function Header() {
  const [lounges, setLounges] = useState(loungeData);
  const [searchLounge, setSearchLounge] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    if (searchLounge.trim() !== "") {
      const filteredResults = lounges.filter((lounge) =>
        lounge.name.toLowerCase().includes(searchLounge.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const handleChange = (e) => {
    setSearchLounge(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchLounge("");
    setSearchResults([]);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.container}>
      <h3 className={`text-pink-500 ${style.logo}`}>festbnb</h3>
      <div className={style.searchBar}>
        <div className={style.searchBarAndList}>
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar Salón"
            value={searchLounge}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className={style.searchInput}
          />
          <div className={style.searchResult}>
            {searchResults.length > 0 && (
              <SearchResults
                searchResults={searchResults}
                handleClearSearch={handleClearSearch}
              />
            )}
          </div>
        </div>
        <div className={style.searchIcons}>
          <div>
            {searchLounge && (
              <FaTimes
                className={style.clearSearch}
                onClick={handleClearSearch}
              />
            )}
          </div>
          <div>
            <button
              type="button"
              id="searchButton"
              onClick={handleSearch}
              className={`bg-pink-500 border-2 border-pink-500 rounded-full cursor-pointer flex items-center justify-center ${style.searchButton}`}
            >
              <FaSearch className={`text-white text-l ${style.faSearch}`} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <a className={style.user} href="#" onClick={handleToggleOptions}>
          <FaUser className={style.faUser} />
        </a>

        {showOptions && (
          <div className={style.userButton}>
            <button>Iniciar Sesión</button>
            <button>Registrarse</button>
          </div>
        )}
      </div>
    </div>
  );
}
