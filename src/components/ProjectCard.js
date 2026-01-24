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
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <FaExternalLinkAlt className="text-6xl" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
        <Badge color="purple" className="mb-3">
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.shortDesc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} color="gray" className="text-xs border border-gray-300">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge color="gray" className="text-xs border border-gray-300">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" color="blue">
            Featured
          </Badge>
        </div>
      )}
    </motion.div>
  );
}
