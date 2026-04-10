import PricingCard from "../components/PricingCard";
import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import pricingData from "../data/pricingData";

export default function Pricing() {
  return (
    <PageContainer>

      <SectionTitle title="Pricing Plans" />

      <div className="grid gap-8 md:grid-cols-3">
        {pricingData.map((plan, index) => (
          <Reveal key={plan.title} delay={0.08 * index} className="h-full">
            <PricingCard title={plan.title} price={plan.price} dark={plan.dark} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
