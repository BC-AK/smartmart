import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";

const enhancements = [
  "Machine learning based demand prediction for smarter stock planning.",
  "Advanced expiry prediction to prioritize action before product loss occurs.",
  "Supplier automation for reorder coordination and purchase workflow support.",
  "Mobile support for flexible monitoring and management on the go.",
];

export default function Future() {
  return (
    <PageContainer>
      <SectionTitle title="Future Enhancements" />

      <div className="grid gap-6 md:grid-cols-2">
        {enhancements.map((item, index) => (
          <article key={item} className="rounded-3xl border bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Future Scope {index + 1}
            </p>
            <p className="mt-4 text-xl font-semibold leading-8 text-slate-900">{item}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
