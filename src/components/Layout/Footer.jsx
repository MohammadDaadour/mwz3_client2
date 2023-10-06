import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div dir="rtl" className="bg-[#000] text-white">
      <hr className="border-t-gray-600" />
      <div className="flex md:justify-between justify-center flex-wrap-reverse  md:flex-nowrap sm:px-8 px-3 py-16 sm:text-center ">
        <ul className="px-5 text-center text-start flex sm:block flex-col items-center md:mt-0 mt-20">
          <p className="text-3xl font-semibold">
            {" "}
            <span className="text-5xl font-semibold text-red-600">E</span>gy
            <span className="text-5xl text-red-600 font-semibold">M</span>ol
          </p>{" "}
          <br />
          <p></p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <div className="flex  flex-col items-center sm:px-12 sm:px-4 ">
          <h1 className="lg:text-4xl text-3xl mb-5 lg:leading-normal font-semibold whitespace-nowrap text-center md:text-start">
            <span className="text-red-600">اشترك معنا</span> ليصلك
            <br />
            أحدث العروض و الخصومات
          </h1>
          <div className="">
            <input
              type="text"
              required
              placeholder="Enter your email..."
              className="text-gray-800
                sm:w-72 w-full sm:ml-3 lg:mb-0 mb-4 py-2.5 px-2 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-800 duration-300 px-5 py-2.5 text-whie md:w-auto w-full">
              اشتراك
            </button>
          </div>
        </div>

        {/*
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        */}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>.© 2023 Mohammad Daadour. all rights reserved</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
