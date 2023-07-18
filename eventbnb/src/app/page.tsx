import Image from "next/image";
import { list } from "@/components/card/CardData";
import Cards from "@/components/card/Cards";
// import Filter from "./../components/filter/Filter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>
        <Filter />
      </div> */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Cards list={list} />
      </div>
    </main>
  );
}
