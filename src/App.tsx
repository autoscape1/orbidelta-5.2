/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { RestaurantSegment } from './data/agencyData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { MethodSection } from './components/MethodSection';
import { EntryOfferSection } from './components/EntryOfferSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FaqSection } from './components/FaqSection';
import { DiagnosticSection } from './components/DiagnosticSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [segment, setSegment] = useState<RestaurantSegment>('Pizzaria');

  const scrollToSection = (sectionId: string, focusInputId?: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (focusInputId) {
      const input = document.getElementById(focusInputId);
      if (input instanceof HTMLInputElement) {
        window.setTimeout(() => input.focus({ preventScroll: true }), 400);
      }
    }
  };

  const handleApplyForSegment = (targetSegment: RestaurantSegment) => {
    setSegment(targetSegment);
    scrollToSection('contato', 'lead-name');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#242424]">
        <Header onCtaClick={() => scrollToSection('contato', 'lead-name')} />
        <main className="flex-1">
          <HeroSection
            onPrimaryCtaClick={() => scrollToSection('contato', 'lead-name')}
            onMethodologyCtaClick={() => scrollToSection('metodologia')}
          />
          <ProblemSection
            onCtaClick={() => scrollToSection('contato', 'lead-name')}
          />
          <MethodSection
            onCtaClick={() => scrollToSection('contato', 'lead-name')}
          />
          <EntryOfferSection
            onCtaClick={() => scrollToSection('contato', 'lead-name')}
          />
          <PortfolioSection
            onApplyForSegment={handleApplyForSegment}
            onPortfolioCtaClick={() => scrollToSection('contato', 'lead-name')}
          />
          <FaqSection />
          <DiagnosticSection segment={segment} onSegmentChange={setSegment} />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
