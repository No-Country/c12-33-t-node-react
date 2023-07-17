"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackButton from "@/components/create-halls/BackButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";

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
    // if(aireAcondicionado<0 || parrilla<0||pantalla<0||personalSeguridad<0||baño<0){
    //   document.querySelector("button")?.setAttribute("disabled")
    // }
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
      
      <h2 className="text-2xl font-bold mb-6 text-center">Detalles del salón de fiestas</h2>
      <div className="container mx-auto flex items-center justify-center">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mb-4">
            <label htmlFor="precio" className="text-lg text-gray-900">
              Precio:
            </label>
            <input
              type="number"
              className={`border ${
                errors.precio ? "border-red-500" : "border-gray-300"
              } px-2 py-1 w-24 ml-2 block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
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
              className={`border ${
                errors.capacidad_max ? "border-red-500" : "border-gray-300"
              } px-2 py-1 w-24 ml-2 block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
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
              className={`border ${
                errors.superficie ? "border-red-500" : "border-gray-300"
              } px-2 py-1 w-24 ml-2 block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
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
              disabled = {aireAcondicionado <= 0? true : false}
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
              disabled = {parrilla <= 0? true : false}
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
            disabled = {pantalla <= 0? true : false}
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
            disabled = {personalSeguridad <= 0? true : false}
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
            disabled = {baño <= 0? true : false}
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
            className=" flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
          >
            Confirmar
          </button>
          
        </form>
      </div>
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
            <BackButton href="./stand-out"></BackButton>
            <ButtonHalls
              
              href="./finish-setup"
              content="Siguiente"
              backBtn={true}
            />
          </div>
    </section>
  );
}
