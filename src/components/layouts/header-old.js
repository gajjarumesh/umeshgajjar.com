"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";
import FullScreenModal from "../fullMenu";

const Header = ({ isModalOpen, setIsModalOpen }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          
          // Show/hide header based on scroll direction
          setIsVisible(
            prevScrollPos > currentScrollPos || currentScrollPos < 10
          );
          
          // Change header style when scrolled
          setIsScrolled(currentScrollPos > 50);
          
          setPrevScrollPos(currentScrollPos);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "pt-2" : "pt-4"
        }`}
      >
        <div className="container m-auto xl:px-0 px-4">
          <div
            className={`px-4 py-2 w-full rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50"
                : "bg-indigo-100"
            }`}
          >
            <div className="flex items-center justify-between h-14">
              {/* Left: Logo & Menu Button */}
              <div className="flex items-center gap-3">
                <button
                  className={`h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out outline-0 ${
                    isScrolled
                      ? "bg-indigo-50 hover:bg-indigo-100"
                      : "bg-indigo-200/50 hover:bg-indigo-300"
                  }`}
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Open menu"
                >
                  <RiMenu4Line className="text-xl" />
                </button>
                <Link
                  href="/"
                  className="text-2xl tracking-wider font-bold leading-normal hover:text-indigo-600 transition-colors"
                >
                  {SITE_CONFIG.name?.split(" ")[0] || "Umesh"}
                </Link>
              </div>

              {/* Center: Desktop Navigation */}
              <nav className="gap-8 lg:flex hidden" aria-label="Main navigation">
                {NAVIGATION_LINKS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`relative flex items-center justify-center text-[16px] font-medium tracking-wide leading-none transition-colors ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right: CTA Button */}
              <Link
                href="/contact"
                className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 ease-in-out px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg"
              >
                Say Hello
              </Link>
            </div>

            {/* Mobile Menu Modal */}
            <FullScreenModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <ul className="flex flex-col md:gap-6 gap-5 rounded-4xl font-bold text-white">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsModalOpen(false)}
                      className="group hover:text-white/80 hover:pl-20 transition-all duration-300 ease-in-out flex items-end md:text-[50px] tracking-wide relative md:pl-15 text-[25px]"
                    >
                      <span className="md:text-[20px] text-indigo-400 mr-5 absolute md:left-0 top-0 opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:left-5 text-[15px] -left-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </FullScreenModal>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
