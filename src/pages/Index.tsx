import { useRef } from "react";
import Header from "@/components/Header";
import UrgencyBar from "@/components/UrgencyBar";
import SuccessCard from "@/components/SuccessCard";
import FounderMessage from "@/components/FounderMessage";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="particle w-64 h-64 bg-primary/5 top-20 left-10" style={{ animationDelay: '0s' }} />
        <div className="particle w-48 h-48 bg-primary/8 top-40 right-20" style={{ animationDelay: '2s' }} />
        <div className="particle w-32 h-32 bg-accent/10 bottom-40 left-1/4" style={{ animationDelay: '4s' }} />
        <div className="particle w-56 h-56 bg-primary/6 bottom-20 right-1/3" style={{ animationDelay: '1s' }} />
      </div>

      <Header />
      <UrgencyBar />
      
      <main className="relative z-10">
        <SuccessCard />
        <FounderMessage />
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
