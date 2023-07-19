import React from "react";
import style from "./Header.module.css";
import { FaTimes } from "react-icons/fa";
import { FilterContext, FilterProvider } from "@/context/FilterContext";

export default function SearchBar({
  searchBar,
  searchLounge,
  handleClearSearch,
}) {
  return (
    <div className={style.searchList}>
      <ul id="results">
        {searchBar?.map((lounge) => (
          <li key={lounge.name}>{lounge.name}</li>
        ))}
      </ul>
      <div>
        {searchLounge && (
          <FaTimes className={style.clearSearch} onClick={handleClearSearch} />
        )}
      </div>
    </div>
  );
}
