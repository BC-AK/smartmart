import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
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
          <Reveal key={item} delay={0.08 * index}>
            <article className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Future Scope {index + 1}
              </p>
              <p className="mt-4 text-xl font-semibold leading-8 text-slate-900">{item}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
