import FeatureCard from "../components/FeatureCard";
import SectionTitle from "../components/SectionTitle";
import PageContainer from "../components/PageContainer";
import featuresData from "../data/featuresData";

export default function Features() {
  return (
    <PageContainer>

      <SectionTitle title="Features" />

      <div className="grid md:grid-cols-3 gap-8">

        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </PageContainer>
  );
}