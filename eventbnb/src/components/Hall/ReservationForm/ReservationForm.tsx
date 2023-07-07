import React from "react";
import { FaStar } from "react-icons/fa";

const ReservationForm = () => {
  return (
    <div className="p-6 mt-10 border rounded-xl shadow-xl">
      <div className="flex justify-between pb-5">
        <div>
          <span className="text-xl font-medium">$867</span> <span>noche</span>
        </div>
        <p className="flex gap-1.5 items-center">
          <span className="flex items-center">
            <FaStar size={13} />{" "}
            <span className="inline-block ml-1 text-sm">4.83</span>
          </span>{" "}
          · <span className="text-sm text-gray-500">166 reseñas</span>
        </p>
      </div>
      <div>
        <input
          className="rounded-md border-2 border-zinc-300 px-3 py-2 w-full"
          type="date"
          name=""
          id=""
        />
      </div>
      <div className="pt-5">
        <button className="bg-rose-500 rounded-lg text-white font-medium py-3 px-3 w-full">
          Reserva
        </button>
      </div>
      <div className="py-5 border-b">
        <p className="flex justify-between">
          <span className="text-sm text-gray-500 underline">
            Tarifa de limpieza
          </span>{" "}
          <span>$102</span>
        </p>
        <p className="flex justify-between">
          <span className="text-sm text-gray-500 underline">
            Tarifa por servicio de Airbnb
          </span>{" "}
          <span>$122</span>
        </p>
      </div>
      <div className="flex justify-between pt-6 font-medium text-lg">
        <span>Total sin incluir impuestos</span>
        <span>$896</span>
      </div>
    </div>
  );
};

export default ReservationForm;
