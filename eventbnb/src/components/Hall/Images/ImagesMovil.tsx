"use client";
import { EventHallContext, IEventHall } from "@/context/EventHallProvider";
import React, { useContext } from "react";

const ImagesMovil = () => {
  const { windowWidth } = useContext(EventHallContext) as IEventHall;

  if (windowWidth >= 768) return null;

  return (
    <div>
      <img
        className="object-cover w-full h-full"
        src="https://a0.muscache.com/im/pictures/6d84db0f-b13f-4ad7-bd42-7be07bf07a54.jpg?im_w=1200"
        alt=""
      />
    </div>
  );
};

export default ImagesMovil;
