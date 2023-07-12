"use client";
import React, { useState } from "react";
import style from "./Header.module.css";
import { FaSearch, FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import Link from "next/link";
import SearchResults from "./SearchResults";
import UserButton from "./UserButton";

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
  const [showUserOptions, setShowUserOptions] = useState(false);

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
    setShowUserOptions(!showUserOptions);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.container}>
      <div className={style.search__container}>
        <Link href="/" className={`text-pink-500 ${style.logo}`}>
          festbnb
        </Link>
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
                  searchLounge={searchLounge}
                  handleClearSearch={handleClearSearch}
                  showOptions={showOptions}
                />
              )}
            </div>
          </div>
          <div className={style.searchIcons}>
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
        <div className={style.user}>
          <button onClick={handleToggleOptions} className={`flex items-center gap-x-4 ${style.userModal}`}>
            <div>
              <AiOutlineMenu className="text-xl text-black w-6"></AiOutlineMenu>
            </div>
            <div >
              <FaUser className={style.faUser} />
            </div>
          </button>
          <div className={style.userOptions}>
            <UserButton showOptions={showOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
