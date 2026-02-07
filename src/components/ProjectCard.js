"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group relative overflow-hidden"
    >
      {/* Project Image with glass overlay */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100/40 to-indigo-100/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10" />
        
        {/* Icon placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-blue-300/40">
          <FaExternalLinkAlt className="text-6xl" />
        </div>

        {/* Hover Overlay with liquid effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm flex items-end p-6">
          <Link
            href={`/projects/${project.slug}`}
            className="text-white font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project Details
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <Badge color="purple" className="mb-3 glass-button text-xs">
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {project.shortDesc}
        </p>

        {/* Tech Stack with glass badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} className="text-xs bg-blue-50/60 text-blue-700 border border-blue-200/40 backdrop-blur-sm">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge className="text-xs bg-blue-50/60 text-blue-700 border border-blue-200/40 backdrop-blur-sm">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Featured Badge with glass */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Badge className="glass-button text-xs">
            Featured
          </Badge>
        </div>
      )}
    </motion.div>
  );
}
