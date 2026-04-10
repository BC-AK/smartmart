import { motion as Motion } from "framer-motion";

export default function PageContainer({ children }) {
  return (
    <Motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20"
    >
      {children}
    </Motion.main>
  );
}
