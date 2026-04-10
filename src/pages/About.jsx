import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Flag,
  Lightbulb,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import aboutPlatformImage from "../assets/images/about.png";
import smartmartScene from "../assets/images/smartmartpic.png"; // ✅ REQUIRED

import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";

const platformPoints = [
  "Built for smarter inventory, expiry, billing, and sales coordination.",
  "Transforms manual supermarket work into a more connected digital flow.",
  "Designed to help store teams act faster with clearer operational signals.",
];

const storySteps = [
  {
    title: "Started from a real retail problem",
    description:
      "SmartMart AI began with the need to reduce manual stock entry, billing delays, and missed expiry checks in supermarkets.",
  },
  {
    title: "Shaped into a connected platform idea",
    description:
      "The project evolved into one system where barcode intake, stock movement, expiry alerts, and reporting all support each other.",
  },
  {
    title: "Presented as a modern store operations concept",
    description:
      "Today it is positioned as a practical AI-assisted platform idea for cleaner retail workflows and better decisions.",
  },
];

const capabilities = [
  {
    icon: ScanLine,
    title: "Barcode Intake",
    description: "Capture product details faster and reduce repetitive entry work.",
  },
  {
    icon: Boxes,
    title: "Inventory Control",
    description: "Track product movement and keep store stock more visible.",
  },
  {
    icon: ShieldCheck,
    title: "Expiry Monitoring",
    description: "Highlight products that need action before waste becomes loss.",
  },
  {
    icon: Users,
    title: "Retail Support",
    description:
      "Help store teams and managers work from one clearer operational view.",
  },
];

export default function About() {
  return (
    <PageContainer>
      <div className="space-y-20">

        {/* SECTION 1 */}
        <Reveal>
          <section className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-amber-700">
                <Sparkles className="h-4 w-4" />
                About Our Platform
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                SmartMart AI brings supermarket operations into one smarter flow
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                SmartMart AI is designed as a retail operations platform that
                connects barcode-based intake, inventory visibility, expiry
                alerts, billing, and reporting into one system.
              </p>

              <div className="mt-8 space-y-4">
                {platformPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-amber-600" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <Motion.img
                src={aboutPlatformImage}
                alt="About"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </section>
        </Reveal>

        {/* SECTION 2 */}
        <Reveal delay={0.05}>
          <section className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-700">
                About Smartmart-ai
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                A smart retail concept built around real store needs
              </h2>

              <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                Smartmart-ai focuses on making supermarket workflows more
                accurate, more responsive, and easier to manage.
              </p>
            </div>

            {/* IMAGE */}
            <div className="mt-10 overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-900 to-amber-900 p-4">
              <Motion.img
                src={smartmartScene}
                alt="Smartmart"
                className="w-full max-w-5xl mx-auto object-contain rounded-xl"
              />
            </div>
          </section>
        </Reveal>

        {/* SECTION 3 */}
        <Reveal delay={0.1}>
          <section>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase text-amber-700">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                From everyday supermarket problems to a smarter platform idea
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {storySteps.map((step, index) => (
                <Motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="p-6 border rounded-2xl bg-white shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-xl font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>

                  <div className="mt-4 flex items-center text-amber-600">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* SECTION 4 */}
        <Reveal delay={0.14}>
          <section className="rounded-2xl border bg-white p-8">
            <h2 className="text-3xl font-bold text-slate-900">
              What We Do
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 border rounded-2xl bg-gray-50"
                  >
                    <Icon className="h-6 w-6 text-stone-900" />
                    <h3 className="mt-3 font-bold">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-xl flex gap-3">
              <Lightbulb className="text-amber-700" />
              <p className="text-sm text-amber-900">
                SmartMart AI is about creating a smarter supermarket experience.
              </p>
            </div>
          </section>
        </Reveal>

      </div>
    </PageContainer>
  );
}
