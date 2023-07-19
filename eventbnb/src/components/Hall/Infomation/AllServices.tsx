import React from "react";
import { GiAtSea } from "react-icons/gi";

const AllServices = () => {
  return (
    <div className="py-7">
      <h6 className="font-medium text-xl pb-5">Lo que este lugar ofrece</h6>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Vista al Mar</p>
        </div>
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Vista al océano</p>
        </div>
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Acceso a la playa - Frente a la playa</p>
        </div>
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Cocina</p>
        </div>
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Wifi de 84 Mbps</p>
        </div>
        <div className="flex gap-3 items-center">
          <div style={{ maxWidth: "25px" }}>
            <GiAtSea size={25} />
          </div>
          <p>Estacionamiento gratis en las instalaciones: 4 puestos</p>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
