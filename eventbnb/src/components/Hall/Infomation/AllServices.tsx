import React from "react";
import { GiAtSea } from "react-icons/gi";

const AllServices = () => {
  return (
    <div className="py-7">
      <h6 className="font-medium text-xl pb-5">Lo que este lugar ofrece</h6>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Vista al Mar</p>
        </div>
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Vista al océano</p>
        </div>
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Acceso a la playa - Frente a la playa</p>
        </div>
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Cocina</p>
        </div>
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Wifi de 84 Mbps</p>
        </div>
        <div className="flex gap-3 items-center">
          <GiAtSea size={25} />
          <p>Estacionamiento gratis en las instalaciones: 4 puestos</p>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
