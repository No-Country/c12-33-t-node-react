import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer__logo}>
        <h3>festbnb</h3>
      </div>
      <div className={style.footer__terms}>
        <h3>Términos y Condiciones</h3>
      </div>
      <div className={style.footer__links}>
        <ul>
          <li>
            <a href="#">Contacto:</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
