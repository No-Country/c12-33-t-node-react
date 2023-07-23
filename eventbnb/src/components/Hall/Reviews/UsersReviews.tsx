import React from "react";
import UserReview from "./UserReview";

const UsersReviews = () => {
  return (
    <div className="flex snap-x w-full sm:grid lg:grid-cols-2 gap-4 overflow-x-auto py-5 lg:py-0">
      {[1, 2, 3].map((item) => (
        <div
          className="scroll-ml-6 snap-start overflow-x-auto shrink-0 lg:pr-24 w-4/5 sm:w-full border-2 sm:border-0 rounded-lg p-4 sm:pl-0 sm:pt-0 sm:pb-6"
          key={item}
        >
          <UserReview />
        </div>
      ))}
    </div>
  );
};

export default UsersReviews;
