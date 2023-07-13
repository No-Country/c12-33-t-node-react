"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  precio: yup.number().required(),
  capacidad_max: yup.number().required(),
  superficie: yup.number().required(),
});

export default function AirbnbSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [aireAcondicionado, setAireAcondicionado] = useState(3);
  const [parrilla, setParrilla] = useState(2);
  const [pantalla, setPantalla] = useState(1);
  const [personalSeguridad, setPersonalSeguridad] = useState(7);
  const [baño, setBaño] = useState(5);

  const handleDecrement = (setState) => {
    setState((prevState) => prevState - 1);
  };

  const handleIncrement = (setState) => {
    setState((prevState) => prevState + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Detalles del Alojamiento</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mb-4">
            <label htmlFor="precio" className="text-lg text-gray-900">
              Precio:
            </label>
            <input
              type="number"
              className="rounded-md px-2 py-1 w-24 ml-2"
              {...register("precio")}
            />
            {errors.precio && (
              <span className="text-red-500">Campo requerido</span>
            )}
          </div>

          <div className="flex flex-wrap mb-4">
            <label htmlFor="capacidad_max" className="text-lg text-gray-900">
              Capacidad máxima:
            </label>
            <input
              type="number"
              className="rounded-md px-2 py-1 w-24 ml-2"
              {...register("capacidad_max")}
            />
            {errors.capacidad_max && (
              <span className="text-red-500">Campo requerido</span>
            )}
          </div>

          <div className="flex flex-wrap mb-4">
            <label htmlFor="superficie" className="text-lg text-gray-900">
              Superficie:
            </label>
            <input
              type="number"
              className="rounded-md px-2 py-1 w-24 ml-2"
              {...register("superficie")}
            />
            {errors.superficie && (
              <span className="text-red-500">Campo requerido</span>
            )}
          </div>

          <div className="flex flex-wrap mb-4">
            <label
              htmlFor="aire_acondicionado"
              className="text-lg text-gray-900"
            >
              Aire Acondicionado:
            </label>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 ml-2"
              onClick={() => handleDecrement(setAireAcondicionado)}
            >
              -
            </button>
            <span className="px-3">{aireAcondicionado}</span>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
              onClick={() => handleIncrement(setAireAcondicionado)}
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap mb-4">
            <label htmlFor="parrilla" className="text-lg text-gray-900">
              Parrilla:
            </label>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 ml-2"
              onClick={() => handleDecrement(setParrilla)}
            >
              -
            </button>
            <span className="px-3">{parrilla}</span>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
              onClick={() => handleIncrement(setParrilla)}
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap mb-4">
            <label htmlFor="pantalla" className="text-lg text-gray-900">
              Pantalla:
            </label>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 ml-2"
              onClick={() => handleDecrement(setPantalla)}
            >
              -
            </button>
            <span className="px-3">{pantalla}</span>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
              onClick={() => handleIncrement(setPantalla)}
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap mb-4">
            <label
              htmlFor="personal_seguridad"
              className="text-lg text-gray-900"
            >
              Personal de Seguridad:
            </label>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 ml-2"
              onClick={() => handleDecrement(setPersonalSeguridad)}
            >
              -
            </button>
            <span className="px-3">{personalSeguridad}</span>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
              onClick={() => handleIncrement(setPersonalSeguridad)}
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap mb-4">
            <label htmlFor="baño" className="text-lg text-gray-900">
              Baño:
            </label>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 ml-2"
              onClick={() => handleDecrement(setBaño)}
            >
              -
            </button>
            <span className="px-3">{baño}</span>
            <button
              type="button"
              className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
              onClick={() => handleIncrement(setBaño)}
            >
              +
            </button>
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white rounded-md px-4 py-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
