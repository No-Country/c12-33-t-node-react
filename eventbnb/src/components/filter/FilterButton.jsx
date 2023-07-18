import React, { useState } from "react";
import style from "./Filter.module.css";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={`flex flex-col items-center ${style.filterButton}`}>
      <div>
        <button
          style={{
            marginTop: "40px",
            marginRight: "140px",
            width: "100px",
            fontSize: "20px",
          }}
          className={`text-sm ${style.filterButton1} `}
          onClick={toggleModal}
        >
          Filtros
        </button>
      </div>

      <div
        className={` absolute z-50 flex flex-col items-center right-full ${style.showModal}`}
      >
        {showModal && (
          <div className={`top-10 ${style.filterModal}`}>
            <div className={`${style.modalContent}`}>
              <div className="bg-white">
                <h2 className={`text-2xl ${style.modalTitle}`}>Filtros</h2>
              </div>
              <div className="flex-grow"></div>
              <div className="bg-white">
                <button
                  onClick={toggleModal}
                  className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
