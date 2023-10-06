import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";

const check = require("./check-mark.png")

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center justify-center p-32">
      <img className="w-24" src={check} alt=""/>
      <h5 className="text-center text-[25px] text-[#000000a1]">
        تم اكمال الطلب بنجاح
      </h5>

    </div>
  );
};

export default OrderSuccessPage;
