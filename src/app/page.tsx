import Navbar from "@/widgets/landing/navbar";
import Hero from "@/widgets/landing/hero";

import Features from "@/widgets/landing/features";
import HowItWorks from "@/widgets/landing/how-it-works";
import Testimonials from "@/widgets/landing/testimonials";
import CTA from "@/widgets/landing/cta";
import Footer from "@/widgets/landing/footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}