"use client";
import CaseStudyModal from "@/components/caseStudyModal";
import { projects, tabs } from "@/config";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectPortfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTab));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold  ug-playfair-bold text-center text-slate-800 mb-16">
          Project Portfolio
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition ${
                activeTab === tab.label
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200 p-6 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-3">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-medium mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 border border-gray-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-[15px] text-gray-700 leading-relaxed">
                {project.desc}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
              >
                View Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
