import React, { useState } from "react";
import style from "./Filter.module.css";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSecuritySelection = (value) => {
    setSelectedSecurity(value);
  };

  const handleBathSelection = (value) => {
    setSelectedBath(value);
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

              {/* Filtro de Rango de Precios */}
              <section className="flex flex-col items-center">
                <h2 className={`text-m font-bold ${style.textPrice}`}>
                  Rango de Precios
                </h2>
                <div className={`flex flex-row ${style.priceRange}`}>
                  <span className={` ${style.priceLabel}`}>
                    Precio mínimo:
                    <input
                      type="text"
                      className={` ${style.priceInput}`}
                      placeholder="$0"
                    />
                  </span>

                  <span className={` ${style.priceLabel}`}>
                    Precio máximo:
                    <input
                      type="text"
                      className={` ${style.priceInput}`}
                      placeholder="$1000"
                    />
                  </span>
                </div>
              </section>

              {/* Filtro de Rango de Capacidad */}
              <section className="flex flex-col items-center">
                <h2 className={`text-m font-bold ${style.textCapacity}`}>
                  Rango de Capacidad
                </h2>
                <div className={`flex flex-row ${style.priceRange}`}>
                  <span className={` ${style.priceLabel}`}>
                    Rango mínimo:
                    <input
                      type="text"
                      className={` ${style.priceInput}`}
                      placeholder="1"
                    />
                  </span>

                  <span className={` ${style.priceLabel}`}>
                    Rango máximo:
                    <input
                      type="text"
                      className={` ${style.priceInput}`}
                      placeholder="300"
                    />
                  </span>
                </div>
              </section>

              {/* Filtro de Personal de Seguridad */}
              <section className="flex flex-col items-center">
                <h2 className={`text-m font-bold ${style.textSecurity}`}>
                  Personal de Seguridad
                </h2>
                <div className={`flex items-center ${style.BathOptions}`}>
                  <div
                    className={`${
                      selectedSecurity === "Cualquiera" ? "bg-blue-500" : ""
                    } ${style.securityOption}`}
                    onClick={() => handleSecuritySelection("Cualquiera")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.securityText}>Cualquiera</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "1" ? "bg-blue-500" : ""
                    } ${style.securityOption}`}
                    onClick={() => handleSecuritySelection("1")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.securityText}>1</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "2" ? "bg-blue-500" : ""
                    } ${style.securityOption}`}
                    onClick={() => handleSecuritySelection("2")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.securityText}>2</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "3" ? "bg-blue-500" : ""
                    } ${style.securityOption}`}
                    onClick={() => handleSecuritySelection("3")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.securityText}>3</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "4" ? "bg-blue-500" : ""
                    } ${style.securityOption}`}
                    onClick={() => handleSecuritySelection("4")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.securityText}>4</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Filtro de Baños */}
              <section className="flex flex-col items-center">
                <h2 className={`text-m font-bold ${style.textBath}`}>Baños</h2>
                <div className={`flex items-center ${style.BathOptions}`}>
                  <div
                    className={`${
                      selectedSecurity === "Cualquiera" ? "bg-blue-500" : ""
                    } ${style.BathOption}`}
                    onClick={() => handleBathSelection("Cualquiera")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.textBath}>Cualquiera</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "1" ? "bg-blue-500" : ""
                    } ${style.BathOption}`}
                    onClick={() => handleBathSelection("1")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.textBath}>1</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "2" ? "bg-blue-500" : ""
                    } ${style.BathOption}`}
                    onClick={() => handleBathSelection("2")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.textBath}>2</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "3" ? "bg-blue-500" : ""
                    } ${style.BathOption}`}
                    onClick={() => handleBathSelection("3")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.textBath}>3</p>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedSecurity === "4" ? "bg-blue-500" : ""
                    } ${style.BathOption}`}
                    onClick={() => handleBathSelection("4")}
                  >
                    <div className="border border-gray-300 rounded-md p-2">
                      <p className={style.textBath}>4</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Filtro de Accesibilidad */}
              <section className="flex flex-col items-center">
                <h2 className={`text-m font-bold ${style.textSecurity}`}>
                  Accesibilidad
                </h2>
              </section>

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
