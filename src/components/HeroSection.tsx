import { Button } from "@/components/ui/button";
import NeonCurves from "./NeonCurves";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeonCurves />
      
      <div className="relative z-10 container px-6 text-center">
        {/* Main Headline */}
        <h1 className="opacity-0 animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="block">Привет.</span>
          <span className="block mt-2">
            Я разрабатываю{" "}
            <span className="gradient-text">мобильные</span>
          </span>
          <span className="block mt-2">
            <span className="gradient-text">приложения.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto">
          <span className="text-primary font-semibold">Android</span>-приложения под бизнес, сервисы и стартапы
        </p>

        {/* Supporting text */}
        <p className="opacity-0 animate-fade-up animation-delay-400 text-sm md:text-base text-muted-foreground/70 mb-10 max-w-lg mx-auto">
          Полный цикл: идея → дизайн → разработка → публикация → поддержка
        </p>

        {/* CTA Button */}
        <div className="opacity-0 animate-fade-up animation-delay-600">
          <Button
            variant="neon"
            size="xl"
            onClick={onCtaClick}
            className="rounded-full"
          >
            Обсудить мобильное приложение
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
