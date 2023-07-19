import React from "react";
import style from "./Header.module.css";
import { FaTimes } from "react-icons/fa";
// import { FilterContext } from "@/context/FilterContext";

export default function SearchBar({ searchLounge, handleClearSearch }) {
  return (
    <div className={style.searchList}>
      <ul id="results">
        {searchLounge?.map((lounge) => (
          <li key={lounge.name}>{lounge.name}</li>
        ))}
      </ul>
      <div>
        {searchLounge && (
          <FaTimes
            className={style.clearSearch}
            onClick={handleClearSearch} // Llama al método 'handleClearSearch'
          />
        )}
      </div>
    </div>
  );
}
