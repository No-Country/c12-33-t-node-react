"use client";
import React, { useContext } from "react";
import { Modal } from "../../Modal";
import { IModalProvider, ModalContext } from "@/context/ModalProvider";
import { FaStar } from "react-icons/fa";
import Scores from "./Scores";
import UsersReviews from "./UsersReviews";

const ReviewsModal = () => {
  const { isOpen, close } = useContext(ModalContext) as IModalProvider;

  return (
    <Modal isOpen={isOpen} handleCloseModal={close}>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:basis-5/12 md:pr-6 lg:pr-20">
          <div className="sticky top-0">
            {/* cabecera */}
            <div className="flex flex-wrap gap-2 items-center font-bold text-3xl mb-8 md:text-2xl lg:text-3xl">
              <span className="flex items-center gap-1">
                <FaStar size={25} />{" "}
                <span className="inline-block ml-1">4.83</span>
              </span>
              ·<span className="flex items-center">35 reseñas</span>
            </div>
            {/* score */}
            <Scores />
          </div>
        </div>
        <div className="md:basis-7/12">
          <UsersReviews />
        </div>
      </div>
    </Modal>
  );
};

export default ReviewsModal;
