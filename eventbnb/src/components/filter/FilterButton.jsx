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
        className={` relative top-1/2 transform  z-50 flex flex-col ${style.showModal}`}
      >
        {showModal && (
          <div className={` absolute top-16 ${style.modal}`}>
            <div className={`${style.modalContent}`}>
              <h2>Este es el contenido del modal</h2>
              <button onClick={toggleModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
