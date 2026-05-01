"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Über uns",          id: "about"},
        {
          name: "Leistungen",          id: "features"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="Baldeau GmbH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Baldeau GmbH"
      description="Ihr zuverlässiger Partner für Bauvorhaben in Kevelaer und Umgebung. Qualität, Pünktlichkeit und professionelle Umsetzung."
      buttons={[
        {
          text: "Kontakt aufnehmen",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-with-hands-hips_23-2148269369.jpg",          imageAlt: "construction building site professional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-architect-with-helmet-construction-site_23-2147702481.jpg",          imageAlt: "construction building site professional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-architect-man-holding-cellphone-hard-hat-with-blueprint-construction-site_23-2148203937.jpg",          imageAlt: "construction building site professional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/worker-works-building-site_1398-1728.jpg",          imageAlt: "construction building site professional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/builders-works-building-site_1398-5089.jpg",          imageAlt: "construction building site professional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abandoned-building-clear-sky_23-2147770406.jpg",          imageAlt: "construction building site professional"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Über die Baldeau GmbH"
      description="Als erfahrenes Bauunternehmen setzen wir Maßstäbe in Qualität und Professionalität. Unser Team aus kompetenten Mitarbeitern begleitet Ihr Projekt von der Planung bis zur Fertigstellung."
      buttons={[
        {
            text: "Jetzt anfragen",            href: "#contact"
        }
      ]}
      bulletPoints={[
        {
          title: "Kompetenz",          description: "Langjährige Erfahrung im Baugewerbe."},
        {
          title: "Pünktlichkeit",          description: "Termingerechte Ausführung Ihrer Projekte."},
        {
          title: "Qualität",          description: "Höchste Standards bei jedem Bauabschnitt."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-136.jpg"
      mediaAnimation="slide-up"
      imageAlt="construction team meeting site"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Hochbau",          subtitle: "Komplette Projektabwicklung",          category: "Bau",          value: "Expertise"},
        {
          id: "2",          title: "Sanierung",          subtitle: "Bestandserhalt",          category: "Bau",          value: "Qualität"},
        {
          id: "3",          title: "Tiefbau",          subtitle: "Fundament und Vorbereitung",          category: "Bau",          value: "Präzision"},
      ]}
      title="Unsere Leistungen"
      description="Wir decken das gesamte Spektrum des Bauens ab."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Zahlen und Fakten"
      tag="Unsere Erfolgsbilanz"
      metrics={[
        {
          id: "m1",          value: "5.0",          description: "Google-Bewertung"},
        {
          id: "m2",          value: "10+",          description: "Jahre Erfahrung"},
        {
          id: "m3",          value: "100%",          description: "Kundenzufriedenheit"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Marian Bollert",          role: "Kunde",          testimonial: "Herr H. ist ein netter kompetenter Mitarbeiter.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-businessman-imagines-great-career_1163-5478.jpg"},
        {
          id: "t2",          name: "Mathias",          role: "Kunde",          testimonial: "Positiv: Ansprechbarkeit, Pünktlichkeit, Qualität, Professionalität.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15839.jpg"},
        {
          id: "t3",          name: "Kevin",          role: "Kunde",          testimonial: "Sehr kompetente Bauabwicklung, immer wieder gerne.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-businessman-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-7442.jpg"},
        {
          id: "t4",          name: "Sabine M.",          role: "Kundin",          testimonial: "Alles bestens gelaufen, sehr zuverlässig.",          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-safety-helmet-giving-hand-shake_23-2148242884.jpg"},
        {
          id: "t5",          name: "Thomas W.",          role: "Kunde",          testimonial: "Top Qualität bei fairem Preis.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-old-man-with-phone-showing-approval_23-2148269391.jpg"},
      ]}
      title="Kundenstimmen"
      description="Was unsere Kunden über unsere Arbeit sagen."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "Wo ist Ihr Sitz?",          content: "Haagscher Weg 2b, 47623 Kevelaer."},
        {
          id: "f2",          title: "Wie kann ich Sie erreichen?",          content: "Telefonisch unter 02832 505581."},
        {
          id: "f3",          title: "Bieten Sie auch Beratung an?",          content: "Ja, gerne beraten wir Sie individuell zu Ihrem Bauprojekt."},
      ]}
      title="Häufige Fragen"
      description="Alles Wichtige auf einen Blick."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "BauPartner",        "Architekturservice",        "Bausektor GmbH",        "Stahlbau Kevelaer",        "Materialhandel Niederrhein"]}
      title="Unsere Partner"
      description="Zusammenarbeit mit starken Partnern aus der Region."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      title="Kontakt aufnehmen"
      description="Haben Sie ein Bauprojekt? Schreiben Sie uns, wir melden uns schnellstmöglich zurück."
      buttonText="Anfrage senden"
      tag="Kontakt"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Adresse",          items: [
            {
              label: "Haagscher Weg 2b, 47623 Kevelaer",              href: "#"},
          ],
        },
        {
          title: "Kontakt",          items: [
            {
              label: "02832 505581",              href: "tel:02832505581"},
          ],
        },
        {
          title: "Rechtliches",          items: [
            {
              label: "Impressum",              href: "#"},
            {
              label: "Datenschutz",              href: "#"},
          ],
        },
      ]}
      logoText="Baldeau GmbH"
      copyrightText="© 2025 Baldeau GmbH"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}