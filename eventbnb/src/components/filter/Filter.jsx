"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./Filter.module.css";
import {
  FaUserFriends,
  FaExpand,
  FaDollarSign,
  FaParking,
  FaWheelchair,
  FaDog,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

SwiperCore.use([Navigation]);

export default function Filter() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div
      className={`justify-center items-center text-3xl text-gray-500 ${style.filterContainer}`}
    >
      <Swiper
        slidesPerView={4}
        navigation={{
          prevEl: `.${style.btnPrev}`,
          nextEl: `.${style.btnNext}`,
        }}
        className={`w-96 ${style.swiperContainer}`}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
            width: 500,
          },
        }}
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaUserFriends className="mb-1" />
            <p className="text-xs">Capacidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaExpand className="mb-1" /> {/* Icono de metros cuadrados */}
            <p className="text-xs">Metros2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaDollarSign className="mb-1" /> {/* Icono de precio */}
            <p className="text-xs">Precio</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaParking className="mb-1" /> {/* Icono de estacionamiento */}
            <p className="text-xs">Estacionamiento</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaWheelchair className="mb-1" /> {/* Icono de accesibilidad */}
            <p className="text-xs">Accesibilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaDog className="mb-1" /> {/* Icono de mascotas */}
            <p className="text-xs">Mascotas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="mb-1" /> {/* Icono de disponibilidad */}
            <p className="text-xs">Disponibilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <FaStar className="mb-1" /> {/* Icono de puntuación */}
            <p className="text-xs">Puntuación</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className="absolute left-9 top-10 transform -translate-y-1/2"
        style={{ marginTop: "130px", marginLeft: "25%" }}
      >
        <button
          className={`l1ovpqvx cbqov2r atm_1s_glywfm atm_5j_1ssbidh atm_kd_idpfg4 atm_7l_1u9drld atm_9j_tlke0l atm_tl_1gw4zv3 atm_3f_1kgecm9 atm_gi_idpfg4 atm_l8_idpfg4 atm_2a_1u8qnfj atm_2d_1hbpp16 atm_9s_116y0ak atm_vy_1f4h9lt atm_e2_1f4h9lt atm_h_1h6ojuz atm_fc_1h6ojuz atm_uc_x37zl0 atm_mj_1rj4a2z atm_k4-1o5j5ji_1piyxwk atm_9j-1o5j5ji_13gfvf7 atm_7l-1o5j5ji_jajhky atm_3f--xmuf69_1rqy8sm atm_kd-1w3cfyq_glywfm atm_uc-1w3cfyq_x37zl0 atm_70-1w3cfyq_1ys03np atm_3f-e4a3ld_glywfm atm_l8-e4a3ld_idpfg4 atm_gi-e4a3ld_idpfg4 atm_3f-1r4qscq_glywfm atm_kd-6y7yyg_glywfm atm_uc-1w3cfyq-p88qr9_glywfm atm_kd-18zk5v0_glywfm atm_uc-18zk5v0_x37zl0 atm_70-18zk5v0_1ys03np atm_3f-6mgo84_glywfm atm_l8-6mgo84_idpfg4 atm_gi-6mgo84_idpfg4 atm_3f-16p4kaz_glywfm atm_kd-17yx6rv_glywfm atm_uc-18zk5v0-p88qr9_glywfm atm_70-1nos8r-uv4tnr_k3iuej atm_tr-1nos8r-uv4tnr_m1zi52 dir dir-ltr ${style.btnPrev}`}
          onClick={handlePrev}
        />
      </div>
      <div
        className="absolute right-9 top-10 transform -translate-y-1/2"
        style={{
          marginTop: "130px",
          marginRight: "30%",
        }}
      >
        <button
          className={`l1ovpqvx cbqov2r atm_1s_glywfm atm_5j_1ssbidh atm_kd_idpfg4 atm_7l_1u9drld atm_9j_tlke0l atm_tl_1gw4zv3 atm_3f_1kgecm9 atm_gi_idpfg4 atm_l8_idpfg4 atm_2a_1u8qnfj atm_2d_1hbpp16 atm_9s_116y0ak atm_vy_1f4h9lt atm_e2_1f4h9lt atm_h_1h6ojuz atm_fc_1h6ojuz atm_uc_x37zl0 atm_mj_1rj4a2z atm_k4-1o5j5ji_1piyxwk atm_9j-1o5j5ji_13gfvf7 atm_7l-1o5j5ji_jajhky atm_3f--xmuf69_1rqy8sm atm_kd-1w3cfyq_glywfm atm_uc-1w3cfyq_x37zl0 atm_70-1w3cfyq_1ys03np atm_3f-e4a3ld_glywfm atm_l8-e4a3ld_idpfg4 atm_gi-e4a3ld_idpfg4 atm_3f-1r4qscq_glywfm atm_kd-6y7yyg_glywfm atm_uc-1w3cfyq-p88qr9_glywfm atm_kd-18zk5v0_glywfm atm_uc-18zk5v0_x37zl0 atm_70-18zk5v0_1ys03np atm_3f-6mgo84_glywfm atm_l8-6mgo84_idpfg4 atm_gi-6mgo84_idpfg4 atm_3f-16p4kaz_glywfm atm_kd-17yx6rv_glywfm atm_uc-18zk5v0-p88qr9_glywfm atm_70-1nos8r-uv4tnr_k3iuej atm_tr-1nos8r-uv4tnr_m1zi52 dir dir-ltr ${style.btnNext}`}
          onClick={handleNext}
        />
      </div>
      <div className={`flex flex-col items-center ${style.filterButton}`}>
        <button className={`text-sm ${style.filterButton1}`}>Filtros</button>
      </div>
    </div>
  );
}
