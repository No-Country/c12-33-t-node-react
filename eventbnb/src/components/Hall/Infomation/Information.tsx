"use client";
import React, { useContext } from "react";
import Header from "./Header";
import MainServices from "./MainServices";
import AllServices from "./AllServices";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";

const Information = () => {
  const { eventHall } = useContext(EventHallContext) as IEventHallProvider;

  if (!eventHall) return null;

  return (
    <section>
      <Header eventHall={eventHall} />
      <MainServices />
      <p className="py-7 border-b">{eventHall.descripcion}</p>
      <AllServices />
    </section>
  );
};

export default Information;
