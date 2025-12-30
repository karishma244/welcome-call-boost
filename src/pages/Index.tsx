import Header from "@/components/Header";
import SuccessCard from "@/components/SuccessCard";
import FounderMessage from "@/components/FounderMessage";
import NextSteps from "@/components/NextSteps";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <SuccessCard />
        <FounderMessage />
        <NextSteps />
        <TrustSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
