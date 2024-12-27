"use client";

import Hero from "../components/Hero";
import PricingCards from "../components/PricingCards";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PricingCards />
      <ContactForm />
    </>
  );
}
