import React from "react";
import styles from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
  console.log(active);
  return (
    <div dir="rtl" className="w-full flex justify-center">
      <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
        <div className={`${styles.noramlFlex}`}>
          <div className={` text-black flex flex-col justify-center`}>
            <div
              className={`${
                active == 1 ? "bg-rose-600" : "bg-gray-200"
              } rounded-3xl  w-6 h-6`}
            ></div>
          </div>

          <div
            className={`${
              // <span className="px-5 py-3 font-semibold">1.الشحن</span>
              active > 1
                ? "w-[150px] 800px:w-[150px] h-[2px] !bg-gray-200"
                : "w-[150px] 800px:w-[150px] h-[2px] bg-gray-200"
            } mx-2`}
          />
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div>
            <div
              className={`${
                active == 2 ? "bg-rose-600" : "bg-gray-200"
              } rounded-3xl  w-6 h-6`}
            ></div>
          </div>
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active > 1
                ? "w-[150px] 800px:w-[150px] h-[2px] !bg-gray-200"
                : "w-[150px] 800px:w-[150px] h-[2px] bg-gray-200"
            } mx-2`}
          />
          <div>
            <div
              className={`${
                active == 3 ? "bg-red-400" : "bg-gray-200"
              } rounded-3xl  w-6 h-6`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
