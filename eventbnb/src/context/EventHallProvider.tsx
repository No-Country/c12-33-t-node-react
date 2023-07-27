"use client";
import { IEventHall } from "@/interfaces/event-hall.interface";
import EventHallService from "@/services/event-hall.service";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import servicesData, {
  IServicesData,
} from "@/components/Hall/Infomation/servicesData";

// interface
export interface IEventHallProvider {
  eventHall: IEventHall | null;
  services: IServicesData[] | null;
  disabled: Boolean;
  setDisabled: (disabled: Boolean) => Dispatch<SetStateAction<Boolean>>;
  getEventHall: () => Promise<void>;
  formattedDateReservation: string;
  setFormattedDateReservation: (disabled: string) => Dispatch<SetStateAction<Boolean>>;

}

interface IProps {
  children: React.ReactNode;
  id: string;
}

// creacion contexto
export const EventHallContext = createContext<IEventHallProvider | null>(null);

export const EventHallProvider = ({ children, id }: IProps) => {
  const [eventHall, setEventHall] = useState<IEventHall | null>(null);
  const [services, setServices] = useState<IServicesData[] | null>(null);
  const [disabled, setDisabled] = useState<Boolean>(true)
  const [formattedDateReservation, setFormattedDateReservation] = useState<string>('')
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

  const getServices = async () => {
    let services: IServicesData[] = servicesData.filter((service) => {
      if (
        eventHall?.baño_accesibilidad &&
        service.type === "baño_accesibilidad"
      ) {
        return true;
      } else if (eventHall?.accesibilidad && service.type === "accesibilidad") {
        return true;
      } else if (
        eventHall?.estacionamiento &&
        service.type === "estacionamiento"
      ) {
        return true;
      } else if (eventHall?.catering && service.type === "catering") {
        return true;
      } else if (eventHall?.mesas_sillas && service.type === "mesas_sillas") {
        return true;
      } else if (eventHall?.luces && service.type === "luces") {
        return true;
      } else if (eventHall?.sonido && service.type === "sonido") {
        return true;
      } else if (eventHall?.fotografia && service.type === "fotografia") {
        return true;
      } else if (eventHall?.decoracion && service.type === "decoracion") {
        return true;
      } else if (eventHall?.pileta && service.type === "pileta") {
        return true;
      } else if (eventHall?.wifi && service.type === "wifi") {
        return true;
      } else if (eventHall?.cocina && service.type === "cocina") {
        return true;
      } else if (eventHall?.escenario && service.type === "escenario") {
        return true;
      }
      return false;
    });

    setServices(services);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    eventHall && getServices();
  }, [eventHall]);

  return (
    <EventHallContext.Provider
      value={{ eventHall, services, disabled, setDisabled, formattedDateReservation, setFormattedDateReservation, getData }}
    >
      {children}
    </EventHallContext.Provider>
  );
};
