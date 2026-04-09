import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";

export default function Dashboard() {
  return (
    <PageContainer>

      <SectionTitle title="Operational Dashboard" />

      <div className="grid md:grid-cols-4 gap-6">

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-bold">Products</h3>
          <p className="text-3xl mt-2">2,450</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-bold">Low Stock</h3>
          <p className="text-3xl mt-2">42</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-bold">Expiry Alerts</h3>
          <p className="text-3xl mt-2">18</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-bold">Today's Sales</h3>
          <p className="text-3xl mt-2">₹84,500</p>
        </div>

      </div>

    </PageContainer>
  );
}