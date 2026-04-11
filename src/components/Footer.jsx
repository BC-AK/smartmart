import { Link } from "react-router-dom";
import projectLogo from "../assets/images/icon.png";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-amber-200/10 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 px-8 py-12 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={projectLogo}
              alt="SmartMart Logo"
              className="h-10 w-10 rounded-full border border-white/10 bg-white/90 p-1 shadow-sm"
            />
            <h2 className="text-2xl font-bold text-white">
              Smart<span className="text-amber-400">Mart AI</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-stone-300/90">
            SmartMart AI is an intelligent retail platform designed to streamline
            supermarket operations through automation and data-driven insights.
            From inventory tracking to billing and expiry alerts, it empowers
            retailers to operate efficiently and make smarter decisions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-amber-300">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="cursor-pointer transition duration-150 hover:text-amber-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer transition duration-150 hover:text-amber-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer transition duration-150 hover:text-amber-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-amber-300">
            CONTACT
          </h3>
          <p className="mb-2 text-sm text-stone-200">SMARTMART AI SOLUTIONS</p>
          <p className="mb-2 text-sm">
            Email: <span className="underline">info@smartmartai.com</span>
          </p>
          <p className="mb-2 text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Office Address: Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between border-t border-white/10 pt-4 text-sm text-stone-400 md:flex-row">
        <p>&copy; 2026 SmartMart AI. All rights reserved.</p>

        <div className="mt-2 flex gap-4 md:mt-0">
          <button type="button" className="cursor-pointer transition duration-150 hover:text-amber-200">
            Privacy Policy
          </button>
          <span>|</span>
          <button type="button" className="cursor-pointer transition duration-150 hover:text-amber-200">
            Terms
          </button>
          <span>|</span>
          <button
            type="button"
            className="cursor-pointer transition duration-150 hover:text-amber-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
