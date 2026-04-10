import { motion as Motion } from "framer-motion";

export default function PricingCard({ title, price, dark }) {
  return (
    <Motion.div
      whileHover={{ y: -12, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 shadow-sm transition duration-300 hover:shadow-2xl ${
        dark ? "border-stone-800/40 bg-stone-950 text-white" : "bg-white"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
          dark
            ? "from-amber-300 via-orange-400 to-white"
            : "from-stone-900 via-amber-500 to-orange-500"
        }`}
      />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="mb-6 text-4xl font-bold">{price}</p>

      <Motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-auto w-full rounded-xl py-3 font-medium transition ${
          dark ? "bg-white text-stone-900 hover:bg-stone-100" : "border border-stone-300 hover:border-stone-500"
        }`}
      >
        Choose Plan
      </Motion.button>
    </Motion.div>
  );
}
