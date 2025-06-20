import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="container m-auto xl:px-20 lg:py-0 p-10 flex items-center justify-center rounded-2xl bg-indigo-800">
      <div className="lg:w-4/6 w-full flex flex-col">
        <h4 className="xl:text-[20px] lg:text-[18px] text-slate-100 ug-raleway-semi-bold mb-3 lg:text-left text-center">
          Looking for a Full-Stack Web Developer to Elevate Your Online
          Presence?
        </h4>
        <h3 className="xl:text-4xl lg:text-3xl text-white ug-raleway-bold xl:leading-normal lg:w-3/4 xl:mb-15 lg:mb-10 lg:text-left text-center">
          Get in Touch with a Trusted Full-Stack Web Development Expert
        </h3>
        <Link
          href={"/contact"}
          className="text-md bg-slate-800 w-fit text-white px-5 h-10 rounded-lg leading-10 m-auto lg:m-0 mt-5"
        >
          Hire Full-Stack Developer
        </Link>
      </div>
      <div className="w-2/6 pt-25 lg:flex justify-end hidden">
        <Image
          src={"/assets/images/get_in_touch.svg"}
          alt="get_in_touch"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default GetInTouch;
