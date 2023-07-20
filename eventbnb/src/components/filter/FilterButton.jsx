"use client";
import React, { useState } from "react";
import Price from "./selection/PriceFilter";
import Capacity from "./selection/CapacityFilter";
import Security from "./selection/SecurityFilter";
import Bath from "./selection/BathFilter";
// import Accessibility from "./selection/AccessibilityFilter";
import style from "./Filter.module.css";
import PriceFilter from "./selection/PriceFilter";

// import { FilterContext } from "@/context/FilterContext";
// import { FaTimes } from "react-icons/fa";
// import { FaDollarSign, FaParking } from "react-icons/fa";
// import { FaWater, FaDog, FaCalendarAlt, FaStar } from "react-icons/fa";
// import { handlePriceIconClick, handleParkingIconClick } from "./handlers";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSecurity, setSelectedSecurity] = useState("");
  const [selectedBath, setSelectedBath] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSecuritySelection = (value) => {
    setSelectedSecurity(value);
  };

  const handleBathSelection = (value) => {
    setSelectedBath(value);
  };

  const handlePriceRange = (value) => {
    setSelectedPrice(value);
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
              <div
                className={`flex flex-grow my-4 bg-white ${style.filterTitleTop}`}
              >
                <h2 className={`${style.filterTitle}`}>Filtros</h2>
              </div>
              <div
                className={style.scroll}
                style={{ maxHeight: "400px", overflow: "auto" }}
              >
                <PriceFilter
                // selectedPrice={selectedPrice}
                // handlePriceRange={handlePriceRange}
                />
                <Capacity />
                <Security
                  selectedSecurity={selectedSecurity}
                  handleSecuritySelection={handleSecuritySelection}
                />
                <Bath
                  selectedBath={selectedBath}
                  handleBathSelection={handleBathSelection}
                />
                <Bath
                  selectedBath={selectedBath}
                  handleBathSelection={handleBathSelection}
                />
                <Bath
                  selectedBath={selectedBath}
                  handleBathSelection={handleBathSelection}
                />
                <Bath
                  selectedBath={selectedBath}
                  handleBathSelection={handleBathSelection}
                />
                {/* <Accessibility /> */}
              </div>

              <div
                className={`flex flex-grow my-4 bg-white ${style.filterBottom}`}
              >
                <div className="bg-white">
                  <button
                    onClick={toggleModal}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Quitar todos
                  </button>
                </div>
                <div className="bg-white">
                  <button
                    onClick={toggleModal}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Cerrar
                  </button>
                </div>
                <div className="bg-white">
                  <button
                    onClick={toggleModal}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Mostrar <span>#</span> salones
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import style from "./Filter.module.css";

// export default function FilterButton() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedSecurity, setSelectedSecurity] = useState("");
//   const [selectedBath, setSelectedBath] = useState("");
//   const [selectedCapacity, setSelectedCapacity] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   const handleSecuritySelection = (value) => {
//     setSelectedSecurity(value);
//   };

//   const handleBathSelection = (value) => {
//     setSelectedBath(value);
//   };

//   return (
//     <div className={`flex flex-col items-center ${style.filterButton}`}>
//       <div>
//         <button
//           style={{
//             marginTop: "40px",
//             marginRight: "140px",
//             width: "100px",
//             fontSize: "20px",
//           }}
//           className={`text-sm ${style.filterButton1} `}
//           onClick={toggleModal}
//         >
//           Filtros
//         </button>
//       </div>

//       <div
//         className={` absolute z-50 flex flex-col items-center right-full ${style.showModal}`}
//       >
//         {showModal && (
//           <div className={`top-10 ${style.filterModal}`}>
//             <div className={`${style.modalContent}`}>
//               <div className="bg-white">
//                 <h2 className={`text-2xl  ${style.modalTitle}`}>Filtros</h2>
//               </div>

//               {/* Filtro de Rango de Precios */}
//               <section className="flex flex-col items-center">
//                 <h2 className={`text-m font-bold ${style.textPrice}`}>
//                   Rango de Precios
//                 </h2>
//                 <div className={`flex flex-row ${style.priceRange}`}>
//                   <span className={` ${style.priceLabel}`}>
//                     Precio mínimo:
//                     <input
//                       type="text"
//                       className={` ${style.priceInput}`}
//                       placeholder="$0"
//                     />
//                   </span>

//                   <span className={` ${style.priceLabel}`}>
//                     Precio máximo:
//                     <input
//                       type="text"
//                       className={` ${style.priceInput}`}
//                       placeholder="$1000"
//                     />
//                   </span>
//                 </div>
//               </section>

//               {/* Filtro de Rango de Capacidad */}
//               <section className="flex flex-col items-center">
//                 <h2 className={`text-m font-bold ${style.textCapacity}`}>
//                   Rango de Capacidad
//                 </h2>
//                 <div className={`flex flex-row ${style.priceRange}`}>
//                   <span className={` ${style.priceLabel}`}>
//                     Rango mínimo:
//                     <input
//                       type="text"
//                       className={` ${style.priceInput}`}
//                       placeholder="1"
//                     />
//                   </span>

//                   <span className={` ${style.priceLabel}`}>
//                     Rango máximo:
//                     <input
//                       type="text"
//                       className={` ${style.priceInput}`}
//                       placeholder="300"
//                     />
//                   </span>
//                 </div>
//               </section>

//               {/* Filtro de Personal de Seguridad */}
//               <section className="flex flex-col items-center">
//                 <h2 className={`text-m font-bold ${style.textSecurity}`}>
//                   Personal de Seguridad
//                 </h2>
//                 <div className={`flex items-center ${style.BathOptions}`}>
//                   <div
//                     className={`${
//                       selectedSecurity === "Cualquiera" ? "bg-blue-500" : ""
//                     } ${style.securityOption}`}
//                     onClick={() => handleSecuritySelection("Cualquiera")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.securityText}>Cualquiera</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "1" ? "bg-blue-500" : ""
//                     } ${style.securityOption}`}
//                     onClick={() => handleSecuritySelection("1")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.securityText}>1</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "2" ? "bg-blue-500" : ""
//                     } ${style.securityOption}`}
//                     onClick={() => handleSecuritySelection("2")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.securityText}>2</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "3" ? "bg-blue-500" : ""
//                     } ${style.securityOption}`}
//                     onClick={() => handleSecuritySelection("3")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.securityText}>3</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "4" ? "bg-blue-500" : ""
//                     } ${style.securityOption}`}
//                     onClick={() => handleSecuritySelection("4")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.securityText}>4</p>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Filtro de Baños */}
//               <section className="flex flex-col items-center">
//                 <h2 className={`text-m font-bold ${style.textBath}`}>Baños</h2>
//                 <div className={`flex items-center ${style.BathOptions}`}>
//                   <div
//                     className={`${
//                       selectedSecurity === "Cualquiera" ? "bg-blue-500" : ""
//                     } ${style.BathOption}`}
//                     onClick={() => handleBathSelection("Cualquiera")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.textBath}>Cualquiera</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "1" ? "bg-blue-500" : ""
//                     } ${style.BathOption}`}
//                     onClick={() => handleBathSelection("1")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.textBath}>1</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "2" ? "bg-blue-500" : ""
//                     } ${style.BathOption}`}
//                     onClick={() => handleBathSelection("2")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.textBath}>2</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "3" ? "bg-blue-500" : ""
//                     } ${style.BathOption}`}
//                     onClick={() => handleBathSelection("3")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.textBath}>3</p>
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       selectedSecurity === "4" ? "bg-blue-500" : ""
//                     } ${style.BathOption}`}
//                     onClick={() => handleBathSelection("4")}
//                   >
//                     <div className="border border-gray-300 rounded-md p-2">
//                       <p className={style.textBath}>4</p>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Filtro de Accesibilidad */}
//               <section className="flex flex-col items-center">
//                 <h2 className={`text-m font-bold ${style.textSecurity}`}>
//                   Accesibilidad
//                 </h2>
//               </section>

//               <div className="flex-grow"></div>
//               <div className="bg-white">
//                 <button
//                   onClick={toggleModal}
//                   className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
//                 >
//                   Cerrar
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
