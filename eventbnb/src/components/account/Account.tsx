"use client";
import Image from "next/image";
import account from "../utils/account.json";
import useUser from "../hooks/useUser";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "@/utils/cookies";
import { useSession } from "next-auth/react";

interface User {
  _id: string;
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
// if (!session && !token) {
//   window.location.href = "/";
// }

async function getData() {
  let token = getCookie("userToken");
  const res = await fetch("http://34.125.90.13:5000/usuarios/protected", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Account: React.FC = async () => {
  // const { getUser } = useUser();
  // const user = await getUser();

  // const { getUser} = useUser(); // Aquí obtiene los datos del usuario actual y la función para actualizar el perfil
  // const [user, setUser] = useState<User>();
  // const userr = await getUser();

  // useEffect(() => {
  //   const getDataUser = async () =>{
  //     try {
  //       setUser(userr)
  //       console.log(user);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   getDataUser();
  // }, [userr,user])

  const data = await getData();

  return (
    <section className="mx-4">
      <div className="mt-16 mb-14 ml-4 text-[#222222] text-3xl">
        <h1>Cuenta</h1>
        <div className="text-lg mt-2 mb-4">
          <span>{data?.nombre}, </span>
          <span>{data?.email} · </span>
          <Link href={` /account-settings/${data?._id}`}>Ir al perfil</Link>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap px-2">
        {account.account.map((item) => (
          <div key={item.title} className="my-2 p-4 w-96 rounded-xl shadow-lg">
            <div>
              <Image
                className="block mb-4"
                width={32}
                height={32}
                src={item.URLImage}
                alt={item.title}
              />
            </div>
            <div>
              <div className="text-[#222222] text-base mb-2">{item.title}</div>
              <div className="text-[#717171] text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
