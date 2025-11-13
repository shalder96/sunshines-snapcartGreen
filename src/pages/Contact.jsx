import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="max-w-4xl min-h-screen p-6 py-16 mx-auto leading-relaxed text-gray-800 bg-green-100 dark:bg-gray-900 dark:text-green-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        🌿 Contact Us
      </h1>

      <p className="mb-6 text-sm text-gray-600 dark:text-green-200">
        <strong>We’d love to hear from you!</strong> Whether it’s a question,
        feedback, or collaboration idea — the SnapCart Green team is always here
        to help.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        📬 Get in Touch
      </h2>
      <p className="mb-6">
        You can reach us through the following ways:
        <br />
        📩{" "}
        <a
          href="mailto:support@snapcartgreen.com"
          className="text-green-600 underline"
        >
          support@snapcartgreen.com
        </a>
        <br />
        ☎️ +91-9XXXX-XXXXX (Mon–Sat, 9 AM – 6 PM)
        <br />
        🌐 <a href="https://www.snapcartgreen.com" className="text-green-600 underline">www.snapcartgreen.com</a>
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        💬 Send Us a Message
      </h2>
      <p className="mb-4">
        Use the form below to drop us a quick message — we usually reply within
        24 hours!
      </p>

      <form className="p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div>
          <label className="block mb-1 text-sm font-medium text-green-700 dark:text-green-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-green-700 dark:text-green-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-green-700 dark:text-green-300">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-white transition bg-green-600 rounded-md hover:bg-green-700"
        >
          Send Message 🌱
        </motion.button>
      </form>

      <h2 className="mt-10 mb-3 text-2xl font-semibold text-green-700">
        🪴 Visit Our Office
      </h2>
      <p>
        SnapCart Green HQ
        <br />
        42 Eco Lane, Greenfield Park,
        <br />
        Kolkata, India – 700001
      </p>

      <p className="mt-6 text-sm text-gray-600 dark:text-green-200">
        We’re open Monday to Saturday, 9:00 AM – 6:00 PM.
        <br />
        Drop by for a cup of herbal tea 🌿 and a chat about sustainability!
      </p>
    </motion.div>
  );
};

export default Contact;
