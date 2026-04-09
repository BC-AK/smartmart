import PricingCard from "../components/PricingCard";
import SectionTitle from "../components/SectionTitle";
import PageContainer from "../components/PageContainer";
import pricingData from "../data/pricingData";

export default function Pricing() {
  return (
    <PageContainer>

      <SectionTitle title="Pricing Plans" />

      <div className="grid md:grid-cols-3 gap-8">

        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            dark={plan.dark}
          />
        ))}

      </div>

    </PageContainer>
  );
}