import { motion as Motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import projectLogo from "../assets/images/icon.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/modules", label: "Modules" },
  { to: "/workflow", label: "Workflow" },
  { to: "/future", label: "Future Scope" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/75 backdrop-blur-xl shadow-[0_18px_45px_-35px_rgba(15,79,125,0.65)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-stone-900">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_16px_30px_-20px_rgba(15,79,125,0.65)] ring-1 ring-stone-200">
              <img
                src={projectLogo}
                alt="SmartMart AI logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span>SmartMart AI</span>
          </Link>
        </Motion.div>

        <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-gray-600 lg:justify-end">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative shrink-0 rounded-full px-4 py-2.5 transition duration-300 ${
                  isActive
                    ? "bg-sky-200/80 text-stone-900 shadow-md shadow-sky-200/40 ring-1 ring-white/70"
                    : "hover:bg-white/90 hover:text-stone-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <Motion.span
                    className={`absolute inset-x-4 bottom-1 h-0.5 rounded-full ${
                      isActive ? "bg-stone-800" : "bg-amber-500/70"
                    }`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ originX: 0.5 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
