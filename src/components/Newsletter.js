"use client";

import { useState } from "react";
import { Input, Button } from "@/components/ui";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Replace with actual API call to newsletter service
      console.log("Newsletter subscription:", email);

      setStatus({
        type: "success",
        message: "Thank you for subscribing! Check your email for confirmation.",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="whitespace-nowrap"
          >
            {isSubmitting ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe
                <FaPaperPlane className="ml-2 text-sm" />
              </>
            )}
          </Button>
        </div>

        {/* Status Message */}
        {status && (
          <div
            className={`flex items-center gap-2 text-sm ${
              status.type === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {status.type === "success" && <FaCheckCircle />}
            <span>{status.message}</span>
          </div>
        )}
      </form>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
        I respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
