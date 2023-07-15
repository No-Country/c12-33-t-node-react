import Image from "next/image";
import React from "react";
import { FaMedal, FaStar } from "react-icons/fa6";

export function CardInfo() {
	return (
		<div className="w-[415px] flex items-center justify-center pb-6 border-b">
			<Image width={128} height={112} className="w-32 h-28 rounded-lg" src="https://a0.muscache.com/im/pictures/c1ea60ef-ec71-4158-a336-8f0aaf77af96.jpg?aki_policy=large" alt="" />

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
		<div className="w-[560px]">
			<h2 className="text-2xl font-semibold pb-6">Tu Viaje</h2>
			<div className="pb-6">
				<div className="flex items-center justify-between">
				 	<p className="text-lg font-semibold">Fechas</p>
					<button className="text-lg font-semibold underline">Edita</button>
				</div>
				<span className="mt-2">21 - 26 de Jul</span>
			</div>
			<div className="pb-6">
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold">Huespedes</p>
					<button className="text-lg font-semibold underline">Edita</button>
				</div>
				<span className="mt-2">1 Huesped</span>
			</div>
		</div>
	);
}


// Payment Logos
export function Visa() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 9">
			<path
				fill="#122D98"
				fillRule="evenodd"
				d="M20.839 6.026c.006-1.375-1.133-1.973-2.044-2.45-.611-.322-1.119-.589-1.111-1 .007-.313.305-.646.955-.73a4.249 4.249 0 012.221.387l.396-1.846A6.051 6.051 0 0019.149 0c-2.226 0-3.792 1.183-3.807 2.877-.014 1.253 1.119 1.953 1.972 2.37.878.426 1.172.7 1.169 1.082 0 .585-.701.841-1.348.852-1.099.016-1.75-.288-2.267-.529l-.046-.021-.407 1.907c.526.241 1.498.452 2.504.462 2.367 0 3.914-1.169 3.922-2.978l-.002.004zM11.51.163L7.861 8.869H5.48L3.684 1.92c-.11-.428-.204-.584-.536-.765C2.608.861 1.714.586.926.415l.053-.26h3.833a1.048 1.048 0 011.032.888l.948 5.032L9.135.151l2.375.012zM28.8 8.86h-2.082l-.272-1.294h-2.889l-.47 1.301h-2.365L24.101.8a1.03 1.03 0 01.959-.645h1.922L28.8 8.86zm-4.594-3.084l1.186-3.268.676 3.276-1.862-.008zM12.869 8.861L14.731.155h-2.255L10.613 8.86h2.256z"
			></path>
		</svg>
	);
}

export function AmericanExpress() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 9">
			<path
				fill="#2478BC"
				d="M4.499 0L.437 8.988h4.862l.603-1.433H7.28l.603 1.433h5.352V7.895l.477 1.093h2.768l.477-1.116v1.116h11.131l1.354-1.395 1.267 1.395L36.426 9l-4.074-4.48L36.426 0h-5.628L29.48 1.37 28.253 0H16.144l-1.04 2.32L14.04 0H9.187v1.057L8.648 0H4.499zm.94 1.276H7.81l2.694 6.096V1.276H13.1l2.081 4.37 1.918-4.37h2.583v6.45H18.11l-.012-5.054-2.292 5.054H14.4l-2.305-5.054v5.054H8.861L8.248 6.28H4.936l-.612 1.445H2.591l2.848-6.449zm15.682 0h6.392l1.955 2.112 2.018-2.112h1.955L30.47 4.518l2.971 3.204h-2.044l-1.955-2.136-2.028 2.136h-6.293V1.276zM6.592 2.368L5.501 4.944h2.181l-1.09-2.576zm16.107.244v1.177h3.487v1.312h-3.487v1.286h3.911l1.818-1.893-1.741-1.883h-3.988z"
			></path>
		</svg>
	);
}

export function MasterCard() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12">
			<g fill="none">
				<path
					fill="#F26122"
					d="M6.71 1.283h5.678v9.433H6.71z"
					transform="translate(.555)"
				></path>
				<path
					fill="#EA1D25"
					d="M9.524 10.717A5.789 5.789 0 015.891 12a5.943 5.943 0 01-5.89-6 5.944 5.944 0 015.89-6c1.322 0 2.604.453 3.633 1.283a6.081 6.081 0 000 9.434z"
					transform="translate(.555)"
				></path>
				<path
					fill="#F69E1E"
					d="M19.064 6a5.944 5.944 0 01-5.89 6 5.79 5.79 0 01-3.634-1.283 6.082 6.082 0 000-9.434A5.789 5.789 0 0113.173 0a5.943 5.943 0 015.891 6z"
					transform="translate(.555)"
				></path>
			</g>
		</svg>
	);
}

export function Gpay() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 12">
			<g fill="none" fillRule="evenodd">
				<path
					fill="#3C4043"
					fillRule="nonzero"
					d="M13.624 5.865v3.522h-1.1V.694h2.918a2.594 2.594 0 011.886.755A2.535 2.535 0 0117.451 5l-.123.124c-.513.493-1.141.742-1.886.742h-1.818zm0-4.104v3.037h1.845a1.43 1.43 0 001.087-.451 1.546 1.546 0 00-.034-2.156 1.493 1.493 0 00-1.053-.43h-1.845zm7.032 1.483c.813 0 1.456.222 1.927.659.472.436.704 1.046.704 1.816v3.667h-1.052V8.56h-.048c-.458.68-1.059 1.019-1.818 1.019-.642 0-1.189-.194-1.619-.582a1.852 1.852 0 01-.65-1.456c0-.617.233-1.102.691-1.47.457-.367 1.072-.547 1.838-.547.656 0 1.189.125 1.613.36V5.63a1.31 1.31 0 00-.451-.991 1.588 1.588 0 00-1.06-.41c-.615 0-1.1.264-1.455.79l-.971-.616c.52-.77 1.306-1.158 2.351-1.158zm-1.421 4.319c0 .29.136.561.362.728.246.194.547.298.854.29a1.73 1.73 0 001.237-.52c.362-.346.547-.755.547-1.226-.342-.277-.82-.416-1.435-.41-.444 0-.82.112-1.121.327-.294.215-.444.485-.444.81z"
					transform="translate(.403)"
				></path>
				<path
					fill="#3C4043"
					d="M29.328 3.439L25.651 12h-1.134l1.366-2.995-2.412-5.566h1.196l1.743 4.27h.02l1.702-4.27z"
					transform="translate(.403)"
				></path>
				<path
					fill="#4285F4"
					d="M9.644 5.102c0-.34-.027-.679-.082-1.012h-4.64v1.92H7.58a2.314 2.314 0 01-.984 1.519v1.247h1.586c.929-.866 1.462-2.149 1.462-3.674z"
					transform="translate(.403)"
				></path>
				<path
					fill="#34A853"
					d="M4.922 9.983c1.325 0 2.446-.444 3.259-1.206L6.596 7.529c-.444.305-1.012.478-1.674.478-1.285 0-2.372-.88-2.761-2.059H.527v1.29a4.91 4.91 0 004.395 2.745z"
					transform="translate(.403)"
				></path>
				<path
					fill="#FBBC04"
					d="M2.161 5.948a3.053 3.053 0 010-1.913V2.752H.528a5.011 5.011 0 000 4.479l1.633-1.283z"
					transform="translate(.403)"
				></path>
				<path
					fill="#EA4335"
					d="M4.922 1.976a2.63 2.63 0 011.886.749l1.407-1.428A4.71 4.71 0 004.922 0 4.916 4.916 0 00.527 2.752l1.634 1.29c.389-1.186 1.476-2.066 2.761-2.066z"
					transform="translate(.403)"
				></path>
			</g>
		</svg>
	);
}

export function GpayCard() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 44 32"
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill="#3C4043"
					fillRule="nonzero"
					d="M21.2 15.58v4.54h-1.42V8.9h3.77a3.35 3.35 0 012.44.97 3.27 3.27 0 01.16 4.59l-.16.16c-.66.63-1.48.96-2.44.96H21.2zm0-5.3v3.92h2.39a1.84 1.84 0 001.4-.58 2 2 0 00-.04-2.79 1.92 1.92 0 00-1.36-.56H21.2zm9.09 1.91c1.05 0 1.88.29 2.49.85.6.57.9 1.35.9 2.35v4.73h-1.35v-1.06h-.07a2.7 2.7 0 01-2.34 1.32c-.83 0-1.54-.25-2.1-.76a2.39 2.39 0 01-.83-1.88c0-.8.3-1.42.89-1.9a3.7 3.7 0 012.37-.7c.85 0 1.54.16 2.09.46v-.33c0-.49-.22-.96-.59-1.28a2.05 2.05 0 00-1.37-.53c-.79 0-1.42.34-1.88 1.02l-1.25-.8c.67-.99 1.69-1.49 3.04-1.49zm-1.84 5.58c0 .38.18.73.47.94.32.25.7.39 1.1.38.6 0 1.18-.25 1.6-.68.47-.44.7-.97.7-1.58a2.81 2.81 0 00-1.85-.53c-.57 0-1.06.14-1.44.42-.39.28-.58.63-.58 1.05z"
				></path>
				<path
					fill="#3C4043"
					d="M41.49 12.44L36.74 23.5h-1.47l1.77-3.87-3.12-7.19h1.55l2.25 5.52h.03l2.2-5.52z"
				></path>
				<path
					fill="#4285F4"
					d="M15.46 14.59c0-.44-.04-.88-.1-1.3h-6v2.47h3.43a2.99 2.99 0 01-1.27 1.97v1.6h2.05a6.33 6.33 0 001.89-4.74z"
				></path>
				<path
					fill="#34A853"
					d="M9.36 20.9c1.71 0 3.16-.58 4.2-1.56l-2.04-1.62a3.81 3.81 0 01-5.73-2.04H3.7v1.67a6.34 6.34 0 005.67 3.54z"
				></path>
				<path
					fill="#FBBC04"
					d="M5.8 15.68a3.94 3.94 0 010-2.47v-1.66H3.67a6.47 6.47 0 000 5.79l2.11-1.66z"
				></path>
				<path
					fill="#EA4335"
					d="M9.36 10.55a3.4 3.4 0 012.43.97l1.82-1.84A6.09 6.09 0 009.36 8c-2.4 0-4.6 1.38-5.68 3.56l2.11 1.66a3.8 3.8 0 013.57-2.67z"
				></path>
				<path
					fill="#B0B0B0"
					d="M2.04 1C1.47 1 1 1.47 1 2.05v27.9c0 .58.47 1.05 1.04 1.05h39.92c.57 0 1.04-.47 1.04-1.05V2.05C43 1.47 42.53 1 41.96 1H2.04zM0 2.05C0 .92.9 0 2.04 0h39.92C43.1 0 44 .92 44 2.05v27.9c0 1.13-.9 2.05-2.04 2.05H2.04A2.04 2.04 0 010 29.95V2.05z"
				></path>
			</g>
		</svg>
	);
}