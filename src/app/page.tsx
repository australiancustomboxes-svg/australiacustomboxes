import {
  HeroSection,
  BenefitsSection,
  ProductTypesSection,
  QuoteFormSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Height: 1,032px | Background: #041F49) */}
      <HeroSection />

      {/* 2. Benefits Section (Height: 187.64px | Background: #FFFFFF) */}
      <BenefitsSection />

      {/* 3. Product Types Section: "Custom box types for every product" */}
      <ProductTypesSection />

      {/* 4. Free Quote Request Form Section: "Get your custom packaging quote." */}
      <QuoteFormSection />

      {/* Spacing for bottom section drop shadow */}
      <div className="w-full h-14 bg-white" aria-hidden="true" />
    </>
  );
}
