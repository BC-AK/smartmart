import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Lightbulb,
  ScanLine,
  ShieldCheck,
  Users,
} from "lucide-react";

import aboutPlatformImage from "../assets/images/about.png";
import aboutPicOne from "../assets/images/about_pic1.png";
import aboutPicTwo from "../assets/images/about_pic2.png";
import aboutPicThree from "../assets/images/about_pic3.png";
import aboutPicFour from "../assets/images/about_pic4.png";

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

const sectionTwoImages = [
  {
    src: aboutPicOne,
    alt: "Retail operations presentation view",
    title: "Retail Operations",
  },
  {
    src: aboutPicTwo,
    alt: "Inventory and workflow presentation view",
    title: "Inventory Workflow",
  },
  {
    src: aboutPicThree,
    alt: "SmartMart AI project display",
    title: "Smart Display",
  },
  {
    src: aboutPicFour,
    alt: "Supermarket technology showcase",
    title: "Store Intelligence",
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
              <h1 className="text-5xl font-extrabold tracking-wide text-amber-700 font-serif md:text-6xl">
                About Our Platform
              </h1>

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
                  <Motion.div
                    key={point}
                    whileHover={{ x: 8, y: -3, scale: 1.01 }}
                    transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm transition duration-100 hover:border-amber-300 hover:bg-amber-50/80 hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-amber-600 transition duration-100 group-hover:scale-110 group-hover:text-amber-700" />
                    <p className="text-gray-700 transition duration-100 group-hover:text-slate-900">
                      {point}
                    </p>
                  </Motion.div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-white via-slate-50 to-amber-50 p-4 shadow-[0_28px_70px_-40px_rgba(17,78,122,0.4)]">
              <Motion.div
                className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl"
                animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Motion.div
                className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-sky-200/40 blur-3xl"
                animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative min-h-[388px] overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/70 shadow-sm backdrop-blur-sm">
                <Motion.img
                  src={aboutPlatformImage}
                  alt="About platform overview"
                  className="h-full w-full object-cover"
                  animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-white/10" />
              </div>

            </div>
          </section>
        </Reveal>

        {/* SECTION 2 */}
        <Reveal delay={0.05}>
          <section className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-wide text-amber-700 font-serif md:text-6xl">
                About Smartmart-ai
              </h1>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                A smart retail concept built around real store needs
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                Smartmart-ai focuses on making supermarket workflows more
                accurate, more responsive, and easier to manage.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-slate-50 py-5 shadow-sm">
              <div className="about-image-slider-track flex w-max gap-5">
                {[...sectionTwoImages, ...sectionTwoImages].map((image, index) => (
                  <div
                    key={`${image.title}-${index}`}
                    className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm sm:w-[360px] lg:w-[460px]"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <p className="font-bold text-slate-900">{image.title}</p>
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* SECTION 3 */}
        <Reveal delay={0.1}>
          <section>
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-wide text-amber-700 font-serif md:text-6xl">
                Our Story
              </h1>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                From everyday supermarket problems to a smarter platform idea
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {storySteps.map((step, index) => (
                <Motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-md shadow-stone-200/60 transition duration-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/60"
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
            <h1 className="text-5xl font-extrabold tracking-wide text-amber-700 font-serif md:text-6xl">
              What We Do
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-2xl border border-stone-200 bg-gray-50 p-6 shadow-md shadow-stone-200/40 transition duration-100 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:shadow-amber-100/60"
                  >
                    <Icon className="h-6 w-6 text-stone-900 transition duration-100 group-hover:scale-110 group-hover:text-amber-700" />
                    <h3 className="mt-3 font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </Motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3 rounded-xl bg-amber-50 p-4">
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
