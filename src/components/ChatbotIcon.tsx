import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 glass-card p-4 shadow-elevated fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Support</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Hi! 👋 Need help booking your strategy call? I'm here to assist you.
          </p>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
          />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full gradient-primary shadow-glow flex items-center justify-center
          transition-all duration-300 hover:scale-110 btn-glow
          ${isOpen ? 'rotate-90' : ''}
        `}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Notification dot */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-warning rounded-full border-2 border-background animate-pulse" />
      )}
    </div>
  );
};

export default ChatbotIcon;
