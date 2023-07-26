"use client";
import { useEffect, useState } from "react";
// import { list } from "@/components/card/CardData";
import UsersContext from "@/context/UserProvider";
import { useContext } from "react";
import Cards from "@/components/card/Cards";
import Filter from "@/components/filter/filterSlide/Filter";
import Card from "@/components/card/CardItem";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_MICROSERVICIOS;

export default function Home() {
  const { list, setList } = useContext(UsersContext);

  // const [data, setData] = useState([]);

  // async function getSalones() {
  //   const { data } = await axios(`${url}/salones`);
  //   const list = data;
  //   console.log(list);
  //   setData(list.data);
  // }

  // useEffect(() => {
  //   getSalones();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filter list={list} setList={setList} />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Cards list={list} />
      </div>
    </main>
  );
}

//RESPALDO
// import Image from "next/image";
// import { list } from "@/components/card/CardData";
// import Cards from "@/components/card/Cards";
// import Filter from "@/components/filter/filterSlide/Filter";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Filter list={list} />
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <Cards list={list} />
//       </div>
//     </main>
//   );
// }
