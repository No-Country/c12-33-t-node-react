import React from "react";
import { Header, Images } from "@/components/Hall";
import { Information } from "@/components/Hall/Infomation";
import { ReservationForm } from "@/components/Hall/ReservationForm";

function Page({ params }: { params: { hall: string } }) {
  console.log(params);

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      {/* <p>page hall {params.hall}</p> */}
      <div className="pt-6">
        <Header />
        <div className="pt-5">
          <Images />
        </div>
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
    </div>
  );
}

export default Page;
