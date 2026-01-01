import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  const handleTelegramClick = () => {
    window.open("https://t.me/Irinasketchs", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:maafik@66.ru";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-up" style={{ animationDuration: '0.2s' }} />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md bg-card border border-border rounded-3xl p-8 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            <span className="gradient-text">Обсудим проект?</span>
          </h3>
          <p className="text-muted-foreground">
            Выберите удобный способ связи
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="neon"
            size="xl"
            className="w-full rounded-2xl"
            onClick={handleTelegramClick}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            Написать в Telegram
          </Button>

          <Button
            variant="ghost"
            size="xl"
            className="w-full rounded-2xl text-muted-foreground hover:text-foreground"
            onClick={handleEmailClick}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            maafik@66.ru
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
