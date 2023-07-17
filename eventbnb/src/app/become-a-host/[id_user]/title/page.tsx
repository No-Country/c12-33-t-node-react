"use client";

import BackButton from "@/components/create-halls/BackButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSalons from "@/hooks/useSalons";
import { useRouter } from "next/navigation";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  domicilio: yup.string().required("El domicilio es requerido"),
  localidad: yup.string().required("La localidad es requerida"),
  ubicacion: yup.string().required("La ubicación es requerida"),
  telefono: yup.number().required("El teléfono es requerido"),
});

const PassedFinal: React.FC = () => {
  const {salon, setSalon} = useSalons<Salon>()
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
    setSalon((prevState) => ({
      ...prevState,
      [data.nombre]: prevState[data.nombre],
      [data.domicilio]: prevState[data.domicilio],
      [data.localidad]: prevState[data.localidad],
      [data.ubicacion]: prevState[data.ubicacion],
      [data.telefono]: prevState[data.telefono],
    }));
    router.push("./photos");
    // window.location.href = "./photos";
  }

  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Datos del salón</h2>
      <div className="container mx-auto py-8 flex items-center justify-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
              <span className="text-red-500 mt-1">{errors.nombre.message}</span>
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
              <span className="text-red-500 mt-1">{errors.domicilio.message}</span>
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
              <span className="text-red-500 mt-1">{errors.localidad.message}</span>
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
              <span className="text-red-500 mt-1">{errors.ubicacion.message}</span>
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
              <span className="text-red-500 mt-1">{errors.telefono.message}</span>
            )}
          </div>

          {/* <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
            >
              Confirmar
            </button>
          </div> */}
          <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
            <BackButton href="./finish-setup"></BackButton>
            <button
              className={`bg-black/90 hover:bg-black px-6 py-3 rounded-md text-white font-semibold`}
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
      {/* <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
        <BackButton href="./finish-setup"></BackButton>
        <ButtonHalls href="./photos" content="Siguiente" backBtn={true} />
      </div> */}
    </section>
  );
};

export default PassedFinal;
