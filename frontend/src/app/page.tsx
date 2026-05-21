import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ItineraryBuilder } from '@/components/ItineraryBuilder';
import { TravelerMatching } from '@/components/TravelerMatching';
import { RealTimeInsights } from '@/components/RealTimeInsights';
import { MemoryCapsule } from '@/components/MemoryCapsule';
import { Testimonials } from '@/components/Testimonials';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <ItineraryBuilder />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <TravelerMatching />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <RealTimeInsights />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <MemoryCapsule />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <CallToAction />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}
