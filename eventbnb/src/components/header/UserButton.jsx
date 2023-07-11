"use client";

import React, { useState } from "react";
import style from "./Header.module.css";
import SignIn from "../auth/FormAuth";

export default function UserButton({ showOptions }) {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {showOptions && (
        <div
          className={`flex flex-col items-center justify-center right-0 h-20 bg-white border border-gray-300 rounded-lg md:flex-row md:w-54 md:my-2 ${style.login}`}
        >
          <button
            className={`w-full h-full text-black rounded-lg ${style.login__btn1}`}
            onClick={() => setHidden(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className={`w-full h-full text-black rounded-lg ${style.login__btn2}`}
            onClick={() => setHidden(true)}
          >
            Registrarse
          </button>
          <SignIn hidden={hidden} setHidden={setHidden} />
        </div>
      )}
    </>
  );
}
