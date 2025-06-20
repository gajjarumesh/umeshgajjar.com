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

export const metadata = {
  title: "Umesh Gajjar | Full Stack Developer | React, Node.js, Laravel Expert",
  description:
    "Explore Umesh Gajjar's full stack development portfolio. Expert in React.js, Laravel, Node.js, Vue.js, and scalable SaaS architecture. 6+ years of experience in building high-performance applications, remote team leadership, and DevOps delivery.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "Umesh Gajjar, Full Stack Developer, React Developer, Laravel Developer, Node.js, Vue.js, SaaS Developer, Web App Development, Remote Developer, Freelance Developer India, DevOps, PostgreSQL, AWS",
  authors: [{ name: "Umesh Gajjar" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://umeshgajjar.com/",
    title: "Umesh Gajjar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer with expertise in React.js, Laravel, Node.js, and scalable SaaS applications. View Umesh Gajjar's portfolio and projects.",
    images: [
      {
        url: "https://umeshgajjar.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Umesh Gajjar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesh Gajjar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer | React.js, Laravel, Node.js, Vue.js | Explore my projects and services",
    images: ["https://umeshgajjar.com/banner.png"],
  },
};

export default function Home() {
  return (
    <body>
      {/* Vertical Navigator for Desktop */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5 bg-white/60 backdrop-blur-md border border-gray-200 px-3 py-4 rounded-xl shadow-lg">
        {[
          { icon: <LuUser />, label: "About", href: "#about" },
          { icon: <LuServerCog />, label: "Stack", href: "#stack" },
          { icon: <LuSettings />, label: "Services", href: "#services" },
          { icon: <LuFolderOpen />, label: "Projects", href: "#projects" },
          { icon: <LuSendHorizontal />, label: "Contact", href: "#contact" },
        ].map((item) => (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              scroll={true}
              className="text-xl text-gray-700 hover:text-blue-600 transition-all"
            >
              {item.icon}
            </Link>
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Horizontal Navigator for Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden gap-6 bg-white/90 backdrop-blur-lg border px-6 py-3 rounded-full shadow-xl">
        {[
          { icon: <LuUser />, href: "#about" },
          { icon: <LuServerCog />, href: "#stack" },
          { icon: <LuSettings />, href: "#services" },
          { icon: <LuFolderOpen />, href: "#projects" },
          { icon: <LuSendHorizontal />, href: "#contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            scroll={true}
            className="text-xl text-gray-700 hover:text-blue-600 transition"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <main className="bg-[#f9f9fb] text-gray-900 px-6 py-12 pt-28 ug-raleway-medium">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Hero Section */}
            <section className="text-center space-y-4">
              <h1 className="text-5xl ug-playfair-bold">Umesh Gajjar</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Full Stack Developer with 6+ years of experience in React,
                Laravel, Node.js, and scalable SaaS applications — leading
                remote teams and delivering high-performance web solutions.
              </p>

              <div className="flex justify-center gap-4 mt-4 text-lg flex-wrap text-blue-600">
                <a
                  href="mailto:hello@umeshgajjar.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaEnvelope /> hello@umeshgajjar.com
                </a>
                <a
                  href="https://www.linkedin.com/in/umesh-gajjar-6a8817108/"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </section>

            {/* About Me */}
            <section id="about">
              <h2 className="text-3xl ug-playfair-bold mb-4">About Me</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                I&apos;m <span className="ug-raleway-bold">Umesh Gajjar</span>,
                a passionate Full Stack Developer based in Gandhinagar, India
                with over 6 years of experience crafting robust, scalable web
                solutions. I specialize in technologies like{" "}
                <span className="ug-raleway-bold">
                  React.js, Laravel, Node.js, Vue.js,
                </span>{" "}
                and <span className="ug-raleway-bold">Next.js</span>, and have
                led high-performing development teams that deliver full-cycle
                digital products. I&apos;m highly collaborative,
                deadline-oriented, and thrive in remote-first environments.
                I&apos;ve built HRMS systems, CRMs, SaaS platforms, and
                high-performance backend services with clean architecture and
                user-centric design in mind. My goal is always to blend
                technical excellence with business impact.
              </p>
            </section>

            {/* Tech Stack */}
            <section id="stack">
              <h2 className="text-3xl ug-playfair-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "React.js",
                    icon: <SiReact className="text-blue-500" />,
                  },
                  {
                    name: "Next.js",
                    icon: <SiNextdotjs className="text-black" />,
                  },
                  {
                    name: "Vue.js",
                    icon: <SiVuedotjs className="text-green-500" />,
                  },
                  {
                    name: "Nuxt.js",
                    icon: <SiNuxtdotjs className="text-green-700" />,
                  },
                  {
                    name: "Laravel",
                    icon: <SiLaravel className="text-red-500" />,
                  },
                  {
                    name: "Node.js",
                    icon: <SiNodedotjs className="text-green-600" />,
                  },
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="text-blue-800" />,
                  },
                  {
                    name: "MySQL",
                    icon: <SiMysql className="text-blue-600" />,
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-green-600" />,
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-blue-600" />,
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss className="text-sky-400" />,
                  },
                  {
                    name: "Bootstrap",
                    icon: <SiBootstrap className="text-purple-700" />,
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="text-blue-500" />,
                  },
                  {
                    name: "AWS",
                    icon: <SiAmazon className="text-orange-500" />,
                  },
                  {
                    name: "Firebase",
                    icon: <SiFirebase className="text-yellow-500" />,
                  },
                  { name: "Git", icon: <SiGit className="text-red-500" /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm hover:shadow-md px-4 py-2 rounded-full transition text-sm text-gray-800"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="ug-raleway-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section id="services">
              <h2 className="text-3xl ug-playfair-bold mb-6">Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
                    title: "Web App Development",
                    desc: "Custom-built, scalable web applications tailored to business needs using React, Vue, and Laravel.",
                  },
                  {
                    icon: <FaMobileAlt className="text-green-600 text-3xl" />,
                    title: "Mobile Backend APIs",
                    desc: "High-performance REST APIs for Android and iOS apps with secure auth, token handling, and data sync.",
                  },
                  {
                    icon: <FaServer className="text-yellow-500 text-3xl" />,
                    title: "Database Design",
                    desc: "Optimized relational and NoSQL data models for scalable cloud applications using PostgreSQL, MySQL, MongoDB.",
                  },
                  {
                    icon: <FaChartLine className="text-purple-600 text-3xl" />,
                    title: "Dashboards & Analytics",
                    desc: "Interactive admin panels with charts, KPIs, and reporting tools to drive insight and decision-making.",
                  },
                  {
                    icon: <FaCloud className="text-indigo-600 text-3xl" />,
                    title: "DevOps & Cloud Setup",
                    desc: "End-to-end deployment pipelines, Docker-based containers, and scalable hosting using AWS & Linode.",
                  },
                  {
                    icon: <FaTools className="text-gray-700 text-3xl" />,
                    title: "Maintenance & Debugging",
                    desc: "Ongoing support, refactoring legacy code, resolving bottlenecks, and optimizing performance across stacks.",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition space-y-3"
                  >
                    <div>{service.icon}</div>
                    <h3 className="text-lg ug-raleway-bold">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio Projects */}
            <section id="projects">
              <h2 className="text-3xl ug-playfair-bold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Fitness Website",
                    stack: "Next.js, Node.js, PostgreSQL",
                    desc: "Developed a full-fledged gym event management platform where admins can create events, manage participant approvals, and track voting in real-time. Led architecture design, team task allocation, and ensured smooth delivery across modules.",
                  },
                  {
                    name: "BalingWireDirect",
                    stack: "Vue.js, PHP, Vuetify",
                    desc: "Baling Wire Direct is a U.S. based platform for ordering high-quality baling wire. I helped build a fast, user-friendly interface that simplified bulk industrial purchases with real-time pricing, seamless checkout, and nationwide shipping.",
                  },
                  {
                    name: "HRMS Application",
                    stack: "Next.js, Node.js, PostgreSQL",
                    desc: "Engineered a comprehensive HRMS covering payroll, attendance, leave management, and timesheets. Took charge of module planning, core backend development, and frontend integration.",
                  },
                  {
                    name: "Healthcare Backend Portal",
                    stack: "Next.js, Laravel, Node.js, Docker",
                    desc: "Modernized a legacy PHP interpreter request system with real-time features like chat and notifications. Built microservices, integrated React frontend, and implemented Docker-based deployments.",
                  },
                  {
                    name: "POS System",
                    stack: "Next.js, Laravel, PostgreSQL",
                    desc: "Designed and developed a retail POS system from scratch including product management, billing, cart system, and printing. Avoided UI libraries to build lightweight, optimized interfaces.",
                  },
                  {
                    name: "Crypto Trading Platform",
                    stack: "Laravel, MySQL, Bootstrap, jQuery",
                    desc: "Enhanced trading UI and integrated real-time charts for a high-load crypto site. Focused on optimizing large-scale database interactions and improving load time performance.",
                  },
                  {
                    name: "USDV CRM",
                    stack: "PHP, CodeIgniter, MySQL, jQuery",
                    desc: "Developed a CRM system for visa eligibility checks and user applications. Created feature flows, database schema, and custom UIs for smooth CRM operations.",
                  },
                  {
                    name: "Orva",
                    stack: "Vue.js, Prisma, TailwindCSS",
                    desc: "Orva is a voice AI assistant for surgical teams, enabling hands-free event logging and real-time coordination. I contributed to building a clean, responsive interface that improves efficiency and reduces manual charting in operating rooms.",
                  },
                ].map((project) => (
                  <div
                    key={project.name}
                    className="bg-white border border-gray-200  p-5 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-lg ug-raleway-bold">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-2 ug-raleway-medium-italic">
                      {project.stack}
                    </p>
                    <p className="text-sm text-gray-700">{project.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="text-center space-y-3" id="contact">
              <h2 className="text-3xl ug-playfair-bold">Let&apos;s Connect</h2>
              <p className="text-gray-600">
                Open to freelance, remote roles, and collaborative tech
                initiatives worldwide.
              </p>
              <a
                href="mailto:hello@umeshgajjar.com"
                className="inline-block mt-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
              >
                Email Me
              </a>
            </section>
          </div>
        </div>
      </main>

      <Analytics />
    </body>
  );
}
