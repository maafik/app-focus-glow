import { useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AppsSection from "@/components/AppsSection";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
};

export default Index;
