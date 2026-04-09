export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold">SmartMart AI</h3>
          <p className="mt-3 max-w-sm text-sm text-gray-400">
            Barcode-based supermarket inventory, expiry alert, billing and
            sales management system.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
            Project Focus
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            Inventory intelligence, expiry control, billing automation, and
            actionable reporting for smart retail operations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
            Contact
          </h4>
          <p className="mt-3 text-sm text-gray-400">
            Academic project presentation for SmartMart AI
          </p>
          <p className="mt-2 text-sm text-gray-400">&copy; 2026 SmartMart AI</p>
        </div>
      </div>
    </footer>
  );
}
