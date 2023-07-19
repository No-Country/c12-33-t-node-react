import React from "react";
import { HiWifi } from "react-icons/hi";
import { BsDoorClosed } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";

const MainServices = () => {
  return (
    <div className=" flex flex-col py-7 border-b gap-4">
      <div className="flex gap-3 items-center">
        <div style={{ maxWidth: "25px" }}>
          <HiWifi size={25} />
        </div>
        <div>
          <h6 className="font-medium pb-1">Wifi rápido</h6>
          <p className="text-sm text-gray-500">
            Con 84 Mbps, puedes tomar videollamadas y transmitir videos para
            todo el grupo.
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div style={{ maxWidth: "25px" }}>
        <BsDoorClosed size={25} />
        </div>
        <div>
          <h6 className="font-medium pb-1">Llegada autónoma</h6>
          <p className="text-sm text-gray-500">
            Realiza tu llegada fácilmente mediante la caja de seguridad para
            llaves.
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div style={{ maxWidth: "25px" }}>
        <BsCalendar3 size={25} />
        </div>
        <div>
          <h6 className="font-medium pb-1">
            Cancelación gratuita por 48 horas.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
