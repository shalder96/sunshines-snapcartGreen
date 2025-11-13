import React from "react";
import { motion } from "framer-motion";

const DeliveryInfo = () => {
  return (
    <motion.div
      className="max-w-4xl min-h-screen p-6 py-16 mx-auto leading-relaxed text-gray-800 bg-green-100 dark:bg-gray-900 dark:text-green-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        🚚 Delivery Information
      </h1>

      <p className="mb-6 text-sm text-gray-600 dark:text-green-200">
        <strong>Effective Date:</strong> November 12, 2025
      </p>

      <p className="mb-6">
        At <strong>SnapCart Green</strong>, we’re dedicated to delivering your
        eco-friendly products safely, sustainably, and on time — right to your
        doorstep.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        1. Delivery Coverage
      </h2>
      <p className="mb-6">
        We currently deliver across major cities and towns in India. If your
        area isn’t covered yet, don’t worry — we’re expanding rapidly! You’ll
        see delivery availability at checkout.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        2. Delivery Time
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>
          <strong>Standard Delivery:</strong> 3–7 business days after order
          confirmation.
        </li>
        <li>
          <strong>Express Delivery:</strong> 1–3 business days (available in
          select areas).
        </li>
        <li>
          Orders placed on weekends or holidays are processed on the next
          business day.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        3. Shipping Charges
      </h2>
      <ul className="pl-6 mb-6 space-y-1 list-disc">
        <li>Free delivery on orders above ₹999.</li>
        <li>
          A small delivery fee may apply to smaller orders or fragile items like
          live plants.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        4. Eco-Friendly Packaging
      </h2>
      <p className="mb-6">
        We take sustainability seriously — all products are packaged using{" "}
        <strong>biodegradable, recyclable, or compostable materials</strong> to
        minimize waste and promote eco-living.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        5. Delivery Restrictions
      </h2>
      <p className="mb-6">
        Certain items (such as delicate live plants) may not be deliverable in
        remote regions due to handling or climate conditions. You’ll be
        notified during checkout if this applies to your order.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        6. Order Tracking
      </h2>
      <p className="mb-6">
        Once your order ships, you’ll receive a{" "}
        <strong>tracking link via email or SMS</strong>. You can monitor your
        order’s progress and expected delivery time anytime.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        7. Customer Support
      </h2>
      <p className="mb-6">
        For any delivery-related queries, reach out to us:
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
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-green-700">
        8. Our Promise
      </h2>
      <p>
        Every order is handled with care and love — from our greenhouses to your
        home. If your package arrives damaged or delayed, we’ll make it right.
        That’s our <strong>Green Promise</strong>. 💚
      </p>
    </motion.div>
  );
};

export default DeliveryInfo;
