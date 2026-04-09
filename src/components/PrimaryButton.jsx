export default function PrimaryButton({ text }) {
  return (
    <button className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition duration-300">
      {text}
    </button>
  );
}