export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow border hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}