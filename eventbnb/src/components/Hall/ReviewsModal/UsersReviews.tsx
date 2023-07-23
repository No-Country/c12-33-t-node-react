import React from "react";
import UserReview from "../Reviews/UserReview";

const UsersReviews = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="w-full py-4 px-2 md:p-4" key={item}>
          <UserReview inModal={true} />
        </div>
      ))}
    </div>
  );
};

export default UsersReviews;
