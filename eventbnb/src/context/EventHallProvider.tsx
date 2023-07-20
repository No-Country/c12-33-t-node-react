"use client";
import { createContext, useEffect, useState } from "react";

// interface
export interface IEventHall {
  windowWidth: number;
}

// creacion contexto
export const EventHallContext = createContext<IEventHall | null>(null);

export const EventHallProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // listener de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    //eliminar el listener de la función
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <EventHallContext.Provider value={{ windowWidth }}>
      {children}
    </EventHallContext.Provider>
  );
};
