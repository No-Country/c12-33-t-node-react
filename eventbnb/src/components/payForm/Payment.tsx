import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import {CardInfo, PriceInfo, YourTrip} from "./PaymentElements";

export default function Payment() {
	return (
		<div className="flex items-center justify-center mx-auto p-2 container">
			<div className="flex flex-col items-center w-full">
				<div className="w-full flex items-center justify-start pt-16 pb-4">
					<div className="w-14 left-0">
						<Link href="/" className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-slate-200">
							<FaAngleLeft text-size={30} color="#000" />
						</Link>
					</div>
					<div className="w-full flex items-center justify-center md:justify-start">
						<h2 className="text-center text-xl md:text-3xl font-bold">Solicita reservar</h2>
					</div>
				</div>
				<div className="flex space-x-20">
					<div className="w-1/2">
						<div>
							<YourTrip />
						</div>
					</div>
					<div className="w-1/2">
						<div className="p-6 border rounded-lg sticky top-20">
							<CardInfo />
							<PriceInfo />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}