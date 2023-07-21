import React from "react";

import { FaStar } from "react-icons/fa";
import Scores from "./Scores";
import UsersReviews from "./UsersReviews";

const Reviews = () => {
  return (
    <section>
      {/* cabecera */}
      <div className="flex flex-wrap gap-1.5 items-center font-medium text-xl mb-8">
        <span className="flex items-center">
          <FaStar size={16} /> <span className="inline-block ml-1">4.83</span>
        </span>
        ·<span className="flex items-center">35 reseñas</span>
      </div>
      {/* puntaje */}
      <Scores />
      {/* reseñas */}
      <UsersReviews />
    </section>
  );
};

export default Reviews;
