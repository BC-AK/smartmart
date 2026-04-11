import { motion as Motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = "balachandark47@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phoneNumber, message } = formData;

    if (!name.trim() || !email.trim() || !phoneNumber.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number (at least 10 digits).",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS keys to the local environment file.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: "balachandark47@gmail.com",
            from_name: name,
            reply_to: email,
            phone_number: phoneNumber,
            message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Email request failed");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. It has been forwarded by email.",
      });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to send the message right now. Please check the EmailJS configuration and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageContainer>
      <SectionTitle title="Contact" />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <section className="relative overflow-hidden rounded-3xl bg-stone-950 p-8 text-white shadow-sm flex flex-col justify-between h-full">
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                Get in Touch
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-tight">
                Let's talk about the future of retail.
              </h2>
              <p className="mt-4 leading-relaxed text-stone-300">
                Whether you have a question about SmartMart's inventory features,
                want to request a personalized demo, or just want to say hi, we'd
                love to hear from you.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-5 text-stone-300 transition duration-300 hover:text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-900 border border-stone-800 shadow-inner">
                    <Mail className="h-5 w-5 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Email Us</p>
                    <p className="font-medium text-lg">balachandark47@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 text-stone-300 transition duration-300 hover:text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-900 border border-stone-800 shadow-inner">
                    <Phone className="h-5 w-5 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Call Us</p>
                    <p className="font-medium text-lg">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-stone-300 transition duration-300 hover:text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-900 border border-stone-800 shadow-inner">
                    <MapPin className="h-5 w-5 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Location</p>
                    <p className="font-medium text-lg">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center space-y-6 rounded-3xl border border-stone-200 bg-white p-10 shadow-sm h-full"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-stone-700">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 p-4 transition duration-300 hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-stone-700">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 p-4 transition duration-300 hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-semibold text-stone-700">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="+91 9876543210"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 p-4 transition duration-300 hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-stone-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you today?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 p-4 transition duration-300 hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            {status.message ? (
              <Motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={
                  status.type === "success"
                    ? "text-sm font-medium text-green-700"
                    : "text-sm font-medium text-red-600"
                }
              >
                {status.message}
              </Motion.p>
            ) : null}

            <Motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-stone-900 py-4 text-white shadow-lg shadow-stone-900/10 transition duration-300 hover:bg-stone-800 hover:shadow-stone-900/20 disabled:cursor-not-allowed disabled:bg-stone-500"
            >
              <span className="font-semibold tracking-wide">{isSending ? "Sending..." : "Send Message"}</span>
              {!isSending && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
            </Motion.button>
          </form>
        </Reveal>
      </div>
    </PageContainer>
  );
}
