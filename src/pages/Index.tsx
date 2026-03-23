import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AuthoritySection from "@/components/AuthoritySection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import OfferSection from "@/components/OfferSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollAnimations />
      <Navbar />
      <FloatingCTA />

      <HeroSection />
      <ProblemSection />
      <AuthoritySection />
      <ValuePropositionSection />
      <OfferSection />
      <GuaranteesSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
