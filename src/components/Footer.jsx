import { motion as Motion } from "framer-motion";
import projectLogo from "../assets/images/icon.png";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200/80 bg-gradient-to-br from-stone-950 via-stone-900 to-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-14 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:px-10 md:py-16">
        <Motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
          <div className="flex items-center gap-4">
            <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-white/70 bg-white shadow-[0_22px_50px_-30px_rgba(134,215,233,0.85)]">
              <img
                src={projectLogo}
                alt="SmartMart AI logo"
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <h3 className="text-3xl font-bold">SmartMart AI</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-sky-200">
                Smarter Retail Flow
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-base leading-7 text-gray-400">
            Barcode-based supermarket inventory, expiry alert, billing and
            sales management system.
          </p>
        </Motion.div>

        <Motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
            Project Focus
          </h4>
          <p className="mt-4 text-base leading-7 text-gray-400">
            Inventory intelligence, expiry control, billing automation, and
            actionable reporting for smart retail operations.
          </p>
        </Motion.div>

        <Motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
            Contact
          </h4>
          <p className="mt-4 text-base leading-7 text-gray-400">
            Academic project presentation for SmartMart AI
          </p>
          <p className="mt-3 text-base text-gray-400">&copy; 2026 SmartMart AI</p>
        </Motion.div>
      </div>
    </footer>
  );
}
