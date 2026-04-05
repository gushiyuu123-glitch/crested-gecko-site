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

/* SP専用 */
import MobileNavSp from "./components/sections-sp/MobileNavSp";
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
        <MobileNavSp />

        <div id="top-sp">
          <HeroSp />
        </div>

        <div id="geckos-sp">
          <FeaturedGeckosSp />
        </div>

        <div id="policy-sp">
          <PolicySp />
        </div>

        <div id="first-guide-sp">
          <FirstGuideSp />
        </div>

        <div id="flow-sp">
          <FlowSp />
        </div>

        <div id="faq-sp">
          <FAQSp />
        </div>

        <div id="contact-sp">
          <ContactCTASp />
        </div>

        <div id="info-sp">
          <BusinessInfoSp />
        </div>

        <div id="footer-sp">
          <FooterSp />
        </div>
      </div>
    </div>
  );
}