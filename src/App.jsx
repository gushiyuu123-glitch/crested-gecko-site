import PredatorCursor from "./components/common/PredatorCursor";

import Hero from "./components/sections/Hero";
import FeaturedGeckos from "./components/sections/FeaturedGeckos";
import Policy from "./components/sections/Policy";
import FirstGuide from "./components/sections/FirstGuide";
import Flow from "./components/sections/Flow";
import FAQ from "./components/sections/FAQ";
import ContactCTA from "./components/sections/ContactCTA";
import BusinessInfo from "./components/sections/BusinessInfo";
import Footer from "./components/sections/Footer";

/* SP専用を新規追加 */
import HeroSp from "./components/sections-sp/HeroSp";
import FeaturedGeckosSp from "./components/sections-sp/FeaturedGeckosSp";
import PolicySp from "./components/sections-sp/PolicySp";
import FirstGuideSp from "./components/sections-sp/FirstGuideSp";
import FlowSp from "./components/sections-sp/FlowSp";
import FAQSp from "./components/sections-sp/FAQSp";
import ContactCTASp from "./components/sections-sp/ContactCTASp";
import BusinessInfoSp from "./components/sections-sp/BusinessInfoSp";
import FooterSp from "./components/sections-sp/FooterSp";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gecko-depth text-text-main">
      {/* PC */}
      <div className="hidden md:block">
        <PredatorCursor />
        <Hero />
        <FeaturedGeckos />
        <Policy />
        <FirstGuide />
        <Flow />
        <FAQ />
        <ContactCTA />
        <BusinessInfo />
        <Footer />
      </div>

      {/* SP */}
      <div className="md:hidden">
        <HeroSp />
        <FeaturedGeckosSp />
        <PolicySp />
        <FirstGuideSp />
        <FlowSp />
        <FAQSp />
        <ContactCTASp />
        <BusinessInfoSp />
        <FooterSp />
      </div>
    </div>
  );
}