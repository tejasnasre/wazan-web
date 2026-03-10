import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ProductShowcase from "@/components/landing/ProductShowcase";
import StepsSection from "@/components/landing/StepsSection";
import Testimonials from "@/components/landing/Testimonials";
import WaitlistSection from "@/components/landing/WaitlistSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />

      <ProductShowcase
        title="Comprehensive Desktop Experience"
        description="Full-featured desktop platform with in-depth weight analytics, trend charts, BMI tracking, and advanced progress monitoring for your weight journey."
        bullets={[
          "Detailed weight trend analysis and charts",
          "In-depth analytics with multiple chart types",
          "BMI and body measurement tracking",
          "Progress reports with data export",
          "Advanced goal setting with predictions",
        ]}
        cta="Explore Desktop Site"
        imageOnLeft
        mockupType="laptop"
      />

      <ProductShowcase
        title="Beautiful Mobile Experience"
        description="Log your weight anywhere with our sleek mobile interface designed for quick daily entries."
        bullets={[
          "Quick one-tap weight logging",
          "Daily progress and trend tracking",
          "BMI and body stats at a glance",
          "Smart reminders and notifications",
          "Share progress with friends and family",
        ]}
        cta="View Mobile App"
        imageOnLeft={false}
        mockupType="phone"
      />

      <StepsSection />
      <Testimonials />
      <WaitlistSection />

      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
