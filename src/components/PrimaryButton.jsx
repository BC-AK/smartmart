import { motion as Motion } from "framer-motion";

export default function PrimaryButton({ text, type = "button", className = "" }) {
  return (
    <Motion.button
      type={type}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`group inline-flex items-center gap-3 rounded-2xl bg-stone-900 px-6 py-3 text-white shadow-lg shadow-stone-900/15 transition duration-300 hover:bg-stone-800 ${className}`}
    >
      <span>{text}</span>
      <Motion.span
        aria-hidden="true"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
      >
        →
      </Motion.span>
    </Motion.button>
  );
}
