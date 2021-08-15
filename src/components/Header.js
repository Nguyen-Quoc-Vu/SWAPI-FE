import React, { useState } from "react";

const Header = () => {
  return (
    <div className="w-full pt-4 flex justify-center">
      <img
        src={"/logo.png"}
        alt="Stars war logo"
        className="md:h-20 md:w-40 w-24 h-12 hover:animate-bounce cursor-pointer"
      />
    </div>
  );
};

export default Header;
