"use client";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <PricingCards />
      <Footer />
    </>
  );
}
