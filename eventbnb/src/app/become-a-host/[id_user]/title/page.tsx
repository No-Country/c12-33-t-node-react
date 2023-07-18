"use client";

import BackButton from "@/components/create-halls/BackButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// interface SalonFormData {
//   nombre: string;
//   domicilio: string;
//   localidad: string;
//   ubicacion: string;
//   telefono: string;
//   imagenes: string[];
// }

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  domicilio: yup.string().required("El domicilio es requerido"),
  localidad: yup.string().required("La localidad es requerida"),
  ubicacion: yup.string().required("La ubicación es requerida"),
  telefono: yup.number().required("El teléfono es requerido"),
});

const PassedFinal: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4 text-center">Datos del salón</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className={`border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("nombre")}
            />
            {errors.nombre && (
              <p className="text-red-500 mt-1">{errors.nombre.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="domicilio"
              className="block text-gray-700 font-medium mb-2"
            >
              Domicilio
            </label>
            <input
              type="text"
              id="domicilio"
              className={`border ${
                errors.domicilio ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("domicilio")}
            />
            {errors.domicilio && (
              <p className="text-red-500 mt-1">{errors.domicilio.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="localidad"
              className="block text-gray-700 font-medium mb-2"
            >
              Localidad
            </label>
            <input
              type="text"
              id="localidad"
              className={`border ${
                errors.localidad ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("localidad")}
            />
            {errors.localidad && (
              <p className="text-red-500 mt-1">{errors.localidad.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="ubicacion"
              className="block text-gray-700 font-medium mb-2"
            >
              Ubicación
            </label>
            <input
              type="text"
              id="ubicacion"
              className={`border ${
                errors.ubicacion ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("ubicacion")}
            />
            {errors.ubicacion && (
              <p className="text-red-500 mt-1">{errors.ubicacion.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-gray-700 font-medium mb-2"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              className={`border ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("telefono")}
            />
            {errors.telefono && (
              <p className="text-red-500 mt-1">{errors.telefono.message}</p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
        <BackButton href="./finish-setup"></BackButton>
        <ButtonHalls href="/" content="Siguiente" backBtn={true} />
      </div>
    </>
  );
};

export default PassedFinal;
