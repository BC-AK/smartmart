import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-sm">
            <ShoppingCart className="h-5 w-5" />
          </span>
          <span>SmartMart AI</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium text-gray-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition duration-300 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
