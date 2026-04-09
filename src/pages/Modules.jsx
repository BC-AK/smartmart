import PageContainer from "../components/PageContainer";
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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module, index) => (
          <article key={module.title} className="rounded-3xl border bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Module {index + 1}
            </p>
            <h2 className="mt-4 text-2xl font-bold">{module.title}</h2>
            <p className="mt-4 leading-7 text-gray-600">{module.description}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
