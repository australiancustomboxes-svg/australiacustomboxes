import {
  HeroSection,
  BenefitsSection,
  ProductTypesSection,
  QuoteFormSection,
  BoxStylesSection,
  IndustriesSection,
  WhyACBSection,
  SustainabilitySection,
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

      {/* 5. Box Styles Showcase: "Packaging designed around your brand." */}
      <BoxStylesSection />

      {/* 6. Industries Section: "Packaging for the way your industry sells." */}
      <IndustriesSection />

      {/* 7. Why ACB Section: "We don't just make boxes. We make brands look better." */}
      <WhyACBSection />

      {/* 8. Sustainability Section: "Better packaging. Better future." */}
      <SustainabilitySection />

      {/* Spacing for bottom section drop shadow */}
      <div className="w-full h-14 bg-white" aria-hidden="true" />
    </>
  );
}
