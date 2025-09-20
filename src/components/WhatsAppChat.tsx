import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+255123456789"; // Replace with actual WhatsApp number

  const quickMessages = [
    "I need water treatment consultation",
    "Request equipment quote",
    "Schedule maintenance service",
    "Water quality testing inquiry",
  ];

  const openWhatsApp = (message?: string) => {
    const text = message || "Hello! I'm interested in your water treatment services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="mb-4 w-80 shadow-strong slide-in-up">
          <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">IDS Water Tech</h4>
                  <p className="text-xs opacity-90">Usually replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-4 space-y-3">
            <div className="bg-secondary/50 p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Hi! 👋 How can we help you with your water treatment needs?
              </p>
            </div>
            <div className="space-y-2">
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(message)}
                  className="w-full text-left p-3 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  {message}
                </button>
              ))}
            </div>
            <Button
              onClick={() => openWhatsApp()}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Start Chat on WhatsApp
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Float Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-float bg-green-500 hover:bg-green-600 text-white"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppChat;