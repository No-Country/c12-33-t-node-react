"use client";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";
import { useRouter } from "next/navigation";

const impuestos = 123;
const tarifaEventBnb = 120;

const ReservationForm = () => {
  const { eventHall, disabled, formattedDateReservation, reviews } = useContext(
    EventHallContext
  ) as IEventHallProvider;
  const router = useRouter();
  if (!eventHall) return null;

  const handleClick = () => {
    if (disabled) alert("primero fijate si esta disponible esta fecha");
    // router.push()
  };

  return (
    <div className="p-6 mt-10 border rounded-xl shadow-xl sticky top-56">
      <div className="flex justify-between pb-5">
        <div>
          <span className="text-xl font-medium">${eventHall.precio}</span>{" "}
          <span>noche</span>
        </div>
        <p className="flex gap-1.5 items-center">
          <span className="flex items-center">
            <FaStar size={13} />{" "}
            <span className="inline-block ml-1 text-sm">4.83</span>
          </span>{" "}
          ·{" "}
          <span className="text-sm text-gray-500">
            {reviews?.amount} reseñas
          </span>
        </p>
      </div>
      <div>
        <span>
          Reservar para: <b>{formattedDateReservation}</b>
        </span>
      </div>
      <div className="pt-5">
        <button
          onClick={handleClick}
          className={` ${
            disabled
              ? " hover:cursor-not-allowed"
              : "hover:cursor-pointer hover:bg-rose-400"
          } bg-rose-500 rounded-lg text-white font-medium py-3 px-3 w-full`}
        >
          Reserva
        </button>
      </div>
      <div className="py-5 border-b">
        <p className="flex justify-between">
          <span className="text-sm text-gray-500 underline">Impuestos</span>{" "}
          <span>${impuestos}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-sm text-gray-500 underline">
            Tarifa por servicio de Airbnb
          </span>{" "}
          <span>${tarifaEventBnb}</span>
        </p>
      </div>
      <div className="flex justify-between pt-6 font-medium text-lg">
        <span>Total incluyendo impuestos</span>
        <span>${eventHall?.precio + tarifaEventBnb + impuestos}</span>
      </div>
    </div>
  );
};

export default ReservationForm;
