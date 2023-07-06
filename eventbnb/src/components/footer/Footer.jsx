import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <Link href="/" className={style.footer__logo}>
        <h3>festbnb</h3>
      </Link>
      <Link href="./terms" className={style.footer__terms}>
        <h3>Términos y Condiciones</h3>
      </Link>
      <div className={style.footer__links}>
        <ul>
          <li>
            <a href="#">Contacto:</a>
          </li>
          {/* <li>
            <span className={style.footer__contactIcon}>
              <FaEnvelope />
            </span>
            <a href="#"></a>
          </li>
          <li>
            <span className={style.footer__contactIcon}>
              <FaInstagram />
            </span>
            <a href="#"></a>
          </li>
          <li>
            <span className={style.footer__contactIcon}>
              <FaLinkedin />
            </span>
            <a href="#"></a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
