"use client";

import { motion } from "framer-motion";
import {
  Hero,
  ServicesOverview,
  TechStack,
  FeaturedProjects,
  Process,
  Stats,
  Testimonials,
  CTASection,
  ContactForm,
  ScrollToTop,
} from "@/components";
import FeaturedBlog from "@/components/sections/FeaturedBlog";
import Section from "@/components/layouts/Section";

export default function Home() {
  return (
    <>
      {/* Main Content with Page Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="scroll-smooth"
      >
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Overview */}
        <ServicesOverview />

        {/* 3. Tech Stack Showcase */}
        <TechStack />

        {/* 4. Featured Projects */}
        <FeaturedProjects />

        {/* 5. Featured Blog Posts */}
        <FeaturedBlog />

        {/* 6. Process Section */}
        <Process />

        {/* 7. Stats Counter */}
        <Stats />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. CTA Section */}
        <CTASection />

        {/* 10. Contact Form */}
        <Section id="contact" background="gradient">
          <ContactForm />
        </Section>
      </motion.div>

      {/* 11. Scroll To Top Button */}
      <ScrollToTop />
    </>
  );
}
