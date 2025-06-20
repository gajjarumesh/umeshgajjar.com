"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import FullScreenModal from "../fullMenu";

export const menu = [
  {
    num: "01",
    label: "About",
    href: "/",
  },
  {
    num: "02",
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    num: "03",
    label: "Services",
    href: "/services",
  },
  {
    num: "04",
    label: "Blogs",
    href: "/blogs",
  },
];

const Header = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className="container m-auto pt-4 xl:px-0 px-4">
      <div className="bg-indigo-100 px-4 py-2 w-full h-18 rounded-2xl">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-center gap-3">
            <button
              className="h-12 w-12 flex items-center justify-center bg-indigo-200/50 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-300 outline-0"
              onClick={() => setIsModalOpen(true)}
            >
              <RiMenu4Line />
            </button>
            {/* <Link
              href={"/"}
              className="text-2xl tracking-wider ug-raleway-bolder leading-normal"
            >
              Umesh
            </Link> */}
          </div>
          <ul className="gap-9 rounded-4xl ug-raleway lg:flex hidden">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="flex items-center justify-center gap-1 text-[16px] ug-raleway-medium tracking-wide leading-none"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="bg-indigo-600 text-white hover:bg-indigo-700-500 transition duration-300 ease-in-out px-4 h-8 rounded-lg leading-8 ug-raleway-semi-bold text-sm"
          >
            Say Hello
          </Link>
        </div>
        <FullScreenModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <ul className="flex flex-col md:gap-6 gap-5 rounded-4xl ug-raleway-bolder text-white">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    key={index}
                    className="group hover:text-white/80 hover:pl-20 transition-all duration-300 ease-in-out flex items-end md:text-[50px] tracking-wide relative md:pl-15 text-[25px]"
                    href={item.href}
                  >
                    <span className="md:text-[20px] text-indigo-800 mr-5 absolute md:left-0 top-0 opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:left-5 text-[15px] -left-8">
                      {item.num}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </FullScreenModal>
      </div>
    </div>
  );
};

export default Header;
