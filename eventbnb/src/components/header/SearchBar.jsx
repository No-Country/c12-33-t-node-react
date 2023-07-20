"use client";
import React, { useState } from "react";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Cards from "@/components/card/Cards";

export default function SearchBar({ setFilteredCards }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("/api/filters", {
        name,
        address,
        city,
        location,
      });
      const { results } = response.data;
      console.log(results);
      setFilteredCards(results); // Actualiza el estado con los resultados filtrados
    } catch (error) {
      console.error(error);
    }
    console.log("Buscando...");
  };

  return (
    <div className={style.searchBar}>
      <div className={style.searchBarAndList}>
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar Salón"
          value={name} // Utiliza el valor correcto según tus necesidades
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleSearch}
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
    </div>
  );
}
