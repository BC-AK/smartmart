import PageContainer from "../components/PageContainer";
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
        {stack.map((group) => (
          <section key={group.title} className="rounded-3xl border bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              {group.title}
            </p>
            <div className="mt-6 space-y-3">
              {group.items.map((item) => (
                <div key={item} className="rounded-2xl bg-stone-100 px-4 py-3 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
