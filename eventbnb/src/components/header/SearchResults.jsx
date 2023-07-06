import React from "react";
import style from "./Header.module.css";
import { FaTimes } from "react-icons/fa";

export default function SearchResults({
  searchResults,
  searchLounge,
  handleClearSearch,
}) {
  return (
    <div className={style.searchList}>
      <ul id="results">
        {searchResults.map((lounge) => (
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
