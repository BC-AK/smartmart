import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const stack = [
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
  {
    title: "AI",
    items: ["Scikit-learn"],
  },
];

export default function Technology() {
  return (
    <PageContainer>
      <SectionTitle title="Technology Stack" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stack.map((group, index) => (
          <Reveal key={group.title} delay={0.08 * index}>
            <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                {group.title}
              </p>
              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-stone-100 px-4 py-3 font-medium transition duration-300 hover:bg-stone-900 hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
