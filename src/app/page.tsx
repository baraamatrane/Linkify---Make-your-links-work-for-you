import Image from "next/image";
import Header from "./components/home/header";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/Howitworks";
import TestimonialsSection from "./components/home/Testimonials";
import Pricing from "./components/home/pricing";
import CTA from "./components/home/CTA";
export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <HowItWorks />
      <TestimonialsSection />
      <Pricing />
      <CTA />
    </>
  );
}
