import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/future" element={<Future />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
