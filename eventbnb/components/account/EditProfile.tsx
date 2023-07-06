"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useUser from "../hooks/useUser"; // Este hook debe manejar la lógica del usuario actual y las operaciones CRUD en MongoDB

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  apellido: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
  telefono: yup.string().required("El teléfono es requerido"),
  fechaNacimiento: yup.date().required("La fecha de nacimiento es requerida"),
  domicilio: yup.string().required("El domicilio es requerido"),
  localidad: yup.string().required("La localidad es requerida"),
  pais: yup.string().required("El país es requerido"),
});

const userTemplate = {
  _id: "649f8ccc12b6415694a8e746",
  nombre: "Exe",
  apellido: "Gerez",
  email: "usuario5@usuario.com",
  password: "432154534",
  telefono: "176565",
  fechaNacimiento: new Date(),
  domicilio: "Bosques, jose Ingenieros",
  localidad: "Bs As",
  pais: "Arg",
};


const EditProfile: React.FC =  () => {
  const { getUser, updateUser } = useUser(); // Aquí obtienes los datos del usuario actual y la función para actualizar el perfil
//   const id = "649f8ccc12b6415694a8e746";
//   const usuario = getUser(id);
// console.log(usuario)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: userTemplate,
  });

  const onSubmit = async (data: FormData) => {
    const id = "649f8ccc12b6415694a8e746";
    await updateUser(id, data);
    // redirigir al usuario a otra página después de actualizar el perfil
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4 flex flex-col gap-6">Editar perfil</h1>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
            } rounded px-3 py-2 w-full`}
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
          <input
            id="pais"
            type="text"
            className={`border ${
              errors.pais ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 w-full`}
            {...register("pais")}
          />
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
    </div>
  );
};

export default EditProfile;
