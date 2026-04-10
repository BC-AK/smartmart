import { motion as Motion } from "framer-motion";

export default function SectionTitle({ title }) {
  return (
    <Motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 text-center text-4xl font-bold tracking-tight md:text-5xl"
    >
      {title}
    </Motion.h2>
  );
}
