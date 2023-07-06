import React from "react";
import style from "./Header.module.css";

export default function UserButton({ showOptions }) {
  return (
    <>
      {showOptions && (
        <div className={style.userButton}>
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
      )}
    </>
  );
}
