import React from "react";
import { Information } from "@/components/Hall/Infomation";
import { ReservationForm } from "@/components/Hall/ReservationForm";
import { Images, Header, ImagesMovil, Reviews } from "@/components/Hall";
import { EventHallProvider } from "@/context/EventHallProvider";

function Page({ params }: { params: { hall: string } }) {
  console.log(params);

  return (
    <EventHallProvider>
      {/* images movil */}
      <ImagesMovil />
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="pt-0 md:pt-6 border-b">
          {/* <MainData /> */}
          <Header />
          {/* images web */}
          <Images />
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:flex-row">
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
      </div>
    </EventHallProvider>
  );
}

export default Page;
