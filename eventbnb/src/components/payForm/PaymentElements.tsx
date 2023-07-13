import React from "react";
import { FaMedal, FaStar } from "react-icons/fa6";

export function CardInfo() {
	return (

		<div className="w-[415px] flex items-center justify-center pb-6 border-b">
			<img className="w-32 h-28 rounded-lg" src="https://a0.muscache.com/im/pictures/c1ea60ef-ec71-4158-a336-8f0aaf77af96.jpg?aki_policy=large" alt="" />

			<div className="pl-3 h-28 grid content-between">
				<div className="">
					<div>
						<p className="text-xs">Alojamiento Entero</p>
						<h5 className="text-sm">4 CUARTOS VILLA FRENTE A LA PLAYA - OPALO caserio de mar</h5>
					</div>
				</div>
				<div className="inline-flex items-center space-x-2">
					<p className="inline-flex items-center text-xs space-x-1">
						<FaStar/>
						<span>5.00</span>
						<span>(1 <span>Reseña</span>)</span>
					</p>
					<span className="text-lg font-semibold">.</span>
					<p className="inline-flex items-center text-xs space-x-1">
						<FaMedal/>
						<span>Superanfitrion</span>
					</p>
				</div>
			</div>
		</div>

	);
}

export function PriceInfo() {
	return (
		<div>
			<h2 className="py-6 text-2xl font-semibold">Información del precio</h2>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<p>S/1,381.56 x 5 noches</p>
					<span>S/6,907.8</span>
				</div>
				<div className="flex items-center justify-between">
					<p>Descuento por estadía semanal</p>
					<span className="text-green-600">-S/2,901.36</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline">Tarifa de limpieza</p>
					<span>S/327.21</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline">Tarifa por servicio de Festbnb</p>
					<span>S/1,021.41</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline">Impuestos</p>
					<span>S/723.50</span>
				</div>
				<hr className="border-gray-200" />
				<div className="flex items-center justify-between">
					<p className="font-semibold text-lg">Total (PEN)</p>
					<span className="font-semibold text-lg">S/8,979.92</span>
				</div>
			</div>
			
		</div>
	);
}

export function YourTrip() {
	return (
		<div className="w-[560px] space-y-4">
			<h2 className="text-2xl font-semibold">Tu Viaje</h2>
			<div className="">
				<div className="flex items-center justify-between">
				 	<p className="text-lg font-semibold">Fechas</p>
					<button className="text-lg font-semibold underline">Edita</button>
				</div>
				<span className="mt-2">21 - 26 de Jul</span>
			</div>
			<div className="">
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold">Huespedes</p>
					<button className="text-lg font-semibold underline">Edita</button>
				</div>
				<span className="mt-2">1 Huesped</span>
			</div>
		</div>
	);
}