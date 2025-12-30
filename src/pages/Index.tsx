import { useRef } from "react";
import Header from "@/components/Header";
import UrgencyBar from "@/components/UrgencyBar";
import SuccessCard from "@/components/SuccessCard";
import StepFlow from "@/components/StepFlow";
import CalendarBooking from "@/components/CalendarBooking";
import ValueCards from "@/components/ValueCards";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import ChatbotIcon from "@/components/ChatbotIcon";
import Footer from "@/components/Footer";

const Index = () => {
  const calendarRef = useRef<HTMLElement>(null);

  const scrollToCalendar = () => {
    calendarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <UrgencyBar />
      
      <main>
        <SuccessCard />
        <StepFlow onBookCallClick={scrollToCalendar} />
        <CalendarBooking ref={calendarRef} />
        <ValueCards />
        <SocialProof />
        <FinalCTA onBookCallClick={scrollToCalendar} />
      </main>

      <Footer />
      <ChatbotIcon />
    </div>
  );
};

export default Index;
