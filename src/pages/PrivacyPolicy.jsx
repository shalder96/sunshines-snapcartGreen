import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl min-h-screen p-6 py-16 mx-auto leading-relaxed text-gray-800 bg-green-100 dark:bg-gray-900 dark:text-green-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        🌿 Privacy Policy
      </h1>

      <p className="mb-6 text-sm text-gray-600 dark:text-green-200">
        <strong>Effective Date:</strong> November 12, 2025
      </p>

      <p className="mb-6">
        Welcome to <strong>SnapCart Green</strong>! Your privacy matters deeply
        to us. This policy explains how we collect, use, and protect your data
        when you visit or make a purchase on our website.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        1. Information We Collect
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>
          <strong>Personal Information:</strong> Name, email, phone number,
          address, and payment details.
        </li>
        <li>
          <strong>Non-Personal Data:</strong> Browser info, IP address, and
          website usage statistics.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        2. How We Use Your Information
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>To process and deliver your orders</li>
        <li>To communicate order updates or support</li>
        <li>To improve user experience and website functionality</li>
        <li>To send promotional offers (only if you opt in)</li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        3. Payment & Security
      </h2>
      <p className="mb-6">
        We use secure payment gateways like Razorpay or Stripe. Your card
        details are never stored on our servers. Data is encrypted using SSL to
        ensure maximum safety.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        4. Cookies
      </h2>
      <p className="mb-6">
        We use cookies to personalize your experience and improve performance.
        You can manage cookie settings in your browser. However, some site
        features may not work properly if cookies are disabled.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        5. Sharing Your Data
      </h2>
      <p className="mb-6">
        We never sell or rent your data. We may share it with trusted partners
        (delivery, payment, analytics) solely for business purposes and only
        under strict privacy agreements.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        6. Your Rights
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>Access or request a copy of your stored data</li>
        <li>Request correction or deletion of your information</li>
        <li>Opt out of promotional communications anytime</li>
      </ul>

      <p className="mb-6">
        To exercise your rights, contact us at{" "}
        <a
          href="mailto:support@snapcartgreen.com"
          className="text-green-600 underline"
        >
          support@snapcartgreen.com
        </a>
        .
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        7. Policy Updates
      </h2>
      <p className="mb-6">
        We may update this policy occasionally. The latest version will always
        be posted on this page with a revised “Effective Date”.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        8. Contact Us
      </h2>
      <p>
        Have questions about privacy or data protection? Reach out to us:
        <br />
        📩 <strong>support@snapcartgreen.com</strong>
        <br />
        🌐 <strong>www.snapcartgreen.com</strong>
      </p>

    </motion.div>
  );
};

export default PrivacyPolicy;
