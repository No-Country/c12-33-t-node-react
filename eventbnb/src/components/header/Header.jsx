"use client";
import React, { useState, useEffect, useContext } from "react";
import style from "./Header.module.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";

export default function Header({}) {
  const [cards, setCards] = useState("");
  // const [lounges, setLounges] = useState(loungeData);
  const [searchLounge, setSearchLounge] = useState("");
  const [searchBar, setSearchBar] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const url = process.env.MICROSERVICIOS;

  useEffect(() => {
    // const fetchCards = async () => {
    //   try {
    //     const { data } = await axios(`${url}/salones`);
    //     const salonesList = data.data;
    //     setList(salonesList);
    //   } catch (error) {
    //     console.error("Error al obtener la lista de salones:", error);
    //   }
    // };

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // fetchCards();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
    setShowUserOptions(!showUserOptions);
  };

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <div
        id="header"
        className={`${style.container} ${isFixed ? style.fixedHeader : ""}`}
      >
        <div className={style.search__container}>
          <Link href="/" className={`${style.logo}`}>
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
                  className={`bg-pink-500 border-pink border-2 rounded-full cursor-pointer flex items-center justify-center ${style.searchButton}`}
                >
                  <FaSearch className={`text-white text-l ${style.faSearch}`} />
                </button>
              </div>
            </div>
          </div>
          <div className={style.user}>
            <button
              onClick={handleToggleOptions}
              className={`flex items-center gap-x-4 ${style.userModal}`}
            >
              <div>
                <AiOutlineMenu className="text-xl text-black w-6"></AiOutlineMenu>
              </div>
              <div>
                <FaUser className={style.faUser} />
              </div>
            </button>
            <div className={` ${style.userOptions}`}>
              <UserButton showOptions={showOptions} />
            </div>
          </div>
        </div>
      </div>

      <Filter />
    </>
  );
}
