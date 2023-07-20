"use client";
import React, { useContext } from "react";

import { IModalProvider, ModalContext } from "@/context/ModalProvider";

import { FaStar } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const Reviews = () => {
  const { open } = useContext(ModalContext) as IModalProvider;

  return (
    <section>
      {/* cabecera */}
      <div className="flex flex-wrap gap-1.5 items-center font-medium text-xl mb-8">
        <span className="flex items-center">
          <FaStar size={16} /> <span className="inline-block ml-1">4.83</span>
        </span>
        ·<span className="flex items-center">35 reseñas</span>
      </div>
      <div className="hidden md:grid grid-cols-2 gap-2 mb-8">
        {/* puntaje */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="flex items-center pr-28" key={item}>
            <span className="block w-full">Limpieza</span>
            <div className="flex items-center gap-2">
              <span
                className="block h-1 bg-black"
                style={{ minWidth: "140px" }}
              ></span>
              <span className="font-medium">5.0</span>
            </div>
          </div>
        ))}
      </div>
      {/* reseñas */}
      <div className="flex snap-x w-full sm:grid lg:grid-cols-2 gap-4 overflow-x-auto py-5 lg:py-0">
        {[1, 2, 3].map((item) => (
          <div
            className="scroll-ml-6 snap-start overflow-x-auto shrink-0 lg:pr-24 w-4/5 sm:w-full border-2 sm:border-0 rounded-lg p-4 sm:pl-0 sm:pt-0 sm:pb-6"
            key={item}
          >
            <div className="flex gap-4 items-center mb-3">
              <img
                className="object-cover rounded-full w-10 h-10"
                style={{ minWidth: "40px", minHeight: "40px" }}
                src="https://a0.muscache.com/im/pictures/user/72135e97-1583-4ca4-a8ba-8cdd81827fde.jpg?im_w=240"
                alt="img"
              />
              <div>
                <span className="block text-lg font-medium leading-4">
                  David
                </span>
                <span className="text-sm leading-3 text-gray-500">
                  mayo de 2023
                </span>
              </div>
            </div>
            <p>
              Es un lugar precioso, tanto el entorno natural como la casa. La
              casa tiene todas las comodidades, una cocina completamente
              equipada, muy cómodo y cálido. El lugar es precioso, se nota que
              lo cuidan muy bien. Realmente disfrutamos de descansar y estar en
              la naturaleza. Muchas gracias!!
            </p>
            <button className="mt-2" onClick={open}>
              <span className="flex items-center underline gap-1">
                <span className="font-medium">Mostrar más</span>
                <MdArrowForwardIos size={13} />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
