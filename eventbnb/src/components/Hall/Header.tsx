import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const Header = () => {
  return (
    <section>
      <h1 className="text-2xl font-medium">Salón de Fiesta Las Princesas</h1>
      <div className="flex justify-between flex-wrap gap-2">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="flex items-center">
            <FaStar size={15} />{" "}
            <span className="inline-block ml-1 text-sm">4.83</span>
          </span>
          ·
          <button className="flex items-center text-sm underline font-medium">
            35 reseñas
          </button>
          ·
          <span className="flex items-center">
            <BsStars size={15} />
            <span className="inline-block ml-1 text-sm">Superanfitrión</span>
          </span>
          ·
          <button className="flex items-center text-sm underline font-medium">
            Playa Tivives, Provincia de Puntarenas, Costa Rica
          </button>
        </div>
        <div className="flex gap-1">
          <button className="flex items-center text-sm hover:bg-gray-100 px-3 py-2 rounded-md transition duration-100 ease-in-out">
            <FiShare size={15} />
            <span className="inline-block ml-1 text-sm underline font-medium">
              Compartir
            </span>
          </button>
          <button className="flex items-center text-sm hover:bg-gray-100 px-3 py-2 rounded-md transition duration-100 ease-in-out">
            <BsHeart size={15} />
            <span className="inline-block ml-1 text-sm underline font-medium">
              Guardar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
