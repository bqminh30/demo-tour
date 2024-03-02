import React from "react";
import logo from "../../assets/logo.png";
import { navHeader } from "../../utils/contants";
import Icon from "../Icon";
import icons from "../../utils/icons";

const Header = () => {
  const { FaFacebookF, FaYoutube, FaAngleDown } = icons;

  return (
    <div className="xl:w-main w-full shadow-sm rounded-lg bg-white h-[96px] flex justify-between items-center px-7 top-10 relative">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          className="h-[76px] w-[70px] object-contain cursor-pointer"
          src={logo}
          alt="Background main"
        />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
          {navHeader?.map((el) => (
            <li key={el.id}>
              <a
                href="#"
                class="text-[14px] py-2 gap-1 font-bold px-3 flex items-center uppercase text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 "
              >
                {el.title}
                {el?.tour && <FaAngleDown color="black" size={16} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Icon icon={<FaFacebookF color="white" size={16} />} />
        <Icon icon={<FaYoutube color="white" size={16} />} />
      </div>
    </div>
  );
};

export default Header;
