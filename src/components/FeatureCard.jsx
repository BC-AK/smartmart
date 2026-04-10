import { motion as Motion } from "framer-motion";

export default function FeatureCard({ title, description }) {
  return (
    <Motion.div
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:border-stone-300 hover:shadow-2xl hover:shadow-amber-100/60"
    >
      <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-stone-900 transition duration-300 group-hover:w-20" />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="flex-1 text-gray-600 leading-7">{description}</p>
    </Motion.div>
  );
}
