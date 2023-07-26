"use client";
import { IEventHall } from "@/interfaces/event-hall.interface";
import EventHallService from "@/services/event-hall.service";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// interface
export interface IEventHallProvider {
  eventHall: IEventHall | null;
  getEventHall: () => Promise<void>;
}

interface IProps {
  children: React.ReactNode;
  id: string;
}

// creacion contexto
export const EventHallContext = createContext<IEventHallProvider | null>(null);

export const EventHallProvider = ({ children, id }: IProps) => {
  const [eventHall, setEventHall] = useState<IEventHall | null>(null);
  const router = useRouter();

  const getData = async () => {
    let data: IEventHall | null = null;

    try {
      data = await EventHallService.getById(id);
    } catch (error) {
      console.log(error);
    }

    if (!data) router.push("/404");
    setEventHall(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <EventHallContext.Provider value={{ eventHall, getEventHall: getData }}>
      {children}
    </EventHallContext.Provider>
  );
};
