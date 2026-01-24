"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDocker,
  FaDatabase,
  FaArrowDown,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { Button } from "@/components/ui";

const floatingIcons = [
  { Icon: FaReact, delay: 0, duration: 3 },
  { Icon: SiNextdotjs, delay: 0.5, duration: 4 },
  { Icon: FaNodeJs, delay: 1, duration: 3.5 },
  { Icon: FaLaravel, delay: 1.5, duration: 4.5 },
  { Icon: FaDocker, delay: 2, duration: 3 },
  { Icon: SiTailwindcss, delay: 0.3, duration: 4 },
  { Icon: SiPostgresql, delay: 1.2, duration: 3.8 },
  { Icon: FaDatabase, delay: 1.8, duration: 4.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-gray-200 dark:text-gray-700 opacity-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 40}px`,
            }}
          >
            <item.Icon />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Scalable Solutions
            </span>
            <br />
            for Modern Web
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer with{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              6+ years of experience
            </span>{" "}
            specializing in React.js, Laravel, Node.js, and scalable SaaS
            applications. Read our{" "}
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              engineering blog
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              start a conversation
            </Link>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/projects">
              <Button size="lg" className="min-w-[180px]">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="min-w-[180px]">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown className="text-2xl animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
