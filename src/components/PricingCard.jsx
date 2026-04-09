export default function PricingCard({ title, price, dark }) {
  return (
    <div
      className={`p-8 rounded-3xl shadow border hover:-translate-y-2 hover:shadow-2xl transition duration-300 ${
        dark ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-4xl font-bold mb-6">{price}</p>

      <button
        className={`w-full py-3 rounded-xl ${
          dark ? "bg-white text-black" : "border"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}