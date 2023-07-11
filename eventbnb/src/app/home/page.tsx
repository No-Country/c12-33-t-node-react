import React from "react";
import { list } from "@/components/card/CardData";
import Cards from "@/components/card/Cards";

export default function homePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Cards list={list} />
      </div>
    </main>
  );
}