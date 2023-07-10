

interface User {
  //   _id: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: number;
  fechaNacimiento: Date;
  domicilio: string;
  localidad: string;
  pais: string;
}



const useUser = (): {
  getUser: (userId: string) => Promise<User | null>;
  updateUser: (userId: string, updatedUserData: User) => Promise<User | null>;
} => {
  const getUser = async (userId: string): Promise<User | null> => {
    try {
      // Aquí puedes hacer una llamada a tu API o utilizar una lógica para obtener los datos del usuario
      const user: User = {
        // _id: "649f8ccc12b6415694a8e746",
        nombre: "Hector",
        apellido: "Sol",
        email: "usuario1@usuario.com",
        password: "4321",
        telefono: 11223344,
        fechaNacimiento: new Date(),
        domicilio: "calle 20 Nro 112",
        localidad: "General Pico",
        pais: "Arg",
      };
      console.log("Usuario: " ,user);

      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateUser = async (
    userId: string,
    updatedUserData: User
  ): Promise<User | null> => {
    try {
      // Hacer una llamada a la API o utilizar una lógica para actualizar los datos del usuario
      const updatedUser: User = {
        // _id: userId,
        nombre: updatedUserData.nombre || "",
        apellido: updatedUserData.apellido || "",
        email: updatedUserData.email || "",
        password: updatedUserData.password || "",
        telefono: updatedUserData.telefono || 0,
        fechaNacimiento: updatedUserData.fechaNacimiento || new Date(),
        domicilio: updatedUserData.domicilio || "",
        localidad: updatedUserData.localidad || "",
        pais: updatedUserData.pais || ""
      };
      console.log("Usuario actualizado: ",updatedUser);
      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return { getUser, updateUser };
};

export default useUser;
