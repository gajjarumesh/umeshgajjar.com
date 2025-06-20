"use client";

import "../../public/assets/fonts/fonts.css";
import Header from "@/components/layouts/header";
import { BsDashLg } from "react-icons/bs";
import { HiOutlineSlash } from "react-icons/hi2";
import Link from "next/link";
import Footer from "@/components/layouts/footer";
import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const App = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>
          Umesh Gajjar | Full Stack Developer | React, Node.js, Laravel Expert
        </title>

        {/* SEO Meta Description */}
        <meta
          name="description"
          content="Explore Umesh Gajjar's full stack development portfolio. Expert in React.js, Laravel, Node.js, Vue.js, and scalable SaaS architecture. 6+ years of experience in building high-performance applications, remote team leadership, and DevOps delivery."
        />
        <meta
          name="keywords"
          content="Umesh Gajjar, Full Stack Developer, React Developer, Laravel Developer, Node.js, Vue.js, SaaS Developer, Web App Development, Remote Developer, Freelance Developer India, DevOps, PostgreSQL, AWS"
        />
        <meta name="author" content="Umesh Gajjar" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://umeshgajjar.com/" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umeshgajjar.com/" />
        <meta
          property="og:title"
          content="Umesh Gajjar | Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Experienced Full Stack Developer with expertise in React.js, Laravel, Node.js, and scalable SaaS applications. View Umesh Gajjar's portfolio and projects."
        />
        <meta
          property="og:image"
          content="https://umeshgajjar.com/banner.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://umeshgajjar.com/" />
        <meta
          name="twitter:title"
          content="Umesh Gajjar | Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Experienced Full Stack Developer | React.js, Laravel, Node.js, Vue.js | Explore my projects and services"
        />
        <meta
          name="twitter:image"
          content="https://umeshgajjar.com/banner.png"
        />

        {/* Optional Favicon */}
        <link rel="icon" href="/favicon.png" />
      </Head>
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
        <Analytics />
      </body>
    </React.Fragment>
  );
};

export default App;
