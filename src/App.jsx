import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Modules from "./pages/Modules";
import Workflow from "./pages/Workflow";
import Technology from "./pages/Technology";
import Future from "./pages/Future";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/future" element={<Future />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
