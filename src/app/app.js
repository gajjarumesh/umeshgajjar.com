"use client";

import "../../public/assets/fonts/fonts.css";
import Header from "@/components/layouts/header";
import { BsDashLg } from "react-icons/bs";
import { HiOutlineSlash } from "react-icons/hi2";
import Link from "next/link";
import Footer from "@/components/layouts/footer";
import React, { useState } from "react";

const App = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <body className={isModalOpen ? "overflow-hidden" : ""}>
      {/* <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      {children}
      {/* <Footer /> */}
      {/* <div className="ug-raleway-bolder fixed transform -rotate-90 md:flex hidden gap-1 items-center leading-1 -right-17 w-49 justify-center top-[calc(50%_-_8px)] ">
        Follow Me <BsDashLg />
        <Link href={"/"} target="_blank">
          X
        </Link>
        <HiOutlineSlash />
        <Link href={"/"} target="_blank">
          in
        </Link>
        <HiOutlineSlash />
        <Link href={"/"} target="_blank">
          Ig
        </Link>
      </div> */}
    </body>
  );
};

export default App;
