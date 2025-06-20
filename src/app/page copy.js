"use client";
import GetInTouch from "@/components/getIntouch";
import Image from "next/image";
import React from "react";

const four_section = [
  {
    icon: "/assets/icons/home/digital_transaction.svg",
    label: "Digital Transformation",
  },
  {
    icon: "/assets/icons/home/custom_software.svg",
    label: "Custom Software Development",
  },
  {
    icon: "/assets/icons/home/it_infrastructure.svg",
    label: "IT Infrastructure Management",
  },
  {
    icon: "/assets/icons/home/innovative_tech.svg",
    label: "Innovative Tech Solutions",
  },
];
const Home = () => {
  return (
    <React.Fragment>
      <div className="container m-auto lg:py-30 md:py-6 pt-10 pb-6 xl:px-3 px-4 md:px-10">
        <h3 className="text-7xl md:w-1/2 md:text-left text-center text-indigo-800 ug-playfair-bold xl:mb-5 lg:mb-10">
          Umesh Gajjar
        </h3>
        <hr className="w-48 h-1 mx-auto mt-2 mb-4 block md:hidden bg-gray-100 border-0 rounded-sm md:mt-2 md:mb-4 dark:bg-indigo-600" />
        <h1 className="xl:text-3xl lg:text-5xl md:text-5xl text-4xl xl:w-3/5 lg:w-3/5 md:w-4/5 w-full ug-raleway-medium md:text-left text-center">
          Secure, Scalable Web & Mobile Apps Designed to Boost Business Growth
          and Deliver Seamless UX
        </h1>
      </div>
      <div className="bg-indigo-100/50 lg:mb-20 mb-10 md:pt-30 pt-10 md:px-5 px-5">
        <div className="container m-auto bg-slate-800 p-10 rounded-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-5 text-center">
            {four_section.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-white gap-2 text-1xl mb-0 md:mb-10 lg:mb-0"
                >
                  <span className="bg-slate-900 block p-3 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={30}
                      height={30}
                      className="max-h-8 max-w-8 h-8 w-8"
                    />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="container m-auto flex lg:flex-row flex-col lg:py-30 md:py-20 py-10">
          <div className="lg:w-1/3 w-full lg:px-7">
            <span className="text-2xl text-indigo-600 mb-5 block text-center lg:text-left">
              Capabilities
            </span>
            <h2 className="lg:text-5xl text-4xl ug-playfair-bold lg:mb-10 mb-5 text-center lg:text-left">
              Full-Stack Web Development Services
            </h2>
            <h4 className="text-2xl text-center lg:text-left">
              Building high-performance web solutions with modern technologies
              to scale your business.
            </h4>
          </div>
          <div className="lg:w-1/3 w-full lg:px-7 lg:border-l-[1px] lg:border-l-slate-900 flex flex-col">
            <div className="flex flex-col lg:mb-12 lg:mt-0 my-10 text-center lg:text-left">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                01.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                Custom Web App Development
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Fast, secure, and scalable web apps using React, Next.js,
                Node.js, and Laravel.
              </h5>
            </div>
            <div className="lg:hidden flex flex-col lg:mb-12 mb-10 text-center lg:text-left">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                02.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                Responsive UI/UX Design
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Mobile-first, modern designs using Tailwind CSS, Bootstrap, and
                Material UI.
              </h5>
            </div>
            <div className="lg:flex hidden flex-col">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                03.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                API & Backend Integration
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Powerful REST/GraphQL APIs and seamless third-party
                integrations.
              </h5>
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:px-7 lg:border-l-[1px] lg:border-l-slate-900 flex flex-col">
            <div className="lg:flex hidden flex-col lg:mb-12 mb-10">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                02.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                Responsive UI/UX Design
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Mobile-first, modern designs using Tailwind CSS, Bootstrap, and
                Material UI.
              </h5>
            </div>
            <div className="lg:hidden flex flex-col lg:mb-12 mb-10 text-center lg:text-left">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                03.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                API & Backend Integration
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Powerful REST/GraphQL APIs and seamless third-party
                integrations.
              </h5>
            </div>
            <div className="flex flex-col lg:mb-12 mb-10 text-center lg:text-left">
              <span className="text-xl text-indigo-600 mb-1 lg:block hidden">
                04.
              </span>
              <h3 className="ug-playfair-bold text-3xl mb-5">
                Database Architecture & Optimization
              </h3>
              <h5 className="ug-raleway-medium text-xl tracking-wide leading-normal">
                Efficient PostgreSQL, MySQL, and MongoDB solutions for top
                performance.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pb-30 pb-10 lg:pt-10 xl:px-0 px-5">
        <GetInTouch />
      </div>
    </React.Fragment>
  );
};

export default Home;
