import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center item-center">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loader;
