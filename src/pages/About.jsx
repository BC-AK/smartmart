import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";

const pillars = [
  "Smart supermarket automation for day-to-day retail operations.",
  "Barcode-based product intake for faster and more accurate entry.",
  "Stock intelligence for better visibility into inventory movement.",
  "Expiry control to reduce waste and protect customer trust.",
];

export default function About() {
  return (
    <PageContainer>
      <SectionTitle title="About Project" />

      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-gray-600">
            SmartMart AI is a barcode-based supermarket management project
            designed to modernize inventory intake, stock supervision, expiry
            alerts, billing, and sales reporting. The project focuses on
            reducing manual work while improving accuracy, responsiveness, and
            operational visibility across the retail workflow.
          </p>
        </div>

        <div className="rounded-3xl border bg-stone-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Core Themes
          </p>
          <div className="mt-6 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
