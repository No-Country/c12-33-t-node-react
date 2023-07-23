"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { countries } from "../utils/countries";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useUsers from "@/hooks/useUsers";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  apellido: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
  telefono: yup
    .number()
    .min(10, "El telefono debe tener al menos 10 números")
    .positive("El telefono no es valido")
    .required("El teléfono es requerido"),
  fechaNacimiento: yup.date().required("La fecha de nacimiento es requerida"),
  domicilio: yup.string().required("El domicilio es requerido"),
  localidad: yup.string().required("La localidad es requerida"),
  pais: yup.string().required("El país es requerido"),
});

const EditProfile: React.FC = () => {
  const { getUserData } = useUsers();
  const [data, setData] = useState();
  const { data: session } = useSession();
  const [jsonWebToken, setJsonWebToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const validate = async () => {
      try {
        const dataUser = await getUserData();
        setData(dataUser);
      } catch (error) {
        alert(error);
      }
    };
    validate();
  }, [getUserData]);

  useEffect(() => {
    const jwt = getCookie("userToken");
    setJsonWebToken(jwt);
    if (!session && !jsonWebToken) {
      router.push("/");
    }
  }, [jsonWebToken, router, session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="container mx-5 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center flex flex-col gap-6">
        Editar perfil
      </h1>
      <section className="flex items-start justify-evenly">
        <div className="">
          <div className="px-8 py-6 rounded-md shadow-xl">
            <h1 className="">
              <FaUser className="bg-slate-500 w-24 h-24 rounded-full" />
            </h1>
            <h1 className="text-center font-semibold">{data?.nombre}</h1>
            <span className="text-gray-600 font-semibold">Usuario</span>
          </div>
        </div>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              className={`border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("nombre")}
            />
            {errors.nombre && (
              <p className="text-red-500 mt-1">{errors.nombre.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="apellido"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              className={`border ${
                errors.apellido ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("apellido")}
            />
            {errors.apellido && (
              <p className="text-red-500 mt-1">{errors.apellido.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              type="text"
              className={`border ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("telefono")}
            />
            {errors.telefono && (
              <p className="text-red-500 mt-1">{errors.telefono.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fecha de nacimiento
            </label>
            <input
              id="fechaNacimiento"
              type="date"
              className={`border ${
                errors.fechaNacimiento ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("fechaNacimiento")}
            />
            {errors.fechaNacimiento && (
              <p className="text-red-500 mt-1">
                {errors.fechaNacimiento.message}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="domicilio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Domicilio
            </label>
            <input
              id="domicilio"
              type="text"
              className={`border ${
                errors.domicilio ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("domicilio")}
            />
            {errors.domicilio && (
              <p className="text-red-500 mt-1">{errors.domicilio.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="localidad"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Localidad
            </label>
            <input
              id="localidad"
              type="text"
              className={`border ${
                errors.localidad ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("localidad")}
            />
            {errors.localidad && (
              <p className="text-red-500 mt-1">{errors.localidad.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="pais"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              País
            </label>
            <select
              id="pais"
              {...register("pais")}
              className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Seleccione un país</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.pais && (
              <p className="text-red-500 mt-1">{errors.pais.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
          >
            Guardar cambios
          </button>
        </form>
      </section>
    </section>
  );
};

export default EditProfile;
