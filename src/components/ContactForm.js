"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea, Select, Button } from "@/components/ui";
import { CONTACT_OPTIONS } from "@/lib/constants";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-() ]*$/, "Invalid phone number")
    .min(10, "Phone number must be at least 10 digits"),
  projectType: Yup.string().required("Please select a project type"),
  budgetRange: Yup.string().required("Please select a budget range"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budgetRange: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // TODO: Replace with actual API call
        console.log("Form submitted:", values);

        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I'll get back to you within 24 hours.",
        });
        resetForm();
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message:
            "Oops! Something went wrong. Please try again or email me directly.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Success/Error Message */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus.type === "success" ? (
            <FaCheckCircle className="text-xl mt-0.5 flex-shrink-0" />
          ) : (
            <FaExclamationCircle className="text-xl mt-0.5 flex-shrink-0" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            required
          />
        </div>

        {/* Email */}
        <div>
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Type */}
        <div>
          <Select
            label="Project Type"
            name="projectType"
            value={formik.values.projectType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.projectType && formik.errors.projectType}
            options={CONTACT_OPTIONS.projectTypes.map((type) => ({
              value: type,
              label: type,
            }))}
            required
          />
        </div>

        {/* Budget Range */}
        <div>
          <Select
            label="Budget Range"
            name="budgetRange"
            value={formik.values.budgetRange}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.budgetRange && formik.errors.budgetRange}
            options={CONTACT_OPTIONS.budgetRanges.map((range) => ({
              value: range,
              label: range,
            }))}
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Textarea
          label="Project Details"
          name="message"
          placeholder="Tell me about your project, goals, and timeline..."
          rows={6}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && formik.errors.message}
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={formik.isSubmitting}
        className="w-full"
      >
        {formik.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
