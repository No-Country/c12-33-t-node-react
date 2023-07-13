'use client'
import React, { useState } from 'react';
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Card({ card }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleButtonClick = () => {
		setIsFavorite(!isFavorite);
	};
	return (
		<div className="max-w-[300px] rounded-t-xl bg-white">
			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					className="absolute z-0 rounded-xl w-[300px] h-[285px]  hidden"
				>
					{card.imgSrc.map((src, i) => (
						<SwiperSlide key={i}>
							<img src={src} className="w-[300px] h-[285px] object-cover" />
						</SwiperSlide>
					))}
				</Swiper>
				<button className="absolute z-10 top-3 right-3 flex items-center justify-center" onClick={handleButtonClick}>
					<FaHeart className={`text-xl  ${isFavorite ? 'text-pink-600' : 'text-black opacity-50'}`} />
					<FaRegHeart className="text-2xl text-white absolute" />

				</button>
				{card.imgProfile ? (
					<img className="rounded-full w-10 h-10 object-cover absolute z-10 bottom-3 left-3" src={card.imgProfile} />
				) : null}
			</div>
			<div className="flex flex-row justify-between items-start mt-4">
				<div>
					{card.name ? (
					<p className="text-base text-black font-bold">{card.name}</p>
					) : null}
					<p className="text-sm text-black font-bold">
						{card.city ? card.city : card.country ? card.country : null}
						{card.city && card.country ? `, ${card.country}` : null}
					</p>
					{card.location ? (
					<p className="text-sm text-slate-600">{card.location}</p>
					) : null}
					<p className="text-sm text-slate-600">{`${card.startDate} - ${card.endDate} de ${card.month}`}</p>
					<p className="text-sm text-black mt-2"> <strong>{`S/${card.price}`}</strong> noche</p>
				</div>
				{card.rating ? (
					<div className="flex items-center justify-center space-x-1 text-black">
						<FaStar className='text-base'/>
						<p className="text-sm">{card.rating}</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
