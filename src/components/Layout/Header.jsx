import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
const heart = require("./images/heart.png");
const shoppingCart = require("./images/shopping-cart.png");
const pfp = require("./images/user.png");

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active1, setActive1] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredItems = [];

  if (allProducts !== undefined && allProducts.length > 0) {
    filteredItems = allProducts.filter(
      (item) =>
        searchQuery !== "" &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
    setSearchQuery("");
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div dir="rtl" className={`${styles.section}  z-20`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <p className="text-3xl font-semibold"> MWZ3</p>
            </Link>
          </div>
          {/* search box */}
          <div className="w-[40%] relative">
            <AiOutlineSearch
              size={30}
              className="absolute left-2 top-1.5 cursor-pointer"
            />
            <input
              type="text"
              placeholder="ابحث عن منتج.."
              value={searchQuery}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 focus:border-red-600 border"
            />
            <div className="absolute w-full bg-white shadow-sm-2 z-[9]">
              {filteredItems.map((i, index) => {
                return (
                  <Link to={`/product/${i._id}`}>
                    <div className="w-full flex items-center px-3 hover:pr-5 hover:bg-gray-200 duration-200">
                      <img
                        src={`${i.images[0]?.url}`}
                        alt=""
                        className="w-[40px] h-[40px] m-2"
                      />
                      <h1>{i.name}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex">
            {isAuthenticated ? (
              <div></div>
            ) : (
              <Link to="/login">
                <div className="flex items-center hover:shadow">
                  <p className="p-3 text-gray-500 hover:text-red-600 duration-300">
                    تسجيل الدخول
                  </p>
                  <div>
                    <img className="ml-3 w-[35px]" src={pfp} alt="user" />
                  </div>
                </div>
              </Link>
            )}
            <div
              className={` bg-white border-b border-gray-400 p-3 text-gray-500 hover:border-red-600 hover:text-red-600 duration-300 cursor-pointer`}
            >
              <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                <h1 className=" flex items-center">
                  {isSeller ? "لوحة الادارة " : "التسجيل كبائع"}{" "}
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        dir="rtl"
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-red-600 `}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div className="h-full flex" onClick={() => setDropDown(!dropDown)}>
            <div className="flex relative   w-[270px] hidden 1000px:block">
              {
                // <BiMenuAltLeft size={30} className="absolute top-4 left-2 text-white" />
              }{" "}
              <button
                className={`h-full w-full flex justify-between items-center p-3 pr-3 font-sans text-lg font-[500] select-none bg-red-800 text-white`}
              >
                قوائم المنتجات
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute left-2 top-5 cursor-pointer text-white"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex} duration-300`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <img width={35} src={heart} alt="heart" />
                <span className="absolute right-0 top-0 rounded-full bg-gray-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <img width={35} src={shoppingCart} alt="cart" />

                <span className="absolute right-0 top-0 rounded-full bg-gray-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  /*
                    <Link to="/login">
                     <p className="text-white hover:bg-red-700 bg-black p-3 border border-red-500">تسجيل الدخول</p>               
                  </Link>
                  */
                  <div></div>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        dir="rtl"
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full px-5 py-2 bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <p className="text-3xl font-semibold">
                {" "}
                <span className="text-5xl font-semibold text-red-600">E</span>gy
                <span className="text-5xl text-red-600 font-semibold">M</span>ol
              </p>
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <img
                className="cursor-pointer w-[35px]"
                src={shoppingCart}
                alt="cart"
              />
              <span class="absolute right-0 top-0 rounded-full bg-gray-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 right-0 `}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 right-0 z-10 left-cart-anim">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <img
                      className="top-4 relative cursor-pointer"
                      width={35}
                      src={heart}
                      alt="heart"
                    />
                    <span class="absolute right-0 rounded-full bg-gray-500 w-4 h-4 top-4 right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-red-600 border-[1px]"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="bg-[#fff] z-10 shadow w-full p-3">
                  {filteredItems.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-center px-3 hover:pr-5 hover:bg-gray-200 duration-200">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] m-2"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Navbar active={activeHeading} />
              <div className="w-full flex ">
                <div
                  className={`p-3 mr-5 mt-2 w-[30%] bg-red-600 hover:bg-red-800 cursor-pointer duration-300`}
                >
                  <Link to="/shop-create">
                    <h1 lang="ar" className="text-white flex items-center ">
                      سجل كبائع
                    </h1>
                  </Link>
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
