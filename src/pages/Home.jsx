import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import TestimoniSection from "../components/TestimoniSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TestimoniSection />
      <ContactSection />
    </Layout>
  );
}