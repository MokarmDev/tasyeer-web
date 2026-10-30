import { Audience } from "@/components/sections/audience";
import { Cta } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { FeatureBento } from "@/components/sections/feature-bento";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PrivacyBand } from "@/components/sections/privacy-band";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ScreenshotsTabs } from "@/components/sections/screenshots-tabs";
import { SoftwareAppJsonLd } from "@/components/site/json-ld";

export default function HomePage() {
  return (
    <>
      <SoftwareAppJsonLd />
      <Hero />
      <ProblemSolution />
      <FeatureBento />
      <HowItWorks />
      <ScreenshotsTabs />
      <PrivacyBand />
      <Audience />
      <FaqSection />
      <Cta />
    </>
  );
}
