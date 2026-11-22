import {
  HeroSection,
  BenefitsSection,
  ProductTypesSection,
  QuoteFormSection,
  BoxStylesSection,
  IndustriesSection,
  WhyACBSection,
  SustainabilitySection,
  PortfolioSection,
  QuoteCtaSection,
  CustomisationSection,
  HowItWorksSection,
  FaqSection,
  CustomerReviewsSection,
  BlogResourcesSection,
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

      {/* 9. Portfolio Section: "Packaging made for brands like yours." */}
      <PortfolioSection />

      {/* 10. Quote CTA Section: "Ready to create packaging your customers will remember?" */}
      <QuoteCtaSection />

      {/* 11. Customisation Section: "Make Your Paperboard Boxes uniquely Yours." */}
      <CustomisationSection />

      {/* 12. How It Works Section: "From idea to doorstep in five simple steps." */}
      <HowItWorksSection />

      {/* 13. FAQ Section: "Questions, answered." */}
      <FaqSection />

      {/* 14. Customer Reviews Section: "What customers say" */}
      <CustomerReviewsSection />

      {/* 15. Packaging Resources / Blog Section: "Guides to help you package smarter." */}
      <BlogResourcesSection />

      {/* Spacing for bottom section drop shadow */}
      <div className="w-full h-14 bg-white" aria-hidden="true" />
    </>
  );
}
