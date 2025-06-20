"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { constants } from "../../../config/constants";
import { FiAtSign } from "react-icons/fi";
import { RiNumber2, RiNumber0, RiNumber5 } from "react-icons/ri";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import { menu } from "./header";

const Footer = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [newsLetterIsCheck, setNewsLetterIsCheck] = useState(false);

  const setCheck = (check) => {
    setNewsLetterIsCheck(!check);
  };

  useEffect(() => {
    console.log(newsLetterIsCheck);
  }, [newsLetterIsCheck]);

  return (
    <footer className="bg-slate-800">
      <div className="container m-auto flex items-center flex-col">
        <div className="w-full flex flex-col items-center justify-between md:p-10 px-5 py-10 text-center text-white">
          <div className="flex flex-wrap md:gap-20 gap-5 justify-center">
            {menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="social-media-link text-2xl leading-[25.72px] font-bold flex py-10">
            <Link
              href={constants.SOCIAL_MEDIA.X}
              className="mx-3 hover:text-indigo-800 transition ease-in-out delay-100"
            >
              <BsTwitterX />
            </Link>
            <Link
              href={constants.SOCIAL_MEDIA.LINKEDIN}
              className="mx-3 hover:text-indigo-800 transition ease-in-out delay-100"
            >
              <BsLinkedin />
            </Link>
            <Link
              href={constants.SOCIAL_MEDIA.INSTAGRAM}
              className="mx-3 hover:text-indigo-800 transition ease-in-out delay-100"
            >
              <BsInstagram />
            </Link>
            <Link
              href={constants.SOCIAL_MEDIA.FACEBOOK}
              className="mx-3 hover:text-indigo-800 transition ease-in-out delay-100"
            >
              <BsFacebook />
            </Link>
          </div>
          <p className="md:text-[15px] xs:text-[15px] ug-raleway-medium flex flex-wrap items-center justify-center tracking-wider">
            <FiAtSign />
            <span className="text-white/40 mx-1 flex">
              <RiNumber2 />
              <RiNumber0 />
              <RiNumber2 />
              <RiNumber5 />
            </span>
            Crafted
            <span className="text-indigo-400 mx-1">by</span>Umesh Gajjar.
            <span className="text-indigo-400 mx-1">All</span>
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
