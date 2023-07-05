import React from "react";
import style from "./Header.module.css";

export default function SearchResults({ searchResults, handleClearSearch }) {
  return (
    <div className={style.searchList}>
      <ul id="results">
        {searchResults.map((lounge) => (
          <li key={lounge.name}>{lounge.name}</li>
        ))}
      </ul>
    </div>
  );
}
