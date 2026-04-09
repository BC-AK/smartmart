import PageContainer from "../components/PageContainer";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  return (
    <PageContainer>
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-950 via-slate-900 to-amber-900 px-8 py-20 text-center text-white shadow-2xl">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
            Smart Supermarket Automation
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            SmartMart AI
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-stone-200">
            Barcode-Based Supermarket Inventory, Expiry Alert, Billing and
            Sales Management System
          </p>

          <div className="mt-10 flex justify-center">
            <PrimaryButton text="Explore Project" />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Problem
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Manual retail operations create stock blind spots
          </h2>
          <p className="mt-4 text-gray-600">
            Supermarkets often struggle with inaccurate stock counts, delayed
            billing, and missed expiry checks when product handling depends on
            manual entry.
          </p>
        </article>

        <article className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Solution
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Barcode intelligence across intake, monitoring, and sales
          </h2>
          <p className="mt-4 text-gray-600">
            SmartMart AI connects barcode scanning, inventory tracking, expiry
            monitoring, billing, and analytics into one structured workflow.
          </p>
        </article>

        <article className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Outcome
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Faster decisions with better retail control
          </h2>
          <p className="mt-4 text-gray-600">
            The project improves visibility into stock movement, near-expiry
            products, payment history, and sales performance for modern
            supermarkets.
          </p>
        </article>
      </section>
    </PageContainer>
  );
}
