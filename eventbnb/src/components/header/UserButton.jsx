"use client";

import React, { useState } from "react";
import style from "./Header.module.css";
import SignIn from "../auth/FormAuth";
import { deleteCookie } from "../../utils/cookies";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserButton({ showOptions }) {
  const [hidden, setHidden] = useState(false);
  const { data: session } = useSession();

  const logOut = async () => {
    deleteCookie("token-user");
    signOut();
  };

  return (
    <>
      {showOptions && (
        <div
          className={`flex flex-col items-start right-8 h-20 bg-white border border-gray-300 rounded-lg w-72 my-2 ${style.login}`}
        >
          {!session && (
            <>
              <button
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
                onClick={() => setHidden(true)}
              >
                Iniciar Sesión
              </button>
              <button
                className={`w-full h-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn2}`}
                onClick={() => setHidden(true)}
              >
                Registrarse
              </button>
              <hr />
            </>
          )}
          {session && (
            <>
              <Link
                href=""
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Ver Perfil
              </Link>
              <hr />
              <Link
                href=""
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Favoritos
              </Link>
              <hr />
              <button
                type="button"
                onClick={() => logOut()}
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Cerrar sesión
              </button>
            </>
          )}
          <SignIn hidden={hidden} setHidden={setHidden} />
        </div>
      )}
    </>
  );
}
