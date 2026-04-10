import { motion as Motion } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Boxes,
  Lightbulb,
  ScanLine,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import whoWeAreImage from "../assets/images/smartmartpic.png";
import PageContainer from "../components/PageContainer";
import PrimaryButton from "../components/PrimaryButton";
import Reveal from "../components/Reveal";

const serviceCards = [
  {
    icon: ScanLine,
    title: "Barcode Intake",
    description:
      "Register products faster with barcode-based capture and more structured item entry.",
  },
  {
    icon: Boxes,
    title: "Inventory Monitoring",
    description:
      "Track product movement and maintain clearer visibility into current stock levels.",
  },
  {
    icon: BellRing,
    title: "Expiry Alerts",
    description:
      "Identify near-expiry and expired items early so teams can take action in time.",
  },
  {
    icon: BarChart3,
    title: "Billing & Reports",
    description:
      "Connect checkout activity with reporting insights for faster retail decision-making.",
  },
];

const foundationCards = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To build a practical supermarket platform that simplifies intake, tracking, expiry monitoring, and daily sales workflows.",
    quote: "\"Simplify retail work without losing control.\"",
    style: "bg-stone-950 text-white border-stone-950",
    quoteStyle: "text-amber-300",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To shape a future where supermarket operations are smarter, faster, and guided by clear real-time visibility.",
    quote: "\"A smarter store starts with clearer visibility.\"",
    style: "bg-white text-slate-900 border-stone-200",
    quoteStyle: "text-amber-700",
  },
  {
    icon: ShieldCheck,
    title: "Values",
    description:
      "We value accuracy, usability, trust, and systems that genuinely help teams perform everyday retail tasks better.",
    quote: "\"Reliable systems create confident teams.\"",
    style: "bg-amber-50 text-slate-900 border-amber-200",
    quoteStyle: "text-amber-800",
  },
];

export default function Home() {
  return (
    <PageContainer>
      <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Who We Are
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              SmartMart AI is built to make retail workflows smarter and more manageable
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              We are creating a practical smart-retail platform for supermarkets
              that need better speed, accuracy, and visibility. SmartMart AI
              brings barcode intake, inventory tracking, expiry awareness, and
              billing support into one connected workflow.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Our goal is to reduce manual friction and help store teams work
              with more confidence, cleaner data, and faster daily decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/modules">
                <PrimaryButton text="Explore Project" />
              </Link>
              <Link
                to="/workflow"
                className="inline-flex items-center rounded-2xl border border-stone-300 bg-stone-50 px-6 py-3 font-medium text-slate-800 transition duration-300 hover:border-stone-500 hover:bg-white"
              >
                View Workflow
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 via-white to-amber-50 p-5 shadow-sm">
            <Motion.div
              className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-amber-300/30 blur-2xl"
              animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <Motion.div
              className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-sky-200/40 blur-2xl"
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <Motion.img
              src={whoWeAreImage}
              alt="SmartMart AI team collaboration illustration"
              className="relative z-10 w-full rounded-[1.75rem] border border-stone-200 bg-white/80 p-3 shadow-sm"
              animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -6 }}
            />

            <Motion.div
              className="absolute right-6 top-6 z-20 rounded-3xl border border-white/60 bg-white/85 px-4 py-3 shadow-lg backdrop-blur"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                Team Focus
              </p>
              <p className="mt-2 text-sm text-gray-600">Inventory + expiry + billing</p>
            </Motion.div>

            <Motion.div
              className="absolute bottom-6 left-6 z-20 rounded-3xl border border-stone-200 bg-white/92 px-4 py-3 shadow-lg"
              animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Retail Flow
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">Practical store automation</p>
            </Motion.div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Problem",
              title: "Manual retail operations create stock blind spots",
              description:
                "Supermarkets often struggle with inaccurate stock counts, delayed billing, and missed expiry checks when product handling depends on manual entry.",
            },
            {
              label: "Solution",
              title: "Barcode intelligence across intake, monitoring, and sales",
              description:
                "SmartMart AI connects barcode scanning, inventory tracking, expiry monitoring, billing, and analytics into one structured workflow.",
            },
            {
              label: "Outcome",
              title: "Faster decisions with better retail control",
              description:
                "The project improves visibility into stock movement, near-expiry products, payment history, and sales performance for modern supermarkets.",
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index} className="h-full">
              <Motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="flex h-full flex-col rounded-[1.8rem] border border-stone-200 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-stone-200/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {item.label}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-gray-600">{item.description}</p>
              </Motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our Services
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              What SmartMart AI Delivers
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={0.08 * index} className="h-full">
                <Motion.article
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="flex h-full flex-col rounded-[1.8rem] border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:border-stone-300 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-gray-600">{card.description}</p>
                </Motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our Foundation
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              The ideas that guide SmartMart AI
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {foundationCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={0.1 * index} className="h-full">
                <Motion.article
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className={`flex h-full flex-col rounded-[2rem] border p-8 shadow-sm ${card.style}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-3xl font-bold">{card.title}</h3>
                  <p className="mt-4 flex-1 leading-8 opacity-90">{card.description}</p>
                  <div className="mt-6 rounded-3xl border border-current/10 bg-white/10 px-5 py-4">
                    <p className={`text-sm font-semibold italic ${card.quoteStyle}`}>
                      {card.quote}
                    </p>
                  </div>
                </Motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}
