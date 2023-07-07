import React from "react";
import {list } from "@/components/card/CardData"
import Cards from "@/components/card/Cards";

export default function homePage() {
	return (
		<div className="w-full bg-white">
			<Cards list={list} />
		</div>
	);
}