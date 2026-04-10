import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const modules = [
  {
    title: "Product Intake",
    description:
      "Registers incoming products through barcode scanning and structured item capture.",
  },
  {
    title: "Inventory Management",
    description:
      "Maintains product quantities, stock updates, and inventory consistency across the system.",
  },
  {
    title: "Expiry Alerts",
    description:
      "Tracks manufacturing and expiry timelines to highlight products needing immediate attention.",
  },
  {
    title: "Billing & Sales",
    description:
      "Handles checkout operations while keeping product movement tied to sales activity.",
  },
  {
    title: "Payment Tracking",
    description:
      "Records transaction methods and payment details for traceable billing operations.",
  },
  {
    title: "Reports",
    description:
      "Generates insights on stock position, expiry status, and sales performance for decision-making.",
  },
];

export default function Modules() {
  return (
    <PageContainer>
      <SectionTitle title="Core Modules" />

      <div className="mb-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Platform Structure
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-slate-900">
              Each module supports one connected supermarket operating flow
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-gray-600">
              Borrowing from enterprise SaaS presentation patterns, this page
              now introduces the modules as parts of a unified retail system,
              not as isolated features. That makes the architecture feel more
              credible and product-like.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              System Outcomes
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {[
                ["Intake speed", "Faster barcode capture"],
                ["Stock clarity", "Live movement awareness"],
                ["Decision support", "Billing and reporting visibility"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/6 px-5 py-4 transition duration-300 hover:border-amber-300/30 hover:bg-white/10"
                >
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-stone-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module, index) => (
          <Reveal key={module.title} delay={0.06 * index}>
            <article className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-stone-300 hover:shadow-2xl hover:shadow-stone-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Module {index + 1}
              </p>
              <h2 className="mt-4 text-2xl font-bold">{module.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{module.description}</p>
              <div className="mt-6 h-1.5 w-12 rounded-full bg-gradient-to-r from-stone-900 via-amber-500 to-orange-500 transition-all duration-300 group-hover:w-24" />
            </article>
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
