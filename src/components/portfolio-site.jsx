'use client';

import { useState } from 'react';
import Button from './button';
import AboutSection from './about-section';
import ContactCta from './contact-cta';
import FaqSection from './faq-section';
import Footer from './footer';
import Header from './header';
import Hero from './hero';
import PortfolioSection from './portfolio-section';
import ProcessSection from './process-section';
import ReviewsSection from './reviews-section';
import ServiceArea from './service-area';
import ServicesSection from './services-section';
import Stats from './stats';
import WhySection from './why-section';
import { phone, whatsapp } from './site-content';

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <Header phone={phone} whatsapp={whatsapp} Button={Button} open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onClose={closeMenu} />
    <main>
      <Hero whatsapp={whatsapp} phone={phone} Button={Button} />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <WhySection />
      <ReviewsSection />
      <ServiceArea whatsapp={whatsapp} Button={Button} />
      <FaqSection />
      <ContactCta phone={phone} whatsapp={whatsapp} Button={Button} />
    </main>
    <Footer phone={phone} whatsapp={whatsapp} />
  </div>;
}
