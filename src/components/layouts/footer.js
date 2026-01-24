"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { SITE_CONFIG, SOCIAL_LINKS, FOOTER_LINKS } from "@/lib/constants";
import Newsletter from "../Newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <FaGithub className="text-xl" />,
    linkedin: <FaLinkedin className="text-xl" />,
    twitter: <FaTwitter className="text-xl" />,
    email: <FaEnvelope className="text-xl" />,
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 xl:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Column 1: About/Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full Stack Developer specializing in building exceptional digital
              experiences. Transforming ideas into scalable, high-performance
              web solutions.
            </p>
            <div className="flex gap-4 pt-2">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  aria-label={`Visit ${platform}`}
                >
                  {socialIcons[platform]}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-indigo-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-indigo-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2">
              <h5 className="text-sm font-medium">Legal</h5>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-indigo-400 transition-colors duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get the latest articles, project updates, and web
              development tips.
            </p>
            <Newsletter />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left flex items-center gap-2">
              © {currentYear} {SITE_CONFIG.name}. Crafted with
              <FaHeart className="text-red-500 animate-pulse" /> All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm">
              <Link
                href={SITE_CONFIG.email}
                className="hover:text-indigo-400 transition-colors"
              >
                {SITE_CONFIG.email}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
