import React from "react";

import { EventHallProvider } from "@/context/EventHallProvider";
import { ModalProvider } from "@/context/ModalProvider";

import { Information } from "@/components/Hall/Infomation";
import { ReservationForm } from "@/components/Hall/ReservationForm";
import {
  Images,
  Header,
  ImagesMovil,
  Reviews,
  ReviewsModal,
} from "@/components/Hall";
import { WindowSizeProvider } from "@/context/WindowSizeProvider";

function Page({ params }: { params: { hall: string } }) {
  // console.log(params);

  return (
    <EventHallProvider id={params.hall}>
      <WindowSizeProvider>
        {/* images movil */}
        <ImagesMovil />
        <div
          className="container max-w-screen-xl mx-auto px-4"
          id="page-event-hall"
        >
          <ModalProvider>
            <div className="pt-0 md:pt-6 border-b">
              {/* <MainData /> */}
              <Header />
              {/* images web */}
              <Images />
              <div className="flex flex-wrap md:flex-nowrap gap-2 md:flex-row relative">
                <div className="md:basis-8/12">
                  <div className="md:pr-16">
                    <Information />
                  </div>
                </div>
                <div className="md:basis-4/12 w-full pb-10 sm:px-5 md:px-0">
                  <ReservationForm />
                </div>
              </div>
            </div>
            <div className="py-10">
              <Reviews />
            </div>
            {/* Modal */}
            <ReviewsModal />
          </ModalProvider>
        </div>
      </WindowSizeProvider>
    </EventHallProvider>
  );
}

export default Page;
