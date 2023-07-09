"use client";
import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <section className="grid grid-cols-4 gap-3">
      <img
        className="object-cover col-span-2 row-span-2 w-full h-full rounded-l-xl"
        src="https://a0.muscache.com/im/pictures/6d84db0f-b13f-4ad7-bd42-7be07bf07a54.jpg?im_w=1200"
        alt=""
      />
      <img
        className="object-cover w-full h-full"
        src="https://a0.muscache.com/im/pictures/07e3ffff-1de3-49ab-a532-027677e4d0cf.jpg?im_w=720"
        alt=""
      />
      <img
        className="object-cover w-full h-full rounded-tr-xl"
        src="https://a0.muscache.com/im/pictures/e8bce1ea-3e3b-482b-8035-b4945bf54992.jpg?im_w=720"
        alt=""
      />
      <img
        className="object-cover w-full h-full"
        src="https://a0.muscache.com/im/pictures/f427b16f-1871-4776-b64a-614bdfea9836.jpg?im_w=720"
        alt=""
      />
      <img
        className="object-cover w-full h-full rounded-br-xl"
        src="https://a0.muscache.com/im/pictures/6d84db0f-b13f-4ad7-bd42-7be07bf07a54.jpg?im_w=1200"
        alt=""
      />
    </section>
  );
};

export default Images;
