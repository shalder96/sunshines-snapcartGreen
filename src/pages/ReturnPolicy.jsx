import React from "react";
import { motion } from "framer-motion";

const ReturnPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl min-h-screen p-6 py-16 mx-auto leading-relaxed text-gray-800 bg-green-100 dark:bg-gray-900 dark:text-green-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        🌿 Return & Refund Policy
      </h1>

      <p className="mb-6 text-sm text-gray-600">
        <strong>Effective Date:</strong> November 12, 2025
      </p>

      <p className="mb-6">
        At <strong>SnapCart Green</strong>, your satisfaction is our top
        priority. We’re committed to delivering healthy, eco-friendly, and
        sustainable products. If something doesn’t meet your expectations,
        here’s how our return and refund process works.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        1. Eligibility for Returns
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>
          Returns are accepted within <strong>7 days</strong> of delivery.
        </li>
        <li>
          The product must be unused, in its original packaging, and in the same
          condition as received.
        </li>
        <li>
          Perishable or live items (like plants or organic produce) can only be
          returned if they arrive <strong>damaged or unhealthy</strong>.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        2. Non-Returnable Items
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>Gift cards and coupons</li>
        <li>Items purchased during clearance or sale</li>
        <li>Opened or used eco-products (e.g., compost packs, seeds)</li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        3. Damaged or Wrong Products
      </h2>
      <p className="mb-6">
        If you receive a damaged, defective, or incorrect product, please
        contact us within <strong>48 hours</strong> of delivery.  
        Share photos or videos of the item and packaging at{" "}
        <a
          href="mailto:support@snapcartgreen.com"
          className="text-green-600 underline"
        >
          support@snapcartgreen.com
        </a>
        .  
        We’ll replace or refund your item as quickly as possible.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        4. Refunds
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>
          Once your return is approved and received, we’ll initiate a refund to
          your original payment method.
        </li>
        <li>Refunds usually reflect within 5–7 business days.</li>
        <li>Shipping charges are non-refundable unless the return is due to our error.</li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        5. Order Cancellations
      </h2>
      <p className="mb-6">
        You may cancel your order within <strong>2 hours</strong> of placing it,
        as long as it hasn’t been shipped. After dispatch, cancellations are not
        possible — but we’ll still help you with a return or exchange if needed.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        6. Need Help?
      </h2>
      <p className="mb-6">
        Our team is always here to make your green shopping experience smooth.
        Reach us at{" "}
        <a
          href="mailto:support@snapcartgreen.com"
          className="text-green-600 underline"
        >
          support@snapcartgreen.com
        </a>{" "}
        or call us (Mon–Sat, 10 AM–6 PM IST).
      </p>

    </motion.div>
  );
};

export default ReturnPolicy;
