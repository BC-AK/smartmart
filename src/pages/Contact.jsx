import { motion as Motion } from "framer-motion";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
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
          <section className="rounded-3xl bg-stone-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
              Project Presentation
            </p>
            <h2 className="mt-6 text-3xl font-bold">
              SmartMart AI academic and portfolio showcase
            </h2>
            <p className="mt-4 leading-8 text-stone-300">
              This website presents the SmartMart AI project as a professional
              concept for barcode-based supermarket inventory, expiry alert,
              billing, and sales intelligence.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-stone-200 bg-white p-10 shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 p-4 transition duration-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 p-4 transition duration-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
            <textarea
              name="message"
              placeholder="Project Discussion"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 p-4 transition duration-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
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
              className="w-full rounded-xl bg-stone-900 py-4 text-white shadow-lg shadow-stone-900/10 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-500"
            >
              {isSending ? "Sending..." : "Send Message"}
            </Motion.button>
          </form>
        </Reveal>
      </div>
    </PageContainer>
  );
}
