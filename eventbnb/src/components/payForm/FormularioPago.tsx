"use client";
import React from "react";
import { AmericanExpress, Gpay, GpayCard, MasterCard, Visa } from "./PaymentElements";
import { GoCreditCard } from "react-icons/go";
import { FaAngleDown, FaCheck, FaLock } from "react-icons/fa6";
import { PiWarningCircleLight } from "react-icons/pi";


//Formulario de pago
export default function PayForm() {
	const [openDropdownCard, setOpenDropdownCard] = React.useState(false);
	const [selectedItem, setSelectedItem] = React.useState('Tarjeta de crédito o débito');

	const handleOpenDropdown = () => {
		setOpenDropdownCard(!openDropdownCard);
	};

	const handleSelectItem = (item) => {
		setSelectedItem(item);
		setOpenDropdownCard(false);
	};

	return (
		<div className="pt-8 pb-6 border-t">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-2xl font-semibold">Paga con</h2>
				</div>
				<div className="flex items-center justify-between space-x-1.5">
					<span className="h-2 w-7">
						<Visa />
					</span>
					<span className="h-2 w-9">
						<AmericanExpress />
					</span>
					<span className="h-2 w-4">
						<MasterCard />
					</span>
					<span className="h-2 w-6">
						<Gpay />
					</span>
				</div>
			</div>
			<div>
				<div className="w-full">
					<button
						onClick={handleOpenDropdown}
						className="p-4 flex items-center border rounded-lg w-full"
						type="button"
					>
						{selectedItem && (
							<>
								<span className="w-12">
									{selectedItem === 'Tarjeta de crédito o débito' ? (
										<GoCreditCard size={33} className="text-neutral-400" />
									) : (
										<div className="w-12">
											<div className="w-[33px]">
												<GpayCard />
											</div>
										</div>
									)}
								</span>
								<span className="w-full text-lg text-start text-neutral-600">{selectedItem}</span>
							</>
						)}
						<span className="w-6 text-neutral-600">
							<FaAngleDown size={24} className={openDropdownCard ? 'rotate-180' : ''} />
						</span>
					</button>
					{openDropdownCard && (
						<div className="mt-2 z-50 absolute bg-white border rounded-lg shadow w-full max-w-[553px]">
							<ul>
								<li
									className="w-full p-4 flex items-center hover:bg-gray-100 cursor-pointer"
									onClick={() => handleSelectItem('Tarjeta de crédito o débito')}
								>
									<span className="w-12">
										<GoCreditCard size={33} className="text-neutral-400" />
									</span>
									<span className="w-full text-lg text-start text-neutral-600">Tarjeta de crédito o débito</span>
									<span className="w-6 text-neutral-600">
										{selectedItem === 'Tarjeta de crédito o débito' && <FaCheck size={24} />}
									</span>
								</li>
								<li
									className="w-full p-4 flex items-center hover:bg-gray-100 cursor-pointer"
									onClick={() => handleSelectItem('Google Pay')}
								>
									<div className="w-12">
										<div className="w-[33px]">
											<GpayCard />
										</div>
									</div>
									<span className="w-full text-lg text-start text-neutral-600">Google Pay</span>
									<span className="w-6 text-neutral-600">
										{selectedItem === 'Google Pay' && <FaCheck size={24} />}
									</span>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div>
					<div className="mt-4 border rounded-lg">
						<div className="relative">
							<input type="text" id="cardNumber" className="block p-4 w-full appearance-none peer" placeholder=" " />
							<label htmlFor="cardNumber" className="absolute text-lg text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								<div className="flex items-center justify-center space-x-1">
									<span>Número de tarjeta</span><FaLock size={14} />
								</div>
							</label>
						</div>
						<hr />
						<div className="flex">
							<div className="w-1/2 relative border-r">
								<input type="text" id="cardExpiration" className="block p-4 w-full appearance-none peer" placeholder=" " />
								<label htmlFor="cardExpiration" className="absolute text-lg text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
									Caducidad
								</label>
							</div>

							<div className="w-1/2 relative">
								<input type="text" id="cardCode" className="block p-4 w-full appearance-none peer" placeholder=" " />
								<label htmlFor="cardCode" className="absolute text-lg text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
									Codigo CVV
								</label>
							</div>
						</div>
					</div>
					<div className="text-red-600 flex items-center mt-2 space-x-1">
						<PiWarningCircleLight />
						<span>Comprueba el número de tu tarjeta</span>
					</div>
				</div>

			</div>
		</div>
	);
}