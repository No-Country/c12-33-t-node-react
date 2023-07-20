"use client";
import React, { useContext } from "react";
import { Modal } from "../Modal";
import { IModalProvider, ModalContext } from "@/context/ModalProvider";

const ReviewsModal = () => {
  const { isOpen, close } = useContext(ModalContext) as IModalProvider;

  return (
    <Modal isOpen={isOpen} handleCloseModal={close}>
      <div>Hola Mundo</div>
    </Modal>
  );
};

export default ReviewsModal;
