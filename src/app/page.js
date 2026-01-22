"use client";

import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiLaravel,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import {
  FaEnvelope,
  FaLinkedin,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaCloud,
  FaTools,
  FaChevronDown,
} from "react-icons/fa";
import {
  LuUser,
  LuServerCog,
  LuSettings,
  LuFolderOpen,
  LuSendHorizontal,
} from "react-icons/lu";

import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { tabs } from "@/config";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedTab, setSelectedTab] = useState("All");
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "stack", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Vertical Navigator for Desktop */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5 glass px-3 py-4 rounded-xl shadow-lg">
        {[
          { icon: <LuUser />, label: "About", href: "#about", id: "about" },
          { icon: <LuServerCog />, label: "Stack", href: "#stack", id: "stack" },
          { icon: <LuSettings />, label: "Services", href: "#services", id: "services" },
          { icon: <LuFolderOpen />, label: "Projects", href: "#projects", id: "projects" },
          { icon: <LuSendHorizontal />, label: "Contact", href: "#contact", id: "contact" },
        ].map((item) => (
          <motion.div 
            key={item.href} 
            className="group relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              scroll={true}
              className={`text-xl transition-all ${
                activeSection === item.id 
                  ? "text-blue-600" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.icon}
            </Link>
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Horizontal Navigator for Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden gap-6 glass px-6 py-3 rounded-full shadow-xl">
        {[
          { icon: <LuUser />, href: "#about", id: "about" },
          { icon: <LuServerCog />, href: "#stack", id: "stack" },
          { icon: <LuSettings />, href: "#services", id: "services" },
          { icon: <LuFolderOpen />, href: "#projects", id: "projects" },
          { icon: <LuSendHorizontal />, href: "#contact", id: "contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            scroll={true}
            className={`text-xl transition ${
              activeSection === item.id 
                ? "text-blue-600" 
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <main className="bg-[#f9f9fb] text-gray-900 px-6 py-12 pt-28 ug-raleway-medium relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-6xl mx-auto space-y-24 relative">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12 relative">
              {/* Floating Decorative Shapes */}
              <motion.div
                className="absolute top-0 left-1/4 w-20 h-20 border-2 border-blue-400/30 rounded-lg"
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-10 right-1/4 w-16 h-16 border-2 border-purple-400/30 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [0, 20, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-6xl md:text-7xl ug-playfair-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Umesh Gajjar
                </motion.h1>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Full Stack Developer with 6+ years of experience in React,
                Laravel, Node.js, and scalable SaaS applications — leading
                remote teams and delivering high-performance web solutions.
              </motion.p>

              <motion.div 
                className="flex justify-center gap-4 mt-4 text-lg flex-wrap text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="mailto:hello@umeshgajjar.com"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope /> hello@umeshgajjar.com
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/umesh-gajjar-6a8817108/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaChevronDown className="text-gray-400 text-2xl" />
              </motion.div>
            </section>

            {/* About Me */}
            <AnimatedSection id="about">
              <motion.h2 
                className="text-4xl ug-playfair-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.div
                className="glass p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  I&apos;m <span className="ug-raleway-bold text-blue-600">Umesh Gajjar</span>,
                  a passionate Full Stack Developer based in Gandhinagar, India
                  with over 6 years of experience crafting robust, scalable web
                  solutions. I specialize in technologies like{" "}
                  <span className="ug-raleway-bold text-purple-600">
                    React.js, Laravel, Node.js, Vue.js,
                  </span>{" "}
                  and <span className="ug-raleway-bold text-blue-600">Next.js</span>, and have
                  led high-performing development teams that deliver full-cycle
                  digital products. I&apos;m highly collaborative,
                  deadline-oriented, and thrive in remote-first environments.
                  I&apos;ve built HRMS systems, CRMs, SaaS platforms, and
                  high-performance backend services with clean architecture and
                  user-centric design in mind. My goal is always to blend
                  technical excellence with business impact.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Tech Stack */}
            <AnimatedSection id="stack">
              <motion.h2 
                className="text-4xl ug-playfair-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Tech Stack
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "React.js",
                    icon: <SiReact className="text-blue-500" />,
                    level: "Expert"
                  },
                  {
                    name: "Next.js",
                    icon: <SiNextdotjs className="text-black" />,
                    level: "Expert"
                  },
                  {
                    name: "Vue.js",
                    icon: <SiVuedotjs className="text-green-500" />,
                    level: "Advanced"
                  },
                  {
                    name: "Nuxt.js",
                    icon: <SiNuxtdotjs className="text-green-700" />,
                    level: "Advanced"
                  },
                  {
                    name: "Laravel",
                    icon: <SiLaravel className="text-red-500" />,
                    level: "Expert"
                  },
                  {
                    name: "Node.js",
                    icon: <SiNodedotjs className="text-green-600" />,
                    level: "Expert"
                  },
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="text-blue-800" />,
                    level: "Advanced"
                  },
                  {
                    name: "MySQL",
                    icon: <SiMysql className="text-blue-600" />,
                    level: "Expert"
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-green-600" />,
                    level: "Advanced"
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-blue-600" />,
                    level: "Advanced"
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss className="text-sky-400" />,
                    level: "Expert"
                  },
                  {
                    name: "Bootstrap",
                    icon: <SiBootstrap className="text-purple-700" />,
                    level: "Expert"
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="text-blue-500" />,
                    level: "Intermediate"
                  },
                  {
                    name: "AWS",
                    icon: <SiAmazon className="text-orange-500" />,
                    level: "Intermediate"
                  },
                  {
                    name: "Firebase",
                    icon: <SiFirebase className="text-yellow-500" />,
                    level: "Advanced"
                  },
                  { 
                    name: "Git", 
                    icon: <SiGit className="text-red-500" />,
                    level: "Expert"
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative glass p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex flex-col items-center gap-3 text-center">
                      <motion.span 
                        className="text-4xl"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="ug-raleway-medium text-gray-800 text-sm">
                        {skill.name}
                      </span>
                      
                      {/* Skill level tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                        {skill.level}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection id="services">
              <motion.h2 
                className="text-4xl ug-playfair-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Services
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
                    title: "Web App Development",
                    desc: "Custom-built, scalable web applications tailored to business needs using React, Vue, and Laravel.",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <FaMobileAlt className="text-green-600 text-3xl" />,
                    title: "Mobile Backend APIs",
                    desc: "High-performance REST APIs for Android and iOS apps with secure auth, token handling, and data sync.",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: <FaServer className="text-yellow-500 text-3xl" />,
                    title: "Database Design",
                    desc: "Optimized relational and NoSQL data models for scalable cloud applications using PostgreSQL, MySQL, MongoDB.",
                    gradient: "from-yellow-500 to-orange-500"
                  },
                  {
                    icon: <FaChartLine className="text-purple-600 text-3xl" />,
                    title: "Dashboards & Analytics",
                    desc: "Interactive admin panels with charts, KPIs, and reporting tools to drive insight and decision-making.",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: <FaCloud className="text-indigo-600 text-3xl" />,
                    title: "DevOps & Cloud Setup",
                    desc: "End-to-end deployment pipelines, Docker-based containers, and scalable hosting using AWS & Linode.",
                    gradient: "from-indigo-500 to-blue-500"
                  },
                  {
                    icon: <FaTools className="text-gray-700 text-3xl" />,
                    title: "Maintenance & Debugging",
                    desc: "Ongoing support, refactoring legacy code, resolving bottlenecks, and optimizing performance across stacks.",
                    gradient: "from-gray-600 to-gray-800"
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="group relative glass p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                    
                    <div className="relative space-y-4">
                      <motion.div
                        className="inline-block p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0]
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-lg ug-raleway-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Gradient accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Portfolio Projects */}
            <AnimatedSection id="projects">
              <motion.h2 
                className="text-4xl ug-playfair-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h2>
              
              {/* Category Filter Tabs */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {tabs.slice(0, 5).map((tab) => (
                  <motion.button
                    key={tab.label}
                    onClick={() => setSelectedTab(tab.label)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedTab === tab.label
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "glass text-gray-700 hover:shadow-md"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Fitness Website",
                    stack: "Next.js, Node.js, PostgreSQL",
                    desc: "Developed a full-fledged gym event management platform where admins can create events, manage participant approvals, and track voting in real-time. Led architecture design, team task allocation, and ensured smooth delivery across modules.",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    name: "BalingWireDirect",
                    stack: "Vue.js, PHP, Vuetify",
                    desc: "Baling Wire Direct is a U.S. based platform for ordering high-quality baling wire. I helped build a fast, user-friendly interface that simplified bulk industrial purchases with real-time pricing, seamless checkout, and nationwide shipping.",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    name: "HRMS Application",
                    stack: "Next.js, Node.js, PostgreSQL",
                    desc: "Engineered a comprehensive HRMS covering payroll, attendance, leave management, and timesheets. Took charge of module planning, core backend development, and frontend integration.",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    name: "Healthcare Backend Portal",
                    stack: "Next.js, Laravel, Node.js, Docker",
                    desc: "Modernized a legacy PHP interpreter request system with real-time features like chat and notifications. Built microservices, integrated React frontend, and implemented Docker-based deployments.",
                    gradient: "from-orange-500 to-red-500"
                  },
                  {
                    name: "POS System",
                    stack: "Next.js, Laravel, PostgreSQL",
                    desc: "Designed and developed a retail POS system from scratch including product management, billing, cart system, and printing. Avoided UI libraries to build lightweight, optimized interfaces.",
                    gradient: "from-indigo-500 to-purple-500"
                  },
                  {
                    name: "Crypto Trading Platform",
                    stack: "Laravel, MySQL, Bootstrap, jQuery",
                    desc: "Enhanced trading UI and integrated real-time charts for a high-load crypto site. Focused on optimizing large-scale database interactions and improving load time performance.",
                    gradient: "from-yellow-500 to-orange-500"
                  },
                  {
                    name: "USDV CRM",
                    stack: "PHP, CodeIgniter, MySQL, jQuery",
                    desc: "Developed a CRM system for visa eligibility checks and user applications. Created feature flows, database schema, and custom UIs for smooth CRM operations.",
                    gradient: "from-teal-500 to-cyan-500"
                  },
                  {
                    name: "Orva",
                    stack: "Vue.js, Prisma, TailwindCSS",
                    desc: "Orva is a voice AI assistant for surgical teams, enabling hands-free event logging and real-time coordination. I contributed to building a clean, responsive interface that improves efficiency and reduces manual charting in operating rooms.",
                    gradient: "from-pink-500 to-rose-500"
                  },
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    className="group relative glass p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Gradient top border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                    
                    <div className="relative">
                      <h3 className="text-xl ug-raleway-bold text-gray-800 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 ug-raleway-medium-italic">
                        {project.stack}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* View More Link */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors font-medium"
                >
                  View All Projects
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection id="contact">
              <motion.div
                className="relative text-center space-y-6 py-16 px-8 glass rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
                
                {/* Floating circles decoration */}
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative">
                  <motion.h2 
                    className="text-4xl md:text-5xl ug-playfair-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Let&apos;s Connect
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Open to freelance, remote roles, and collaborative tech
                    initiatives worldwide.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.a
                      href="mailto:hello@umeshgajjar.com"
                      className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEnvelope className="text-xl" />
                      Email Me
                    </motion.a>
                  </motion.div>
                  
                  {/* Social Links */}
                  <motion.div
                    className="flex justify-center gap-6 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.a
                      href="https://www.linkedin.com/in/umesh-gajjar-6a8817108/"
                      target="_blank"
                      className="flex items-center justify-center w-12 h-12 rounded-full glass text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="text-2xl" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Analytics />
    </>
  );
}

// Animated Section Wrapper Component
function AnimatedSection({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
