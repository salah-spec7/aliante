import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturedWork } from '@/components/FeaturedWork';
import { StrategicCollaborations } from '@/components/StrategicCollaborations';
import { CtaSection } from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Credibility />
      <ServicesSection />
      <FeaturedWork />
      <StrategicCollaborations />
      <CtaSection />
    </div>
  );
};

export default Index;
