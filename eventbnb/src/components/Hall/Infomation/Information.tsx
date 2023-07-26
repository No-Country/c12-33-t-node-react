import React from "react";
import Header from "./Header";
import MainServices from "./MainServices";
import AllServices from "./AllServices";
import Calendar from "./Calendar";

const Information = () => {
  return (
    <section>
      <Header />
      <MainServices />
      <p className="py-7 border-b">
        Nuestra casa frente a la playa cuenta con una cocina moderna con
        encimeras de cuarzo, pisos de cerámica, muebles modernos y
        electrodomésticos modernos. Esta casa cuenta con una amplia y acogedora
        zona de entretenimiento frente al mar y piscina con vistas al mar. Es
        limpio, seguro y tranquilo, ubicado justo dentro de la Zona Protegida de
        Tivives, el último reducto del bosque seco tropical existente en la
        Región del Pacífico Central de Costa Rica. ¡Nos encanta este lugar y a
        ti también te gustará!
      </p>
      <AllServices />
      <Calendar />
    </section>
  );
};

export default Information;
