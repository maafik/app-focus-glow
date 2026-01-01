import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import AppsSection from "@/components/AppsSection";
import RequirementsSection from "@/components/RequirementsSection";
import PricingSection from "@/components/PricingSection";
import SafeDealSection from "@/components/SafeDealSection";
import AboutSection from "@/components/AboutSection";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTelegramClick = () => {
    window.open("https://t.me/Irinasketchs", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Разработка мобильных приложений | Android разработчик</title>
        <meta
          name="description"
          content="Профессиональная разработка Android-приложений для бизнеса, сервисов и стартапов. Полный цикл от идеи до публикации в RuStore и Google Play."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main className="bg-background min-h-screen overflow-x-hidden">
        <HeroSection onCtaClick={() => setIsModalOpen(true)} />
        <AppsSection />
        <RequirementsSection />
        <PricingSection />
        <SafeDealSection />
        <AboutSection />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container px-6">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-lg font-semibold">Связаться со мной</h3>
            <Button
              variant="neon"
              size="lg"
              onClick={handleTelegramClick}
              className="rounded-full"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Написать в Telegram
            </Button>
            <a 
              href="mailto:maafik@66.ru" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              maafik@66.ru
            </a>
          </div>

          {/* Копирайт */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Android-разработчик. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
