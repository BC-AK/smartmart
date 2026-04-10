import { motion as Motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  amount = 0.2,
}) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Motion.div>
  );
}
