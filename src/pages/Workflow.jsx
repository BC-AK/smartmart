import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";

const workflowSteps = [
  "Scan Barcode",
  "Fetch Product",
  "Save Inventory",
  "Monitor Expiry",
  "Billing",
  "Reports",
];

export default function Workflow() {
  return (
    <PageContainer>
      <SectionTitle title="System Workflow" />

      <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {workflowSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl bg-gradient-to-br from-stone-950 via-slate-900 to-amber-900 p-6 text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                Step {index + 1}
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight">{step}</h2>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-8 text-gray-600">
          The workflow follows a clear retail lifecycle: scan the barcode,
          fetch product data, save it into inventory, monitor expiry conditions,
          complete billing, and generate reports for management insight.
        </p>
      </div>
    </PageContainer>
  );
}
