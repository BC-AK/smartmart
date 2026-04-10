import FeatureCard from "../components/FeatureCard";
import PageContainer from "../components/PageContainer";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import featuresData from "../data/featuresData";

export default function Features() {
  return (
    <PageContainer>

      <SectionTitle title="Features" />

      <div className="grid gap-8 md:grid-cols-3">
        {featuresData.map((feature, index) => (
          <Reveal key={feature.title} delay={0.08 * index} className="h-full">
            <FeatureCard title={feature.title} description={feature.description} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
