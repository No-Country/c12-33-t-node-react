import React from "react";

const Header = () => {
  return (
    <div className="pt-10 pb-5 flex justify-between border-b">
      <div>
        <h3 className="text-xl font-medium">
          Apartamento con servicios incluidos entero - Anfitrión: Rossy
        </h3>
        <p>
          <span>4 huéspedes</span> · <span>2 habitaciones</span> ·
          <span>2 camas</span> · <span>1 baño</span>
        </p>
      </div>
      <div>
        <img
          className="object-cover rounded-full w-12 h-12"
          src="https://a0.muscache.com/im/pictures/user/72135e97-1583-4ca4-a8ba-8cdd81827fde.jpg?im_w=240"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
