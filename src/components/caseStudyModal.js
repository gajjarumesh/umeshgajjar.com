"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectCaseStudies } from "@/config";

export default function CaseStudyModal({ project }) {
  
  const filtered = projectCaseStudies.filter((p) =>
    p.title == project.title
  );

  return (
    <div className="relative">
      {/* Modal */}
      <AnimatePresence>
        {filtered?.title && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-800">
                  {filtered.title} — Case Study
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-red-500 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong>Overview:</strong> {filtered.caseStudy.overview}
                </p>
                <p>
                  <strong>Objectives:</strong> {filtered.caseStudy.objectives}
                </p>
                <p>
                  <strong>Role:</strong> {filtered.caseStudy.role}
                </p>

                <div>
                  <strong>Tech Rationale:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {filtered.caseStudy.techRationale.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Challenges:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {filtered.caseStudy.challenges.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {filtered.caseStudy.solutions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Impact:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {filtered.caseStudy.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
