'use client'

import React, {useState} from "react";
import style from "./Header.module.css";
import SignIn from "../auth/FormAuth"

export default function UserButton({ showOptions }) {

  const [hidden, setHidden] = useState(false)

  return (
    <>
      {showOptions && (
        <div className={style.userButton}>
          <button onClick={() => {setHidden(true)}}>Iniciar Sesión</button>
          <button onClick={() => {setHidden(true)}}>Registrarse</button>
          <SignIn hidden={hidden} setHidden={setHidden}></SignIn>
        </div>
      )}
    </>
  );
}
